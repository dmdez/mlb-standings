import React, { Component } from 'react'
import PieChart from 'react-simple-pie-chart'
import { connect } from 'react-redux'
import teamStore from 'store/team'
import teamMap from 'utils/teamMap'

@connect(mapStateToProps)
class Team extends Component {
  constructor() {
    super()
    this.mouseOver = this.mouseOver.bind(this)
    this.mouseOut  = this.mouseOut.bind(this)
    this.state     = { over: false }
  }
  render() {
    const { rank, first_name, last_name, won, lost, team_id, favorite} = this.props

    const pieSlices = [
      {
        color: '#999',
        value: won,
      },
      {
        color: '#eee',
        value: lost,
      },
    ]
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
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
        onClick={() => this.click(team_id)}
      >
        <div style={{ ...style.logo }}></div>
        <div style={{ ...style.record, display: this.shouldShowStats() ? '': 'none' }}>
          <span style={{color: '#333', fontWeight: 'bold'}}>{ won }</span>:<span style={{color: '#999'}}>{ lost }</span>
        </div>
        <div style={{ ...style.pie }}>
          <PieChart slices={pieSlices} />
        </div>
      </div>
    )
  }

  shouldShowStats() {
    const { favorite, team_id, showRecord } = this.props

    return favorite && favorite.id === team_id || showRecord
  }

  click(id) {
    const { favorite, dispatch, team_id, last_name } = this.props
    dispatch(teamStore.set(favorite && favorite.id === team_id ? null : {
      name: last_name,
      id: team_id
    }))
  }

  mouseOver() {
    //this.setState({ over: true })
  }

  mouseOut() {
    //this.setState({ over: false })
  }
}

let style = {
  base: {
    position: 'relative',
    margin: '20px 10px',
    cursor: 'pointer',
    transition: 'all 0.3s'
  },
  logo: {
    width: '72px',
    height: '72px',
    backgroundImage: `url('/images/logos.png')`,
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    zIndex: '2',
    transition: 'all 0.3s'
  },
  pie: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '82px',
    height: '82px',
    zIndex: '1',
    margin: '-6px 0 0 -6px',
    opacity: '0.85',
    transition: 'all 0.3s'
  },
  record: {
    position: 'absolute',
    borderRadius: '3px',
    background: 'white',
    zIndex: '3',
    fontSize: '12px',
    textAlign: 'center',
    bottom: '0',
    left: '50%',
    transition: 'all 0.3s',
    border: '1px solid #333',
    padding: '1px 2px',
    transform: 'translateX(-50%)'
  }
}


function mapStateToProps() {
  return (state) => ({
    showRecord: state.app.showRecord,
    favorite: state.team.favorite
  })
}

export default Team
