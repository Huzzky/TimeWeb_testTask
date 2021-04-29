import { combineReducers } from 'redux'
import { serverListReducers } from './reducers/serverListReducers'

export const allReducers = combineReducers({
  serverListReducers,
})
