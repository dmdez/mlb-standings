import React, { Component } from 'react'
import standingsStore from 'store/standings'
import { connect } from 'react-redux'
import Favorite from './Favorite'

@connect(mapStateToProps)
class Header extends Component {
  render() {
    return (
      <div style={style.base}>
        <div style={{ display: 'table', width: '100%' }}>
          <div style={{display: 'table-cell', width: '100%', verticalAlign: 'middle'}}>
            <div style={style.title}>MLB STANDINGS</div>
          </div>
          <div style={{display: 'table-cell', verticalAlign: 'middle'}}>
            {
              this.props.showRecord ?
              <a style={style.buttonPressed} onClick={() => this.props.dispatch(standingsStore.hideRecord())}>W:L</a> :
              <a style={style.button} onClick={() => this.props.dispatch(standingsStore.showRecord())}>W:L</a>
            }
          </div>
          <div style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: '5px'}}>
            <Favorite />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps() {
  return (state) => {
    return {
      showRecord: state.standings.showRecord
    }
  }
}

const buttonStyle = {
  display: 'block',
  padding: '6px 4px',
  cursor: 'pointer',
  borderRadius: '2px',
  boxShadow: 'inset 1px 1px 3px rgba(0, 0, 0, .4)'
}

const style = {
  base: {
    background: '#fff',
    padding: '10px',
    boxShadow: '0 3px 3px rgba(0,0,0,.1)'
  },
  title: {
    fontFamily: 'Chivo',
    fontWeight: '900',
    fontStyle: 'italic',
    fontSize: '24px',
    color: '#333'
  },
  button: {
    ...buttonStyle,
    background: '#333',
    color: 'white'
  },
  buttonPressed: {
    ...buttonStyle,
    background: 'transparent',
    color: '#333'
  }
}

export default Header
