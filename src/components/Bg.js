import React, { Component } from 'react'
import teamMap from 'utils/teamMap'
import { connect } from 'react-redux'

@connect(mapStateToProps)
class Bg extends Component {
  render() {
    const { favorite } = this.props

    let style = {
      backgroundImage: `url('/stadiums/generic.jpg')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      opacity: '.6',
      zIndex: '-1'
    }

    if ( favorite && teamMap[favorite].bg )
      style.backgroundImage = `url('${teamMap[favorite].bg}')`

    return (<div style={style}></div>)
  }
}

function mapStateToProps() {
  return (state) => ({
    favorite: state.team.favorite
  })
}

export default Bg
