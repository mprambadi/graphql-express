"use strict";
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const user = [...Array(100).keys()].map(_ => ({
      username: faker.name.firstName(),
      email: faker.internet.email(),
      password: "test",
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    return queryInterface.bulkInsert("Users", user, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
