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
        foreignKey: 'userId'
      })

      Reviews.hasOne(models.Movies, {
        foreignKey: 'movieId'
      })
    }
  }
  Reviews.init(
    {
      description: DataTypes.STRING,
      rating: DataTypes.INTEGER,
      movieId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'movies',
          id: 'id'
        },
        userId: {
          type: DataTypes.INTEGER,
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
