const bcryptjs = require('bcryptjs');
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        nome: 'Luis',
        email: 'luiz@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        nome: 'Luis2',
        email: 'luiz2@gmail.com',
        password_hash: await bcryptjs.hash('dnfe12', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        nome: 'Luis3',
        email: 'luiz3@gmail.com',
        password_hash: await bcryptjs.hash('123hweu', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },

    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
