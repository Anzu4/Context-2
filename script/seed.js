'use strict'

const db = require('../server/db')
const {User, Event, Timeline} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const events = await Promise.all([
    Event.create({
      title: 'Covid Vaccine I',
      date: 2021 - 4 - 7,
      description: 'First of two Pfizer vaccines against the COVID-19 virus.'
    }),
    Event.create({
      title: 'Craft job interview',
      date: 2021 - 4 - 27,
      category: 'career',
      description: 'I want this job because its remote in Europe.'
    }),
    Event.create({
      title: 'Tea and cookies',
      date: 2021 - 4 - 1,
      category: 'social',
      description: 'Went to neighbors, and had a nice afternoon.'
    }),
    Event.create({
      title: 'Boat stuck in Suez Canal',
      date: 2021 - 3 - 23,
      category: 'news',
      description:
        'The Ever Given, a boat as long as the Empire State Building is tall, lodged itself in the Suez Canal.'
    })
  ])

  const timelines = await Promise.all([
    Timeline.create({name: 'health'}),
    Timeline.create({name: 'career'}),
    Timeline.create({name: 'social'}),
    Timeline.create({name: 'news'})
  ])

  await users[0].setTimelines(timelines[0])
  await users[0].setTimelines(timelines[1])
  await users[1].setTimelines(timelines[2])
  await users[1].setTimelines(timelines[3])

  await timelines[0].setEvents(events[0])
  await timelines[1].setEvents(events[1])
  await timelines[2].setEvents(events[2])
  await timelines[3].setEvents(events[3])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${events.length} events`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
