const router = require('express').Router()
const { Topping, Drink } = require('../models')

// GET all syrups
router.get('/toppings', (req, res) => {
  Topping.findAll({ include: [Drink] })
    .then(toppings => res.json(toppings))
    .catch(err => console.log(err))
})

router.post('/toppings', (req, res) => {
  Topping.create(req.body)
    .then(toppings => res.json(toppings))
    .catch(err => console.log(err))
})

module.exports = router