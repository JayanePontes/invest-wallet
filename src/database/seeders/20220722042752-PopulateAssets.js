'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('assets',
      [{
        codAsset: 1,
        name: 'AZUL4',
        amountAssets: 50,
        value: 350.00,
      },
      {
        codAsset: 2,
        name: 'PETR4',
        amountAssets: 26,
        value: 320.00,
      },
      {
        codAsset: 3,
        name: 'VALE4',
        amountAssets: 20,
        value: 240.10,
      },
      {
        codAsset: 4,
        name: 'XPTO',
        amountAssets: 6,
        value: 166.60,
      },
      {
        codAsset: 5,
        name: 'IBOVESPA',
        amountAssets: 12,
        value: 190.00,
      },
      ], { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('assets', null, {});
  },
};
