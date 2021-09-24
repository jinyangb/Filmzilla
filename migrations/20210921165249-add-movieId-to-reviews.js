'use strict'

const { sequelize } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('reviews', 'movieId', {
      type: Sequelize.INTEGER,
      reference: {
        model: 'movies',
        id: 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.deleteColumn('reviews', 'movieId')
  }
}
