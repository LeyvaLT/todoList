const colors = require('colors/safe')


let descripcion = {
    alias: 'd',
    demand: true,
    desc: colors.bgRed('Descripcion la tarea por hacer')
}

let completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como terminada una tarea'
}

const argv = require('yargs')
            .command('crear', colors.blue('Crea una nueva tarea por hacer'), {
                descripcion
            })
            .command('actualizar', colors.blue('Actualiza una tarea a completado'), {
                descripcion,
                completado
            })
            .command('borrar', colors.blue('Elimina una tarea'), {
                descripcion
            })
            .command('filtro', colors.blue('Filtra las tareas por estado'), {
                completado
            })
            .command('lisatar', colors.blue('Lista las tareas que tienes por hacer'))
            .help()    
            .argv

module.exports = {
    argv
}
