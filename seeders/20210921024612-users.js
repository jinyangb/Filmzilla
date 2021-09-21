'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'ChildishBrandino98',
          email: 'daemailofdacentury@gmail.com',
          password_digest:
            'kdl3kes8djwdsafjds;fjapj398rj3pwjfpdsjfpoijapdj98vucx98uv9u8idjfpoa983908',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users')
  }
}
