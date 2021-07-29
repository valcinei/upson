
import * as fs from 'fs';
import { GluegunToolbox } from 'gluegun';
import { contextDatabase } from '../database/config';
import { LoadDataService } from '../services/LoadDataService'


module.exports = {
  name: 'loaddata',
  alias: ['g'],
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      print: {  error, success },
    } = toolbox

      try{
        success("Starting");
        const jsonData = JSON.parse(fs.readFileSync(parameters.first, 'utf8'));
        
        const loaddataService = new LoadDataService(contextDatabase);

        await loaddataService.insertData(jsonData);

        success(`Data Loaded`)
        process.exit(1);
      } catch(e){
        error(e)
        process.exit(1);

      }
  },
}
