'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('client',
      [{
        codClient: 1,
        name: 'Shirley Hamilton',
        email: 'shirleyhamilton@gmail.com',
        passwordHash: '123456',

      },
      {
        codClient: 2,
        name: 'Miguel Souza',
        email: 'Miguesouza@gmail.com',
        passwordHash: '123456',
      },
      ], { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('client', null, {});
  },
};
