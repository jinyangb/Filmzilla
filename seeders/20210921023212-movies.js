'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('movies', [
      {
        title: 'Lord of the rings',
        overview: 'this movie is about swords and stuff',
        genre: 'Action',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('movies')
  }
}
