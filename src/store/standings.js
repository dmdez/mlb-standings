import reduxFactory from 'redux-factory'
import fetch from 'isomorphic-fetch'

const defaultState = {
  results: [],
  loading: false,
  showRecord: false
}

const actions = {
  loading    : (state)          => ({...state, loading: true }),
  set        : (state, results) => ({...state, results, loading: false }),
  showRecord : (state)          => ({...state, showRecord: true }),
  hideRecord : (state)          => ({...state, showRecord: false})
}

const factory = reduxFactory(defaultState, actions, 'standings')

function load() {
  return (dispatch) => {
    dispatch(factory.loading())
    return fetch('/standings').then((response) => {
      return response.json()
    }).then((response) => {
      setTimeout(() => {
        dispatch(factory.set(response.standing))
      }, 2000)

    })
  }
}

export default { ...factory, defaultState, load }
