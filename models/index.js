const Bean = require('./Bean.js')
const Syrup = require('./Syrup.js')
const Topping = require('./Topping.js')
const Drink = require('./Drink.js')

Topping.hasMany(Drink)

Bean.hasMany(Drink)

Syrup.hasMany(Drink)

Drink.belongsTo(Bean)
Drink.belongsTo(Topping)
Drink.belongsTo(Syrup)

module.exports = { Bean, Syrup, Topping, Drink }