const Sequelize = require('sequelize')
const db = require('../db')

const Timeline = db.define('timeline', {
  name: {
    type: Sequelize.STRING,
    unique: true
  }
})

module.exports = Timeline
