'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('reviews', 'movieId', {
      type: Sequelize.INTEGER,
      reference: {
        model: 'movies',
        id: 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('reviews, movieId')
  }
}
