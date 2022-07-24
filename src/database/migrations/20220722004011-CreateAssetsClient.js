'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('AssetsClients', {
      codClient: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'clients',
          key: 'codClient',
        },
      },
      codAsset: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'assets',
          key: 'codAsset',
        },
      },
      name: Sequelize.STRING,
      amountAssets: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      value: {
        type: Sequelize.DECIMAL(10,2),
      },
      investesAmount: Sequelize.DECIMAL(10,2),
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('AssetsClients');
  }
};
