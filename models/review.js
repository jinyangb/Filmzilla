'use strict'

const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Review.belongsTo(models.User, {
      //   foreignKey: 'userId'
      // })
      // Review.hasOne(models.Movie, {
      //   foreignKey: 'movieId'
      // })
    }
  }
  Review.init(
    {
      description: DataTypes.STRING,
      rating: DataTypes.INTEGER,
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          id: 'id'
        }
      },
      movieId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'movies',
          id: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Review',
      tableName: 'reviews'
    }
  )
  return Review
}
