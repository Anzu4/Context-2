const router = require('express').Router()
const {Event} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const events = await Event.findAll()
    res.json(events)
  } catch (err) {
    next(err)
  }
})

router.get('/:eventId', async (req, res, next) => {
  try {
    const event = await Event.findbyPk(req.params.eventId)
    res.json(event)
  } catch (err) {
    next(err)
  }
})
