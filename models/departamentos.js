const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db/db')

class Departamento extends Model {}

Departamento.init({
    id_departamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre: DataTypes.STRING,
    presupuesto: DataTypes.INTEGER
},
{
    sequelize,
    modelName: "Departamento",
    freezeTableName: true,
    timestamps: false
})

module.exports = Departamento