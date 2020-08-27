const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Topping extends Model { }

Topping.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'topping' })

module.exports = Topping