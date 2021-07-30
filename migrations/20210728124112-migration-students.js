'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('students', {
        name: {
            allowNull: false,
            type: Sequelize.STRING
        },
        email: {
            allowNull: false,
            unique: true,
            type: Sequelize.STRING
        },
        cpf: {
            allowNull: false,
            unique: true,
            type: Sequelize.STRING,
        
        }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('students');
  }
};
