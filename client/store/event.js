import axios from 'axios'

const GET_EVENTS = 'GET_EVENTS'
// const REMOVE_EVENT = 'REMOVE_EVENT'
// const EDIT_EVENT = 'EDIT_EVENT'
// const ADD_EVENT = 'ADD_EVENT'

const getEvents = events => ({type: GET_EVENTS, events})
// const removeEvent = eventId => ({type: REMOVE_EVENT, eventId})
// const editEvent = event => ({type: EDIT_EVENT, event})
// const addEvent = event => ({type: ADD_EVENT, event})

export const fetchEvents = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/events')
    dispatch(getEvents)
  } catch (err) {
    console.log(err + 'fetchEvents')
  }
}

// export const changeEvent = (eventId, event) => async dispatch => {
//   try {

//   } catch (err) {
//     console.log(err + 'editEvents')
//   }
// }

// export const deleteEvent = (eventId, event) => async dispatch => {
//   try {
//   } catch (err) {
//     console.log(err + 'removeEvents')
//   }
// }

export default function(state = [], action) {
  switch (action.type) {
    case GET_EVENTS:
      return action.events
    // case REMOVE_EVENT:
    //   return
    // case EDIT_EVENT:
    //   return []
    // case ADD_EVENT:
    default:
      return state
  }
}
