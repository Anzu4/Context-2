import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchTimelines, fetchEvents} from '../store'
//import {fetchEvents} from '../store'
import Button from '@material-ui/core/Button'

export const Timeline = () => {
  return (
    <div>
      <h1>TIMELINE</h1>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  )
}

const mapState = state => {
  return {
    timeline: state.timeline
  }
}

export default connect(mapState)(Timeline)
