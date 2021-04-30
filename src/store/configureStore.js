import { combineReducers } from 'redux'
import { serverListReducers } from './reducers/serverListReducers'
import { userActionWithInputsReducer } from './reducers/userActionWithInputsReducer'

export const allReducers = combineReducers({
  serverListReducers,
  userActionWithInputsReducer,
})
