import 'whatwg-fetch'

export const REQUEST_AUTH = 'REQUEST_AUTH'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

const requestAuth = () => {
  return {
    type: REQUEST_AUTH
  }
}

export const logOut = () => {
  return {
    type: LOGOUT
  }
}

const logIn = (
  user,
  token
) => {
  return {
    type: LOGIN,
    user,
    token
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
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then(response => response.json())
      .then(json => {
        if (json.success) {
          dispatch(logIn(json.data.user, json.data.token))
        } else {
          dispatch(logOut())
        }
      })
  }
}
