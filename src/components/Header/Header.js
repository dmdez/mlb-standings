import React, { Component } from 'react'
import Favorite from 'components/Favorite'
import style from './style'
import Button from 'components/Button'

function Header({ showRecord, dispatch, onClick }) {
  return (
    <div style={style.base}>
      <div style={style.container}>
        <div style={style.col.title}>
          <div style={style.title}>MLB STANDINGS</div>
        </div>
        <div style={style.col.favorite}>
          <Favorite />
        </div>
        <div style={style.col.actions}>
          <Button onClick={onClick} active={showRecord}>W:L</Button>
        </div>
      </div>
    </div>
  )
}

export default Header
