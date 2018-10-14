const {argv} = require('./config/yargs')
const colors = require('colors')
const {add} = require('./to-do/to-do')

let command = argv._[0];

switch (command) {
    case 'crear':
        let addToDo = add(argv.d)
        console.log(addToDo)
        break;
    case 'listar':
        console.log('Listar pendientes')
        break;
    case 'actualizar':
        console.log('Actualizar pendientes')
        break;
    default:
        console.log(`No se reconoce el commando: ${command}`.red)
        break;
}

console.log(argv)
