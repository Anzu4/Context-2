const router = require('express').Router()
const {Timeline} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const timelines = await Timeline.findAll()
    res.json(timelines)
  } catch (err) {
    next(err)
  }
})

router.get('/:timelineId', async (req, res, next) => {
  try {
    const timeline = await Timeline.findbyPk(req.params.timelineId)
    res.json(timeline)
  } catch (err) {
    next(err)
  }
})
