'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gma.com',
      password: '123456',
      firstName: 'lunars',
      lastName: 'nhan',
      address: 'VN',
      phonenumber: 'VN',
      gender: 1,
      image: 'ROLE',
      roleId: 'R1',
      potisionid: 'R1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
