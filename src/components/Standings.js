import React, { Component } from 'react'
import Division from 'components/Division'
import Loading from 'components/Loading'
import { connect } from 'react-redux'

class Col extends Component {
  render() {
    return (
      <div style={{display: 'inline-block' }}>{ this.props.children }</div>
    )
  }
}

@connect(mapStateToProps)
class Standings extends Component {
  render() {
    const { loading } = this.props

    if ( loading ) return <center><Loading /></center>

    return (
      <div style={{ textAlign: 'center' }}>
        <div style={{ display: 'inline-block', padding: '0 20px' }}>
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
}

function mapStateToProps() {
  return (state) => ({
    loading: state.standings.loading
  })
}

export default Standings
