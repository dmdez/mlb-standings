import React, { Component } from 'react'
import Division from 'components/Division'
import Loading from 'components/Loading'

function Col ({ children }) {
  return (
    <div style={{display: 'inline-block' }}>{ children }</div>
  )
}

function Standings({ loading }) {
  if ( loading ) return <center><Loading /></center>

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ display: 'inline-block', padding: '0 20px 30px' }}>
        <Col><Division conference="NL" division="W" /></Col>
        <Col><Division conference="NL" division="C" /></Col>
        <Col><Division conference="NL" division="E" /></Col>
      </div>
      <div style={{ display: 'inline-block', padding: '0 20px' }}>
        <Col><Division conference="AL" division="W" /></Col>
        <Col><Division conference="AL" division="C" /></Col>
        <Col><Division conference="AL" division="E" /></Col>
      </div>
    </div>
  )
}

export default Standings
