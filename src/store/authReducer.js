import {REQUEST_AUTH, LOGIN, LOGOUT} from './authActions'
import initialState from './initialState'

const auth = (
  state = initialState.auth,
  action
) => {
  switch (action.type) {
    case REQUEST_AUTH:
      return Object.assign({}, initialState.auth, {
        isFetching: true
      })
    case LOGIN:
      return {
        isFetching: false,
        user: action.user,
        token: action.token
      }
    case LOGOUT:
      return {
        isFetching: false,
        user: null,
        token: null
      }
    default:
      return state
  }
}

export default auth
