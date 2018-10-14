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

module.exports = {
    add,
    getList
}
