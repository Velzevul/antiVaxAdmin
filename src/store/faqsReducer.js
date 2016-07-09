import {REQUEST_FAQS, RECEIVE_FAQS,
  REQUEST_FAQ_UPDATE, RECEIVE_FAQ_UPDATE} from './faqsActions'
import initialState from './initialState'

const faq = (
  state = initialState.faq,
  action
) => {
  switch (action.type) {
    case RECEIVE_FAQS:
      return {
        isUpdating: false,
        data: state
      }
    case REQUEST_FAQ_UPDATE:
      if (state.data.id === action.id) {
        return Object.assign({}, state, {
          isUpdating: true
        })
      } else {
        return state
      }
    case RECEIVE_FAQ_UPDATE:
      if (state.data.id === action.id) {
        return Object.assign({}, state, {
          data: action.updatedFaq,
          isUpdating: false
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
        items: action.items.map(i => faq(i, action))
      }
    case REQUEST_FAQ_UPDATE:
      return Object.assign({}, state, {
        items: state.items.map(i => faq(i, action))
      })
    case RECEIVE_FAQ_UPDATE:
      return Object.assign({}, state, {
        items: state.items.map(i => faq(i, action))
      })
    default:
      return state
  }
}

export default faqs
