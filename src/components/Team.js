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
      if ( favorite === team_id ) {
        baseStyle.transform = 'scale(1.2)'
        baseStyle.zIndex = '2'
      } else {
        baseStyle.opacity = '0.5'
      }
    }

    return (
      <div
        style={baseStyle}
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
        onClick={() => this.click(team_id)}
      >
        <div style={{ ...style.logo, zIndex: this.shouldShowStats() ? '1' : '2' }}></div>
        <div style={{ ...style.record, zIndex: this.shouldShowStats() ? '3': '0' }}>
          <span style={{color: '#333', fontWeight: 'bold'}}>{ won }</span> <span style={{color: '#999'}}>{ lost }</span>
        </div>
        <div style={{ ...style.pie,  zIndex: this.shouldShowStats() ? '2' : '1' }}>
          <PieChart slices={pieSlices} />
        </div>
      </div>
    )
  }

  shouldShowStats() {
    return this.state.over || this.props.showRecord
  }

  click(id) {
    const { favorite, dispatch, team_id } = this.props
    dispatch(teamStore.set(favorite === team_id ? null : id))
  }

  mouseOver() {
    this.setState({ over: true })
  }

  mouseOut() {
    this.setState({ over: false })
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
    width: '40px',
    height: '28px',
    paddingTop: '12px',
    borderRadius: '50%',
    background: 'white',
    zIndex: '3',
    fontSize: '12px',
    textAlign: 'center',
    top: '50%',
    left: '50%',
    margin: '-22px 0 0 -23px',
    transition: 'all 0.3s'
  }
}


function mapStateToProps() {
  return (state) => ({
    showRecord: state.standings.showRecord,
    favorite: state.team.favorite
  })
}

export default Team
