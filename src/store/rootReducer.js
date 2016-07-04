import { combineReducers } from 'redux'
import auth from './authReducer'
import flash from './flashReducer'
import location from './locationReducer'
import questions from './questionsReducer'

const rootReducer = combineReducers({
  auth,
  flash,
  location,
  questions
})

export default rootReducer
