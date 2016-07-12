import {REQUEST_FAQS, RECEIVE_FAQS, REQUEST_FAQ_UPDATE,
  RECEIVE_FAQ_UPDATE, RECEIVE_FAQ_ERRORS, MARK_FAQ_DIRTY,
  REQUEST_CREATE_FAQ, CONFIRM_CREATE_FAQ, REJECT_CREATE_FAQ,
  REQUEST_DELETE_FAQ, CONFIRM_DELETE_FAQ, REJECT_DELETE_FAQ} from './faqsActions'
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
    case REQUEST_DELETE_FAQ:
      if (state.data._id === action.id) {
        return Object.assign({}, state, {
          isUpdating: true
        })
      } else {
        return state
      }
    case REJECT_DELETE_FAQ:
      if (state.data._id === action.id) {
        return Object.assign({}, state, {
          isUpdating: false
        })
      } else {
        return state
      }
    default:
      return state
  }
}

const newFaq = (
  state,
  action
) => {
  switch (action.type) {
    case REQUEST_CREATE_FAQ:
      return Object.assign({}, state, {
        isUpdating: true
      })
    case REJECT_CREATE_FAQ:
      return Object.assign({}, state, {
        isUpdating: false,
        errors: action.errors
      })
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
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items.map(i => faq(undefined, {
          type: action.type,
          item: i
        }))
      })
    case REQUEST_FAQ_UPDATE:
    case RECEIVE_FAQ_UPDATE:
    case RECEIVE_FAQ_ERRORS:
    case MARK_FAQ_DIRTY:
    case REQUEST_DELETE_FAQ:
    case REJECT_DELETE_FAQ:
      return Object.assign({}, state, {
        items: state.items.map(i => faq(i, action))
      })
    case REQUEST_CREATE_FAQ:
    case REJECT_CREATE_FAQ:
      return Object.assign({}, state, {
        newFaq: newFaq(state.newFaq, action)
      })
    case CONFIRM_CREATE_FAQ:
      return Object.assign({}, state, {
        newFaq: initialState.faqs.newFaq,
        items: [
          action.faq,
          ...state.items
        ]
      })
    case CONFIRM_DELETE_FAQ:
      return Object.assign({}, state, {
        items: state.items.filter(i => i.data._id !== action.id)
      })
    default:
      return state
  }
}

export default faqs
