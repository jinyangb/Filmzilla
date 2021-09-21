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
        foreignKey: 'movieId'
      })
    }
  }
  Movies.init(
    {
      title: DataTypes.STRING,
      overview: DataTypes.STRING,
      genre: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Movies',
      tableName: 'movies'
    }
  )
  return Movies
}
