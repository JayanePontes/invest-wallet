'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('assets',
      [{
        codAsset: 1,
        amountAssets: 50,
        value: 25.60,

      },
      {
        codAsset: 2,
        amountAssets: 26,
        value: 36.10,
      },
      {
        codAsset: 3,
        amountAssets: 20,
        value: 3.10,
      },
      {
        codAsset: 4,
        amountAssets: 6,
        value: 16.60,
      },
      {
        codAsset: 5,
        amountAssets: 12,
        value: 19.90,
      },
      ], { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('assets', null, {});
  },
};
