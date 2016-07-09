import { combineReducers } from 'redux'
import auth from './authReducer'
import flash from './flashReducer'
import questions from './questionsReducer'
import faqs from './faqsReducer'

const rootReducer = combineReducers({
  auth,
  flash,
  questions,
  faqs
})

export default rootReducer
