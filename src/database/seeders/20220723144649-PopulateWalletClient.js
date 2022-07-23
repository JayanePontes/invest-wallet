'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('WalletClients',
      [{
        codClient: 1,
        value: 0,
      },
      ], { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('WalletClients', null, {});

  }
};
