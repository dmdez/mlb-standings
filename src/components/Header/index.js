import React, { Component } from 'react'
import appStore from 'store/app'
import { connect } from 'react-redux'
import Header from './Header'

@connect(mapStateToProps)
class Connected extends Component {
  render() {
    return <Header {...this.props} onClick={() => this.handleClick()} />
  }
  handleClick() {
    const { dispatch, showRecord } = this.props
    dispatch(showRecord ? appStore.hideRecord() : appStore.showRecord())
  }
}

function mapStateToProps() {
  return (state) => {
    return {
      showRecord: state.app.showRecord
    }
  }
}

export default Connected
