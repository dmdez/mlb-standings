import React, { Component } from 'react'
import style from './style'
import Button from 'components/Button'

function NoFavorite (props) {
  return (
    <div style={style.base}>
      <div style={style.col}>
        <div style={style.content}>
          <h3>No favorite?</h3>
          <Button onClick={props.onClick}>Got it!</Button>
        </div>
      </div>
    </div>
  )
}

export default NoFavorite
