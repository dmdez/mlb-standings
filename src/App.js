import React, { Component } from 'react'
import Standings from 'components/Standings'
import Header from 'components/Header'
import Bg from 'components/Bg'
import standingsStore from 'store/standings'
import store from 'store'

class App extends Component {

  componentWillMount() {
    store.dispatch(standingsStore.load())
  }

  render() {
    return (
      <div className="container">
        <Bg />
        <div style={{ display: 'table', width: '100%', height: '100%' }}>
          <div style={{ display: 'table-row' }}>
            <div style={{ display: 'table-cell' }}>
              <Header />
            </div>
          </div>
          <div style={{ display: 'table-row' }}>
            <div style={{ display: 'table-cell' }}>
              <Standings />
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default App
