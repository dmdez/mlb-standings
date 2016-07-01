import React, { Component } from 'react'
import { connect } from 'react-redux'
import Standings from './Standings'

@connect(mapStateToProps)
class Connected extends Component {
  render() {
    return (
      <Standings {...this.props} />
    )
  }
}

function mapStateToProps() {
  return (state) => ({
    loading: state.standings.loading
  })
}

export default Connected
