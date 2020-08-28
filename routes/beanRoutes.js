const router = require('express').Router()
const { Bean, Drink } = require('../models')

// GET all bean
router.get('/beans', (req, res) => {
  Bean.findAll({ include: [Drink] })
    .then(beans => res.json(beans))
    .catch(err => console.log(err))
})

router.get('/beans/:id', (req, res) => {
  Bean.findOne({ where: { id: req.params.id } })
    .then(bean => res.json(bean))
    .catch(err => console.log(err))
})

router.post('/beans', (req, res) => {
  Bean.create(req.body)
    .then(bean => res.json(bean))
    .catch(err => console.log(err))
})

module.exports = router