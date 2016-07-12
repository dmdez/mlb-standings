import React, { Component } from 'react'
import { connect } from 'react-redux'
import NoFavorite from './NoFavorite'
import teamStore from 'store/team'

@connect(mapStateToProps)
class Connected extends Component {

  render() {
    if ( this.props.checked ) return null
    return <NoFavorite {...this.props} onClick={() => this.handleClick()} />
  }

  handleClick() {
    this.props.dispatch(teamStore.checked())
  }
}

function mapStateToProps() {
  return (state) => ({
    checked: state.team.checked
  })
}

export default Connected
