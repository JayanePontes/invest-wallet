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
          model: 'client',
          key: 'codClient',
        },
      },
      value: {
        type: Sequelize.DECIMAL,
      },
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('walletClient');
  }
};
