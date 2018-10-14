const argv = require('yargs').argv
const colors = require('colors')

let command = argv._[0];

switch (command) {
    case 'crear':
        console.log('Agregar a pendientes')
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
