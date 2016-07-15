import { combineReducers } from 'redux'
import auth from './authReducer'
import flash from './flashReducer'
import questions from './questionsReducer'
import faqs from './faqsReducer'
import blogposts from './blogpostsReducer'
import users from './usersReducer'

const rootReducer = combineReducers({
  auth,
  flash,
  questions,
  faqs,
  blogposts,
  users
})

export default rootReducer
