import React, { Component } from 'react'
import PieChart from 'react-simple-pie-chart'
import teamMap from 'utils/teamMap'
import style from './style'

function Team(props) {
  const {
    rank, first_name, last_name, won, lost, team_id, favorite,
    showStats, onClick
  } = props

  const pieSlices = [{color: '#999',value: won}, {color: '#eee',value: lost}]
  const bgPosX = (teamMap[team_id].x * 72) + 27
  const bgPosY = (teamMap[team_id].y * 76) + 12
  let baseStyle = Object.assign({}, style.base)

  style.logo.backgroundPosition = `-${bgPosX}px -${bgPosY}px`

  if ( favorite ) {
    if ( favorite.id === team_id ) {
      baseStyle.transform = 'scale(1.2)'
      baseStyle.zIndex = '2'
      baseStyle.boxShadow = '0 0 35px black'
      baseStyle.borderRadius = '50%'
    } else {
      baseStyle.opacity = '0.7'
    }
  }

  return (
    <div
      style={baseStyle}
      onClick={() => onClick(team_id)}
    >
      <div style={{ ...style.logo }}></div>
      <div style={{ ...style.record, display: showStats() ? '': 'none' }}>
        <span style={{color: '#333', fontWeight: 'bold'}}>{ won }</span>:<span style={{color: '#999'}}>{ lost }</span>
      </div>
      <div style={{ ...style.pie }}>
        <PieChart slices={pieSlices} />
      </div>
    </div>
  )
}

export default Team
