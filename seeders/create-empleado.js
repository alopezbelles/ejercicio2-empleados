'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('empleado', [
      { 
        id_dni: "45897323N", 
        nombre: "Untal", 
        apellidos: "Rodriguez Sánchez",
        departamento /*FK*/: "",
      },    
    ], {});

    }
}