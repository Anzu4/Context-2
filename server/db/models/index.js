const User = require('./user')
const Event = require('./event')
const Timeline = require('./timeline')

User.hasMany(Timeline)
Timeline.belongsTo(User)

Timeline.hasMany(Event)
Event.belongsTo(Timeline)

module.exports = {
  User,
  Event,
  Timeline
}
