export const REQUEST_AUTH = 'REQUEST_AUTH'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_FAIL = 'AUTH_FAIL'
export const LOGOUT = 'LOGOUT'

import {flashMessage} from './flashActions'

const requestAuth = () => {
  return {
    type: REQUEST_AUTH
  }
}

const authFail = (
  message
) => {
  return dispatch => {
    dispatch({ type: AUTH_FAIL })
    dispatch(flashMessage(message, 'error'))
  }
}

const authSuccess = (
  user,
  token
) => {
  return {
    type: AUTH_SUCCESS,
    user,
    token
  }
}

export const kickOut = () => {
  return {
    type: LOGOUT
  }
}

export const logOut = () => {
  return dispatch => {
    dispatch({type: LOGOUT})
    dispatch(flashMessage('You have been successfully logged out', 'log'))
  }
}

export const authenticate = (
  email,
  password
) => {
  return dispatch => {
    dispatch(requestAuth())

    fetch(`${ANTIVAX_ADMIN_SERVER_URL}/auth/authenticate`, {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        email,
        password
      })
    })
      .then(response => response.json())
      .then(json => {
        if (json.success) {
          dispatch(authSuccess(json.data.user, json.data.token))
        } else {
          dispatch(authFail(json.message))
        }
      })
  }
}
