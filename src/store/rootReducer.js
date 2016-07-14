import { combineReducers } from 'redux'
import auth from './authReducer'
import flash from './flashReducer'
import questions from './questionsReducer'
import faqs from './faqsReducer'
import blogposts from './blogpostsReducer'

const rootReducer = combineReducers({
  auth,
  flash,
  questions,
  faqs,
  blogposts
})

export default rootReducer
