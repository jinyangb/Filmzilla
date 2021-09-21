'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('reviews', 'userId', {
      type: Sequelize.INTEGER,
      reference: {
        model: 'users',
        id: 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.deleteColumn('reviews', 'userId')
  }
}
