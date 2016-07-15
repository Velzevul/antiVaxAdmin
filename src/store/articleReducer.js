import {REQUEST_ARTICLES, RECEIVE_ARTICLES,
  REQUEST_UPDATE_ARTICLE, CONFIRM_UPDATE_ARTICLE, REJECT_UPDATE_ARTICLE,
  REQUEST_CREATE_ARTICLE, CONFIRM_CREATE_ARTICLE, REJECT_CREATE_ARTICLE,
  REQUEST_DELETE_ARTICLE, CONFIRM_DELETE_ARTICLE, REJECT_DELETE_ARTICLE} from './articleActions'
import initialState from './initialState'

const articles = (
  state = initialState.articles,
  action
) => {
  switch (action.type) {
    case REQUEST_ARTICLES:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_ARTICLES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items.map(i => article(undefined, {
          type: action.type,
          item: i
        }))
      })
    case REQUEST_UPDATE_ARTICLE:
    case CONFIRM_UPDATE_ARTICLE:
    case REJECT_UPDATE_ARTICLE:
    case REQUEST_DELETE_ARTICLE:
    case REJECT_DELETE_ARTICLE:
      return Object.assign({}, state, {
        items: state.items.map(i => article(i, action))
      })
    case REQUEST_CREATE_ARTICLE:
    case REJECT_CREATE_ARTICLE:
      return Object.assign({}, state, {
        newArticle: newArticle(state.newArticle, action)
      })
    case CONFIRM_CREATE_ARTICLE:
      return Object.assign({}, state, {
        newArticle: newArticle(state.newArticle, action),
        items: [
          article(null, action),
          ...state.items
        ]
      })
    case CONFIRM_DELETE_ARTICLE:
      return Object.assign({}, state, {
        items: state.items.filter(i => i.data._id !== action.id)
      })
    default:
      return state
  }
}

const article = (
  state = initialState.article,
  action
) => {
  switch (action.type) {
    case RECEIVE_ARTICLES:
      return Object.assign({}, state, {
        data: action.item
      })
    case CONFIRM_CREATE_ARTICLE:
      return Object.assign({}, state, {
        data: action.item
      })
    case REQUEST_UPDATE_ARTICLE:
      if (state.data._id === action.id) {
        return Object.assign({}, state, {
          isUpdating: true
        })
      } else {
        return state
      }
    case CONFIRM_UPDATE_ARTICLE:
      if (state.data._id === action.id) {
        return Object.assign({}, state, {
          data: action.item,
          isUpdating: false,
          errors: {}
        })
      } else {
        return state
      }
    case REJECT_UPDATE_ARTICLE:
      if (state.data._id === action.id) {
        return Object.assign({}, state, {
          isUpdating: false,
          errors: action.errors
        })
      } else {
        return state
      }
    case REQUEST_DELETE_ARTICLE:
      if (state.data._id === action.id) {
        return Object.assign({}, state, {
          isUpdating: true
        })
      } else {
        return state
      }
    case REJECT_DELETE_ARTICLE:
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

const newArticle = (
  state,
  action
) => {
  switch (action.type) {
    case REQUEST_CREATE_ARTICLE:
      return Object.assign({}, state, {
        isUpdating: true
      })
    case REJECT_CREATE_ARTICLE:
      return Object.assign({}, state, {
        isUpdating: false,
        errors: action.errors
      })
    case CONFIRM_CREATE_ARTICLE:
      return Object.assign({}, initialState.articles.newArticle)
    default:
      return state
  }
}

export default articles
