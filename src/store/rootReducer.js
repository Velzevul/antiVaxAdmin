import { combineReducers } from 'redux'
import auth from './authReducer'
import flash from './flashReducer'
import questions from './questionsReducer'
import articles from './articleReducer'
import users from './usersReducer'
import sections from './sectionsReducer'
import searchIndex from './searchIndexReducer'

const rootReducer = combineReducers({
  auth,
  flash,
  questions,
  articles,
  users,
  sections,
  searchIndex
})

export default rootReducer
