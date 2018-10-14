const {argv} = require('./config/yargs')
const colors = require('colors')
const {add, getList} = require('./to-do/to-do')

let command = argv._[0];

switch (command) {
    case 'crear':
        let addToDo = add(argv.d)
        console.log(addToDo)
        break;
    case 'listar':
        let toDoList = getList();
        for(let todo of toDoList){
            console.log('========='.blue + ' Por hacer '.bgCyan + '========='.blue)
            console.log(`${todo.descripcion}`)
            console.log(`Estado: ${todo.completado}`)
            console.log('============================='.blue)
        }   
        break;
    case 'actualizar':
        console.log('Actualizar pendientes')
        break;
    default:
        console.log(`No se reconoce el commando: ${command}`.red)
        break;
}
