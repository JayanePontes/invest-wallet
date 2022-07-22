'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('assetsClient', {
      codClient: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'client',
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
      value: {
        type: Sequelize.DECIMAL,
      },

    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('assetsClient');
  }
};
