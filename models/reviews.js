'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reviews.belongsTo(models.Users, {
        as: 'user',
        foreignKey: 'userId'
      })

      Reviews.belongsTo(models.Movies, {
        as: 'movies',
        foreignKey: 'movieId'
      })
    }
  }
  Reviews.init(
    {
      poster: DataTypes.STRING,
      profile: DataTypes.STRING,
      movietitle: DataTypes.STRING,
      description: { type: DataTypes.STRING, allowNull: false },
      rating: { type: DataTypes.STRING, allowNull: false },
      movieId: {
        type: { type: DataTypes.INTEGER, allowNull: false },
        references: {
          model: 'movies',
          id: 'id'
        },
        userId: {
          type: { type: DataTypes.INTEGER, allowNull: false },
          references: {
            model: 'users',
            id: 'id'
          }
        }
      }
    },

    {
      sequelize,
      modelName: 'Reviews',
      tableName: 'reviews'
    }
  )
  return Reviews
}
