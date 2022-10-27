'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Departamento', [
      { 
        id_departamento: "333", 
        nombre: "Juniorhell", 
        presupuesto: "1000"
      },    
    ], {});

    }
}