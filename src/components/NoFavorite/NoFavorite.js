import React, { Component } from 'react'
import style from './style'
import Button from 'components/Button'

function NoFavorite (props) {
  return (
    <div style={style.base}>
      <div style={style.col}>
        <div style={style.content}>
          <h2>MLB standings board.</h2>
          <p>
            If this is your first time using this board, you can select
            your favorite team and that team will stay focused for the life
            of your browser session.
          </p>
          <p>
            If you don't want to claim a favorite team, that's okay, leave the board alone
            and keep and eye on all standings.
          </p>
          <Button onClick={props.onClick}>Got it!</Button>
        </div>
      </div>
    </div>
  )
}

export default NoFavorite
