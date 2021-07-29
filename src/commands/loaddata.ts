
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
      print: { info, error },
    } = toolbox

      try{

        const jsonData = JSON.parse(fs.readFileSync(parameters.first, 'utf8'));
        
        const loaddataService = new LoadDataService(contextDatabase);
        await loaddataService.insertData(jsonData);

        info(`Data Loaded`)
      } catch(e){
        error(e)

      }
  },
}
