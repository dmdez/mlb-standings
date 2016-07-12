import React, { Component } from 'react'
import style from './style'

function Button({ children, onClick, active }) {
  return (
    <div style={active ? style.active : style.base} onClick={onClick}>{children}</div>
  )
}

export default Button
