import { Knex } from "knex";
import { exit } from "process";
import { IData } from "../interfaces/IData";

export class LoadDataService {
    constructor(private context: Knex<any, unknown[]>) { }

    public insertData(fixtureData: Array<IData>) {
       return this.context.transaction( async(trx) => {
            try{
                for (let index = 0; index < fixtureData.length; index++) {
                    const data = fixtureData[index];
                    const modelName = data.model;
                    delete data.model;
                    const sql = this.context(modelName).transacting(trx).insert(data).toQuery();
                    console.log(sql);
                    await this.context(modelName).transacting(trx).insert(data);

                }
               await trx.commit()
               exit()
            } catch(e){
                trx.rollback(e);
                console.log(e);
                exit()
                throw new Error(e)
            }
        }
        )
    }

}