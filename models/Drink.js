const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Drink extends Model { }

Drink.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'drink' })

module.exports = Drink