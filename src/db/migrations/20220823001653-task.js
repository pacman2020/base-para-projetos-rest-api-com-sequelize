'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('Tasks',{
        title: Sequelize.DataTypes.STRING
    });
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('Tasks');
  }
};
