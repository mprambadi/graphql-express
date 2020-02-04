"use strict";
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const posts = [...Array(100).keys()].map(_ => ({
      title: faker.lorem.word(),
      content: faker.lorem.words(5),
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    return queryInterface.bulkInsert("Posts", posts, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Posts", null, {});
  }
};
