import {REQUEST_QUESTIONS, RECEIVE_QUESTIONS, REQUEST_UPDATE, RECEIVE_UPDATE, CONFIRM_DELETE} from './questionsActions'
import initialState from './initialState'

const question = (
  state = initialState.question,
  action
) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        isUpdating: false,
        data: state
      }
    case REQUEST_UPDATE:
      if (state.data.id === action.id) {
        return Object.assign({}, state, {
          isUpdating: true
        })
      } else {
        return state
      }
    case RECEIVE_UPDATE:
      if (state.data.id === action.id) {
        return Object.assign({}, state, {
          data: action.updatedQuestion,
          isUpdating: false
        })
      } else {
        return state
      }
    default:
      return state
  }
}

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
        items: action.items.map(i => question(i, action))
      }
    case REQUEST_UPDATE:
      return Object.assign({}, state, {
        items: state.items.map(i => question(i, action))
      })
    case RECEIVE_UPDATE:
      return Object.assign({}, state, {
        items: state.items.map(i => question(i, action))
      })
    case CONFIRM_DELETE:
      return Object.assign({}, state, {
        items: state.items.filter(i => i.data.id !== action.id)
      })
    default:
      return state
  }
}

export default questions
