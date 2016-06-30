import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'
import standingsStore from './standings'
import teamStore from './team'
import persistState from 'redux-localstorage'

const reducers = combineReducers({
  standings: standingsStore.reducer,
  team: teamStore.reducer
})

export default compose(applyMiddleware(thunk), persistState('team'))(createStore)(reducers)
