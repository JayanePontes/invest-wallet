'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('clients',
      [{
        codClient: 1,
        name: 'Shirley Hamilton',
        email: 'shirleyhamilton@gmail.com',
        password: '123456',

      },
      {
        codClient: 2,
        name: 'Miguel Souza',
        email: 'Miguesouza@gmail.com',
        password: '123456',
      },
      ], { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clients', null, {});
  },
};
