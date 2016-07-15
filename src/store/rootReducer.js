import { combineReducers } from 'redux'
import auth from './authReducer'
import flash from './flashReducer'
import questions from './questionsReducer'
import articles from './articleReducer'
import blogposts from './blogpostsReducer'
import users from './usersReducer'

const rootReducer = combineReducers({
  auth,
  flash,
  questions,
  articles,
  blogposts,
  users
})

export default rootReducer
