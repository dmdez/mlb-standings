import React, { Component } from 'react'
import Team from 'components/Team'
import { connect } from 'react-redux'

const divisionMap = { 'W': 'West', 'E': 'East', 'C': 'Central' }

@connect(mapStateToProps)
class Division extends Component {
  render() {
    const { division, conference, standings } = this.props
    const teams = getDivisionStandings(conference, division, standings)    
    return (
      <div>
        { 1 === 0 && <h2>{ conference } { divisionMap[division] }</h2> }
        {
          teams.map((team, i) => {
            return <Team key={i} {...team} />
          })
        }
      </div>
    )
  }
}

function getDivisionStandings(c, d, standings) {
  return standings.filter((team) => {
    return team.conference === c && team.division === d
  }).sort((a, b) => {
    return a.rank - b.rank
  }).map((team, i) => {
    return team
  })
}


function mapStateToProps() {
  return (state) => ({
    standings: state.standings.results
  })
}

export default Division
