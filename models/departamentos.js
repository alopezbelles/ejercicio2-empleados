const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db/db')

class Departamento extends Model {}

Departamento.init({
    DNI: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        validate: {
            len: [9, 9]
        }
    },
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
},
{
    sequelize,
    modelName: "Departamento",
    freezeTableName: true,
    timestamps: false
})

module.exports = Departamento