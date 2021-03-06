import React, { Component } from 'react'
import Team from 'components/Team'

const divisionMap = { 'W': 'West', 'E': 'East', 'C': 'Central' }

function Division ({ division, conference, standings }) {
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

function getDivisionStandings(c, d, standings) {
  return standings.filter((team) => {
    return team.conference === c && team.division === d
  }).sort((a, b) => {
    return a.rank - b.rank
  }).map((team, i) => {
    return team
  })
}

export default Division
