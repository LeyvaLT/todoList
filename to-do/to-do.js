const fs = require('fs')
const colors = require('colors/safe')

let toDoList = []

const save = () => {
    let data = JSON.stringify(toDoList);
    fs.writeFile(`./db/data.json`, data, (err) => {
        if (err)  throw new Error('Error al guardar ', err)
      })
}

const add = (descripcion) => {
    
    list()
    let toDo = {
        descripcion,
        completado: false
    }

    toDoList.push(toDo)
    save()
    return toDoList

}

const loadList = () => {
    
    try {
        toDoList = require('../db/data.json')   
    } catch (error) {
        toDoList = [] 
    }

    
}

const getList = () => {
    loadList()
    return toDoList
}

const updateList = (descripcion, completado = true) => {
    loadList()
    let index = toDoList.findIndex( tarea => tarea.descripcion === descripcion )

    if ( index >= 0 ) {
        
        toDoList[index].completado = completado
        save()
        return true 

    }else return false
}


let dropElement = (descripcion) => {
    loadList()
    let index = toDoList.findIndex( tarea => tarea.descripcion === descripcion )

    if ( index >= 0 ) {
        
        toDoList.splice(index, index)
        save()
        return true 

    }else return false

}


let filterList = (completado = true) => {
    loadList()
    let filter = toDoList.filter(tarea => (tarea.completado === completado));
    console.log(filter)
    return filter
}


module.exports = {
    add,
    getList,
    updateList,
    dropElement,
    filterList  
}
