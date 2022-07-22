'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('assets', {
      codAsset: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      amountAssets: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      value: Sequelize.INTEGER,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('assets');
  }
};
