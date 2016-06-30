import reduxFactory from 'redux-factory'

const defaultState = {
  favorite: null
}

const actions = {
  set: (state, favorite) => ({...state, favorite })
}

const factory = reduxFactory(defaultState, actions, 'team')

export default { ...factory, defaultState }
