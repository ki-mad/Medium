'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        fullname: 'Aimer',
        username: 'Aimers',
        email: 'aimer@japan.com',
        password: 'xxx',
        is_active: 1,
        CreatedAt: new Date,
        updatedAt: new Date
      }, 
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
