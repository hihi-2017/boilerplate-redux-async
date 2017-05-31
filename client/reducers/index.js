import {combineReducers} from 'redux'

import subreddits from './subreddits'
import loading from './loading'

export default combineReducers({
  subreddits,
  loading
})
