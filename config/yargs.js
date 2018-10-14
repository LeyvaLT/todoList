const colors = require('colors/safe')
const argv = require('yargs')
            .command('crear', colors.blue('Crea una nueva tarea por hacer'), {
                descripcion: {
                    alias: 'd',
                    demand: true,
                    desc: colors.bgRed('Descripcion de una tarea por hacer')
                }
            })
            .command('actualizar', colors.blue('Actualiza una tarea a completado'), {
                descripcion: {
                    alias: 'd',
                    demand: true,
                    desc: colors.bgRed('Descripcion de una tarea por hacer')
                },
                completado: {
                    alias: 'c',
                    default: true,
                    desc: 'Marca como terminada una tarea'
                }
            })
            .command('lisatar', colors.blue('Lista las tareas que tienes por hacer'))
            .help()    
            .argv

module.exports = {
    argv
}
