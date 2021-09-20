'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('reviews', 'userId', {
      type: Sequelize.INTEGER,
      reference: {
        model: 'users',
        id: 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('reviews', 'userId')
  }
}
