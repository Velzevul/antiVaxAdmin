import {REQUEST_QUESTIONS, RECEIVE_QUESTIONS} from './questionsActions'
import initialState from './initialState'

const questions = (
  state = initialState.questions,
  action
) => {
  switch (action.type) {
    case REQUEST_QUESTIONS:
      return Object.assign({}, initialState.questions, {
        isFetching: true
      })
    case RECEIVE_QUESTIONS:
      return {
        isFetching: false,
        items: action.items
      }
    default:
      return state
  }
}

export default questions
