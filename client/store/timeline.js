import axios from 'axios'

const GET_TIMELINES = 'GET_TIMELINES'

const getTimelines = timelines => ({type: GET_TIMELINES, timelines})

export const fetchTimelines = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/timelines')
    dispatch(getTimelines)
  } catch (err) {
    console.log(err + 'fetchTimelines')
  }
}

export default function(state = [], action) {
  switch (action.type) {
    case GET_TIMELINES:
      return action.timelines
    default:
      return state
  }
}
