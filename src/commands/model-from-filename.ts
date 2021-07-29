import { GluegunToolbox } from 'gluegun';
import { LoadDataService } from '../services/LoadDataService'
import *  as path from 'path';

module.exports = {
  name: 'model-from-filename',
  alias: ['mfn'],
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      print: {  error, success },
    } = toolbox

      try{
        
        const loaddataService = new LoadDataService();
        const filePath = path.resolve(parameters.first)
        await loaddataService.addModelByFileName(filePath);

        success(`Data Loaded`)
        process.exit(1);
      } catch(e){
        error(e)
        process.exit(1);

      }
  },
}
