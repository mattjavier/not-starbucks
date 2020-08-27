const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Syrup extends Model { }

Syrup.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  carbs: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, { sequelize, modelName: 'syrup' })

module.exports = Syrup