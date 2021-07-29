import { Knex } from "knex";

import { IData } from "../interfaces/IData";

export class LoadDataService {
    constructor(private context: Knex<any, unknown[]>) { }

     public async insertData(fixtureData: Array<IData>) {
         try{
             await this.context.transaction(async (trx)=>{
                for (let index = 0; index < fixtureData.length; index++) {
                    const data = fixtureData[index];
                    const modelName = data.model;
                    delete data.model;
                    const query = this.context.insert(data).table(modelName).toQuery()
                    console.log('importing' , query );
                    await this.context.insert(data).table(modelName);
                }
             })

         }catch(e){

            console.log(e) 
         }
    }

}