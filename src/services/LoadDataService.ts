const {promisify} = require('util');

const fs = require('fs');
const readFileAsync = promisify(fs.readFile);
const wirteFileAsync = promisify(fs.writeFile);

import { Knex } from "knex";
import { IData } from "../interfaces/IData";
import { print } from "gluegun";

export class LoadDataService {
    constructor(private context: Knex<any, unknown[]> = null) { }

     public async insertData(fixtureData: Array<IData> ) {
         try{
       
             await this.context.transaction(async (trx)=>{
                for (let index = 0; index < fixtureData.length; index++) {
                    const data = fixtureData[index];
                    const modelName = data.model;
                    delete data.model;
                    const query = trx.insert(data).table(modelName).toQuery()
                    print.highlight('Importing')
                    print.warning(query)
                    await trx.insert(data).table(modelName);
                }
             })

         }catch(e){
            throw new Error(e)
         }
    }

    public async addModelByFileName(filePath, keyModel="model" ){
        const paths:Array<any> = await fs.promises.readdir(filePath);

        paths.forEach( async fileName => {   
            const fullPathFile = `${filePath}/${fileName}`;
        
            const file = await readFileAsync(fullPathFile, {encoding: 'utf8'});
            if(this.IsJsonString(file)){
                const parserJson = JSON.parse(file);
                if(!parserJson.model){
                    const newJson = this.addKeyInJsonArrayModel(parserJson, keyModel, fileName);
                    await wirteFileAsync(`${filePath}/${keyModel}-${fileName}`, JSON.stringify(newJson))
                }
            }
        });
        
     
    }

    public addKeyInJsonArrayModel(json:Array<IData>, key, value) :IData[]{
        const data = json.map(item=> {
            item[key] = String(value).replace(".json", "");
            return item
        })
        return data;
    }

    public IsJsonString(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

}