import { LoadDataService } from './../src/services/LoadDataService';
import { Knex } from "knex"
// import { IData } from '../src/interfaces/IData';

test('test list files', async () => {
  const db = {} as Knex<any, unknown[]>
  const service = new LoadDataService(db);
  service.addModelByFileName('/Users/valcinei.silva/workspace/fpf/upson/data/temp/scenario2')

})

// test('test add key json files', async () => {
//   const db = {} as Knex<any, unknown[]>
//   const service = new LoadDataService(db);
//   const jsonData= [{}] as IData[]
//   const json = service.addKeyInJsonArrayModel(jsonData, 'model', 'APOLO_TABLE');
//   expect(json[0]['model']).toEqual('APOLO_TABLE')

// })