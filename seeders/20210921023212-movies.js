'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('movies', [
      {
        title: 'Baby Driver',
        overview: 'this movie is about babies driving and stuff',
        genre: 'Thriller',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('movies')
  }
}
