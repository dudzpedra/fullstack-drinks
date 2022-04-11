const drinksRouter = require('express').Router()
const Drink = require('../models/drink')

drinksRouter.get('/', async (req, res) => {
    const drinks = await Drink.find({})
    res.json(drinks)
})

drinksRouter.get('/:id', async (req, res) => {
    const drink = await Drink.findById(req.params.id)
    if (drink) {
        res.status(200).json(drink)
    } else {
        res.status(404).end()
    }
})

drinksRouter.post('/', async (req, res) => {
    const body = req.body
    if (body.title && body.artist && body.vendor) {
        const drink = new Drink({
            title: body.title,
            artist: body.artist,
            vendor: body.vendor,
            average: body.average,
            reviews: body.reviews || 0,
            ratings: body.ratings
        })
        const newDrink = await drink.save()
        res.status(201).json(newDrink)
    } else {
        res.status(400).end()
    }
})

module.exports = drinksRouter