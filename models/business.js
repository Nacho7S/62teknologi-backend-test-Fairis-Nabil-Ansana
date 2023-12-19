'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Business extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Business.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    alias: DataTypes.STRING,
    name: DataTypes.STRING,
    image_url: DataTypes.STRING,
    is_closed: DataTypes.BOOLEAN,
    url: DataTypes.STRING,
    review_count: DataTypes.INTEGER,
    categories: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    coordinates: DataTypes.STRING,
    transactions: DataTypes.STRING,
    price: DataTypes.STRING,
    location: DataTypes.STRING,
    phone: DataTypes.STRING,
    display_phone: DataTypes.STRING,
    distance: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Business',
  });
  return Business;
};