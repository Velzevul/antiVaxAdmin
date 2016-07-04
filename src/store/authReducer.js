import {REQUEST_AUTH, AUTH_SUCCESS, AUTH_FAIL, LOGOUT} from './authActions'
import initialState from './initialState'

const auth = (
  state = Object.assign({}, initialState.auth),
  action
) => {
  switch (action.type) {
    case REQUEST_AUTH:
      return Object.assign({}, initialState.auth, {
        isFetching: true
      })
    case AUTH_SUCCESS:
      return {
        isFetching: false,
        user: action.user,
        token: action.token
      }
    case AUTH_FAIL:
      return Object.assign({}, initialState.auth)
    case LOGOUT:
      return Object.assign({}, initialState.auth)
    default:
      return state
  }
}

export default auth
