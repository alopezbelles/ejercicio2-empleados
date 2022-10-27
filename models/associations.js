const Departamento = require('./departamentos')
const Empleado = require('./empleados')

//Relacion 1 a N departamento-empleados
Departamento.hasMany(Empleado)
Empleado.belongsTo(Departamento)

