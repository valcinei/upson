
import { GluegunCommand } from 'gluegun'


const command: GluegunCommand = {
  name: 'upson',
  run: async toolbox => {
    const { print } = toolbox

    print.info('Upson CLI')
    print.info('command')
    print.info('upson loaddata data.json')
  },
}

module.exports = command
