import {combineReducers} from 'redux'

import subreddits from './subreddits'
import loading from './loading'
import error from './error'

export default combineReducers({
  subreddits,
  loading,
  error
})
