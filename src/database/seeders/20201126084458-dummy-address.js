"use strict";
const faker = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const address = [...Array(100).keys()].map((_) => ({
      userId: faker.random.number({ min: 1, max: 10 }),
      address: faker.lorem.word(),
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    return queryInterface.bulkInsert("Addresses", address, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Addresses", null, {});
  },
};
