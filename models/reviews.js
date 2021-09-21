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
      // define association here
    }
  }
  Reviews.init(
    {
      description: DataTypes.STRING,
      rating: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Reviews',
      tableName: 'reviews'
    }
  )
  return Reviews
}
