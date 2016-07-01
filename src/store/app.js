import reduxFactory from 'redux-factory'

const defaultState = {
  showRecord: false
}

const actions = {
  showRecord : (state)          => ({...state, showRecord: true }),
  hideRecord : (state)          => ({...state, showRecord: false})
}

const factory = reduxFactory(defaultState, actions, 'app')

export default { ...factory, defaultState }
