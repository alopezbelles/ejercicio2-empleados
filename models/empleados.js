const { DataTypes, Model } = require('sequelize')
// const sequelize = require('../db/db')

class Empleado extends Model {}

Empleado.init({
    dni: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        validate: {
            len: [9, 9]
        }
    },
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
   
}, {
    sequelize,
    modelName: 'empleados',
    freezeTableName: true,
    timestamps: false
})

module.exports = Empleado