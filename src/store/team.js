import reduxFactory from 'redux-factory'

const defaultState = {
  favorite: null,
  checked: false
}

const actions = {
  set: (state, favorite) => ({...state, favorite, checked: true }),
  checked: (state) => ({...state, checked: true})
}

const factory = reduxFactory(defaultState, actions, 'team')

export default { ...factory, defaultState }
