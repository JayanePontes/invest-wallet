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
        type: Sequelize.STRING,
        allowNull: false,
      },
      value: {
        type: Sequelize.DECIMAL,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('assets');
  }
};
