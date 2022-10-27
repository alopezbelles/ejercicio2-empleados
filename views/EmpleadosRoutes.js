const express = require('express')
const router = express.Router()

const Empleado = require('../models/empleados')

const db = require('../db/db')


// CRUD READ
router.get('/', (req, res) => {
    Empleado.findAll()
    .then(resp => {
        res.send(resp)
    })
})


// CRUD CREATE
router.post('/createEmp', async (req, res) => {
    try {
        let data = req.body
        let resp = await Empleado.create({
            dni: data.dni,
            nombre: data.nombre,
            apellidos: data.apellidos,
        })

        res.send(resp)
    } catch(error) {
        res.send(error)
    }
})

// CRUD UPDATE
router.put('/updateDep', async (req, res) => {
    try{
        let data = req.body

        let resp = await Departamento.update(
            {
                nombre: data.nombre,
                presupuesto: data.presupuesto
            }, 
            {
                where: { id_departamento: data.id_departamento}
            })

        res.send({
            resp: resp,
            message: "Se ha actualizado el registro correctamente",
            id: data.nombre
        })

    } catch(error){
        res.send(error)
    }
})

// CRUD DELETE
router.delete('/deleteDep/:nombre', async (req, res) => {
    try{
        
        let nombre = req.params.nombre
        let resp = await Departamento.destroy({
            where: { nombre: nombre }
        })
        console.log(resp)
        if(resp == 1){
            res.send("El dep ha sido eliminado")
        } else {
            res.send("No se ha podido eliminar el dep")
        }
        
    } catch(error){
        res.send(error)
    }
})


module.exports = router