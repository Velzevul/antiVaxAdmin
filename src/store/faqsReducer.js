import {REQUEST_FAQS, RECEIVE_FAQS,
  REQUEST_FAQ_UPDATE, RECEIVE_FAQ_UPDATE,
  RECEIVE_FAQ_ERRORS, MARK_FAQ_DIRTY} from './faqsActions'
import initialState from './initialState'

const faq = (
  state = initialState.faq,
  action
) => {
  switch (action.type) {
    case RECEIVE_FAQS:
      return Object.assign({}, state, {
        data: action.item
      })
    case REQUEST_FAQ_UPDATE:
      if (state.data._id === action.id) {
        return Object.assign({}, state, {
          isUpdating: true
        })
      } else {
        return state
      }
    case RECEIVE_FAQ_UPDATE:
      if (state.data._id === action.id) {
        return Object.assign({}, state, {
          data: action.updatedFaq,
          isDirty: false,
          isUpdating: false,
          errors: {}
        })
      } else {
        return state
      }
    case RECEIVE_FAQ_ERRORS:
      if (state.data._id === action.id) {
        return Object.assign({}, state, {
          isUpdating: false,
          errors: action.errors
        })
      } else {
        return state
      }
    case MARK_FAQ_DIRTY:
      if (state.data._id === action.id) {
        return Object.assign({}, state, {
          isDirty: true
        })
      } else {
        return state
      }
    default:
      return state
  }
}

const faqs = (
  state = initialState.faqs,
  action
) => {
  switch (action.type) {
    case REQUEST_FAQS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_FAQS:
      return {
        isFetching: false,
        items: action.items.map(i => faq(undefined, {
          type: action.type,
          item: i
        }))
      }
    case REQUEST_FAQ_UPDATE:
    case RECEIVE_FAQ_UPDATE:
    case RECEIVE_FAQ_ERRORS:
    case MARK_FAQ_DIRTY:
      return Object.assign({}, state, {
        items: state.items.map(i => faq(i, action))
      })
    default:
      return state
  }
}

export default faqs
