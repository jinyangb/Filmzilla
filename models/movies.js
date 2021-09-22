'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Movies.hasMany(models.Reviews, {
        as: 'movies',
        foreignKey: 'movieId'
      })
    }
  }
  Movies.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      overview: { type: DataTypes.STRING, allowNull: false },
      genre: { type: DataTypes.STRING, allowNull: false }
    },
    {
      sequelize,
      modelName: 'Movies',
      tableName: 'movies'
    }
  )
  return Movies
}
