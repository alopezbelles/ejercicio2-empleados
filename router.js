const express = require('express')
const router = express.Router()

const DepartamentosRoutes = require('./views/DepartamentosRoutes')
const EmpleadosRoutes = require('./views/EmpleadosRoutes')


//middleware para las rutas de usuario
router.use('/Dep', DepartamentosRoutes)
router.use('/Emp', EmpleadosRoutes)


module.exports = router