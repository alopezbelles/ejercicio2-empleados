'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {    
    await queryInterface.createTable('usuario', {
      dni: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      nombre: Sequelize.STRING,
      apellidos: Sequelize.STING,
     
      
    });

  },

  
  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
