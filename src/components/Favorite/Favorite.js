import React, { Component } from 'react'
import style from './style'

class Favorite extends Component {
  render() {
    const { favorite } = this.props

    if ( !favorite ) return null

    return (
      <div style={style.base}>
        <div style={style.favoriteFoo}>
          <svg viewBox="0 0 22 22" style={style.favoriteIcon}>
            <path d="M10,1.3l2.388,6.722H18.8l-5.232,3.948l1.871,6.928L10,14.744l-5.438,4.154l1.87-6.928L1.199,8.022h6.412L10,1.3z"/>
          </svg>
        </div>
        <div style={style.favoriteText}>{ favorite.name }</div>
      </div>
    )
  }
}

export default Favorite
