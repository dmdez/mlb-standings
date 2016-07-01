import React, { Component } from 'react'
import { connect } from 'react-redux'
import teamStore from 'store/team'
import teamMap from 'utils/teamMap'
import Team from './Team'

@connect(mapStateToProps)
class Connected extends Component {
  constructor() {
    super()
    this.state     = { over: false }
    this.shouldShowStats = this.shouldShowStats.bind(this)
    this.onClick = this.onClick.bind(this)
  }
  render() {
    return <Team {...this.props}
      showStats={this.shouldShowStats}
      onClick={this.onClick} 
    />
  }

  shouldShowStats() {
    const { favorite, team_id, showRecord } = this.props

    return favorite && favorite.id === team_id || showRecord
  }

  onClick(id) {
    const { favorite, dispatch, team_id, last_name } = this.props
    dispatch(teamStore.set(favorite && favorite.id === team_id ? null : {
      name: last_name,
      id: team_id
    }))
  }

}

function mapStateToProps() {
  return (state) => ({
    showRecord: state.app.showRecord,
    favorite: state.team.favorite
  })
}

export default Connected
