'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('WalletClients', {
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
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
      },
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('WalletClients');
  }
};
