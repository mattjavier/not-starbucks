const router = require('express').Router()
const { Drink, Bean, Syrup, Topping } = require('../models')

router.get('/drinks', (req, res) => {
  Drink.findAll({ include: [Bean, Syrup, Topping] })
    .then(drinks => res.json(drinks))
    .catch(err => console.log(err))
})

router.post('/drinks', (req, res) => {
  Drink.create(req.body)
    .then(drink => res.json(drink))
    .catch(err => console.log(err))
})

module.exports = router