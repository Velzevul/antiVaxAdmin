import { combineReducers } from 'redux'
import auth from './authReducer'
import flash from './flashReducer'
import questions from './questionsReducer'

const rootReducer = combineReducers({
  auth,
  flash,
  questions
})

export default rootReducer
