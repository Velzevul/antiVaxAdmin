import {REQUEST_USERS, RECEIVE_USERS,
  REQUEST_UPDATE_USER, CONFIRM_UPDATE_USER, REJECT_UPDATE_USER,
  REQUEST_CREATE_USER, CONFIRM_CREATE_USER, REJECT_CREATE_USER,
  REQUEST_DELETE_USER, CONFIRM_DELETE_USER, REJECT_DELETE_USER} from './usersActions'
import initialState from './initialState'

const user = (
  state = initialState.user,
  action
) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return Object.assign({}, state, {
        data: action.item
      })
    case CONFIRM_CREATE_USER:
      return Object.assign({}, state, {
        data: action.item
      })
    case REQUEST_UPDATE_USER:
      if (state.data._id === action.id) {
        return Object.assign({}, state, {
          isUpdating: true
        })
      } else {
        return state
      }
    case CONFIRM_UPDATE_USER:
      if (state.data._id === action.id) {
        return Object.assign({}, state, {
          data: action.updatedItem,
          isUpdating: false,
          errors: {}
        })
      } else {
        return state
      }
    case REJECT_UPDATE_USER:
      if (state.data._id === action.id) {
        return Object.assign({}, state, {
          isUpdating: false,
          errors: action.errors
        })
      } else {
        return state
      }
    case REQUEST_DELETE_USER:
      if (state.data._id === action.id) {
        return Object.assign({}, state, {
          isUpdating: true
        })
      } else {
        return state
      }
    case REJECT_DELETE_USER:
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

const newUser = (
  state,
  action
) => {
  switch (action.type) {
    case REQUEST_CREATE_USER:
      return Object.assign({}, state, {
        isUpdating: true
      })
    case REJECT_CREATE_USER:
      return Object.assign({}, state, {
        isUpdating: false,
        errors: action.errors
      })
    default:
      return state
  }
}

const users = (
  state = initialState.users,
  action
) => {
  switch (action.type) {
    case REQUEST_USERS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_USERS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items.map(i => user(undefined, {
          type: action.type,
          item: i
        }))
      })
    case REQUEST_UPDATE_USER:
    case CONFIRM_UPDATE_USER:
    case REJECT_UPDATE_USER:
    case REQUEST_DELETE_USER:
    case REJECT_DELETE_USER:
      return Object.assign({}, state, {
        items: state.items.map(i => user(i, action))
      })
    case REQUEST_CREATE_USER:
    case REJECT_CREATE_USER:
      return Object.assign({}, state, {
        newUser: newUser(state.newUser, action)
      })
    case CONFIRM_CREATE_USER:
      return Object.assign({}, state, {
        newUser: initialState.users.newUser,
        items: [
          user(null, action),
          ...state.items
        ]
      })
    case CONFIRM_DELETE_USER:
      return Object.assign({}, state, {
        items: state.items.filter(i => i.data._id !== action.id)
      })
    default:
      return state
  }
}

export default users
