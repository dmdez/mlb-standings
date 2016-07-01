import React, { Component } from 'react'
import Team from 'components/Team'
import { connect } from 'react-redux'
import Division from './Division'

const divisionMap = { 'W': 'West', 'E': 'East', 'C': 'Central' }

@connect(mapStateToProps)
class Connected extends Component {
  render() {
    return <Division {...this.props} />
  }
}

function mapStateToProps() {
  return (state) => ({
    standings: state.standings.results
  })
}

export default Connected
