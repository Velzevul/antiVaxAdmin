import { combineReducers } from 'redux'
import auth from './authReducer'
import flash from './flashReducer'
import questions from './questionsReducer'
import articles from './articleReducer'
import users from './usersReducer'
import schedule from './scheduleReducer'

const rootReducer = combineReducers({
  auth,
  flash,
  questions,
  articles,
  users,
  schedule
})

export default rootReducer
