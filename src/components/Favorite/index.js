import React, { Component } from 'react'
import teamStore from 'store/team'
import { connect } from 'react-redux'
import Favorite from './Favorite'

@connect(mapStateToProps)
class Connected extends Component {
  render() {
    return <Favorite favorite={this.props.favorite} />
  }
}

function mapStateToProps() {
  return (state) => {
    return {
      favorite: state.team.favorite
    }
  }
}

export default Connected
