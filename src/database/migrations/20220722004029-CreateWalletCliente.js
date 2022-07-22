'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('walletClient', {
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
      value: {
        type: Sequelize.INTEGER,
      },
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('walletClient');
  }
};
