const Sequelize = require('sequelize')
const db = require('../db')

const Event = db.define('event', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  link: {
    type: Sequelize.TEXT
  }
})

module.exports = Event
