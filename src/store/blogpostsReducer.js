import {REQUEST_BLOGPOSTS, RECEIVE_BLOGPOSTS, REQUEST_BLOGPOST_UPDATE,
  RECEIVE_BLOGPOST_UPDATE, RECEIVE_BLOGPOST_ERRORS,
  REQUEST_CREATE_BLOGPOST, CONFIRM_CREATE_BLOGPOST, REJECT_CREATE_BLOGPOST,
  REQUEST_DELETE_BLOGPOST, CONFIRM_DELETE_BLOGPOST, REJECT_DELETE_BLOGPOST} from './blogpostsActions'
import initialState from './initialState'

const blogpost = (
  state = initialState.blogpost,
  action
) => {
  switch (action.type) {
    case RECEIVE_BLOGPOSTS:
      return Object.assign({}, state, {
        data: action.item
      })
    case CONFIRM_CREATE_BLOGPOST:
      return Object.assign({}, state, {
        data: action.item
      })
    case REQUEST_BLOGPOST_UPDATE:
      if (state.data._id === action.id) {
        return Object.assign({}, state, {
          isUpdating: true
        })
      } else {
        return state
      }
    case RECEIVE_BLOGPOST_UPDATE:
      if (state.data._id === action.id) {
        return Object.assign({}, state, {
          data: action.updatedItem,
          isUpdating: false,
          errors: {}
        })
      } else {
        return state
      }
    case RECEIVE_BLOGPOST_ERRORS:
      if (state.data._id === action.id) {
        return Object.assign({}, state, {
          isUpdating: false,
          errors: action.errors
        })
      } else {
        return state
      }
    case REQUEST_DELETE_BLOGPOST:
      if (state.data._id === action.id) {
        return Object.assign({}, state, {
          isUpdating: true
        })
      } else {
        return state
      }
    case REJECT_DELETE_BLOGPOST:
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

const newBlogpost = (
  state,
  action
) => {
  switch (action.type) {
    case REQUEST_CREATE_BLOGPOST:
      return Object.assign({}, state, {
        isUpdating: true
      })
    case REJECT_CREATE_BLOGPOST:
      return Object.assign({}, state, {
        isUpdating: false,
        errors: action.errors
      })
    default:
      return state
  }
}

const blogposts = (
  state = initialState.blogposts,
  action
) => {
  switch (action.type) {
    case REQUEST_BLOGPOSTS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_BLOGPOSTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items.map(i => blogpost(undefined, {
          type: action.type,
          item: i
        }))
      })
    case REQUEST_BLOGPOST_UPDATE:
    case RECEIVE_BLOGPOST_UPDATE:
    case RECEIVE_BLOGPOST_ERRORS:
    case REQUEST_DELETE_BLOGPOST:
    case REJECT_DELETE_BLOGPOST:
      return Object.assign({}, state, {
        items: state.items.map(i => blogpost(i, action))
      })
    case REQUEST_CREATE_BLOGPOST:
    case REJECT_CREATE_BLOGPOST:
      return Object.assign({}, state, {
        newBlogpost: newBlogpost(state.newBlogpost, action)
      })
    case CONFIRM_CREATE_BLOGPOST:
      console.log(action.blogpost)
      return Object.assign({}, state, {
        newBlogpost: initialState.blogposts.newBlogpost,
        items: [
          blogpost(null, action),
          ...state.items
        ]
      })
    case CONFIRM_DELETE_BLOGPOST:
      return Object.assign({}, state, {
        items: state.items.filter(i => i.data._id !== action.id)
      })
    default:
      return state
  }
}

export default blogposts
