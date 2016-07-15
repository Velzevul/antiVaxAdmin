import 'whatwg-fetch'
import {hashHistory} from 'react-router'

export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'

export const REQUEST_UPDATE_USER = 'REQUEST_UPDATE_USER'
export const CONFIRM_UPDATE_USER = 'CONFIRM_UPDATE_USER'
export const REJECT_UPDATE_USER = 'REJECT_UPDATE_USER'

export const REQUEST_CREATE_USER = 'CREATE_USER'
export const CONFIRM_CREATE_USER = 'CONFIRM_CREATE_USER'
export const REJECT_CREATE_USER = 'REJECT_CREATE_USER'

export const REQUEST_DELETE_USER = 'REQUEST_DELETE_USER'
export const CONFIRM_DELETE_USER = 'CONFIRM_DELETE_USER'
export const REJECT_DELETE_USER = 'REJECT_DELETE_USER'

import {flashMessage} from './flashActions'
import {logOut} from './authActions'

const requestFetch = () => {
  return {
    type: REQUEST_USERS
  }
}

const receiveFetch = (
  items
) => {
  return {
    type: RECEIVE_USERS,
    items
  }
}

export const fetchUsers = () => {
  return (dispatch, getState) => {
    dispatch(requestFetch())

    fetch(`${ANTIVAX_ADMIN_SERVER_URL}/users/`, {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': getState().auth.token
      }
    })
    .then(response => {
      if (response.status === 401) {
        dispatch(logOut())
        dispatch(flashMessage('Authorization failed. Please, log in again', 'error'))
        throw new Error('Unauthorized action')
      } else {
        return response
      }
    })
    .then(response => response.json())
    .then(json => {
      if (json.success) {
        dispatch(receiveFetch(json.data.users))
      } else {
        console.error(json.data)
        dispatch(flashMessage('Oops, something went wrong :()', 'error'))
      }
    })
  }
}

const requestUpdate = (
  id
) => {
  return {
    type: REQUEST_UPDATE_USER,
    id
  }
}

const confirmUpdate = (
  id,
  updatedItem
) => {
  return {
    type: CONFIRM_UPDATE_USER,
    id,
    updatedItem
  }
}

const rejectUpdate = (
  id,
  errors
) => {
  return {
    type: REJECT_UPDATE_USER,
    id,
    errors
  }
}

export const updateUser = (
  id,
  data,
  successMessage
) => {
  return (dispatch, getState) => {
    dispatch(requestUpdate(id))

    fetch(`${ANTIVAX_ADMIN_SERVER_URL}/users/${id}`, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': getState().auth.token
      },
      body: JSON.stringify({
        user: data
      })
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(logOut())
          dispatch(flashMessage('Authorization failed. Please, log in again', 'error'))
          throw new Error('Unauthorized action')
        } else {
          return response
        }
      })
      .then(response => response.json())
      .then(json => {
        if (json.success) {
          dispatch(confirmUpdate(id, json.data.user))
          if (successMessage) {
            dispatch(flashMessage(successMessage, 'log'))
          }
        } else if (json.data.name === 'ValidationError') {
          let payload = {}

          for (let prop in json.data.errors) {
            payload[prop] = json.data.errors[prop].message
          }

          dispatch(rejectUpdate(id, payload))
          dispatch(flashMessage('Could not update user due to errors', 'error'))
        } else {
          console.error(json.data)
          dispatch(flashMessage('Oops, something went wrong :()', 'error'))
        }
      })
  }
}

const requestCreate = () => {
  return {
    type: REQUEST_CREATE_USER
  }
}

const confirmCreate = (
  item
) => {
  return {
    type: CONFIRM_CREATE_USER,
    item
  }
}

const rejectCreate = (
  errors
) => {
  return {
    type: REJECT_CREATE_USER,
    errors
  }
}

export const createUser = (
  data
) => {
  return (dispatch, getState) => {
    dispatch(requestCreate())

    fetch(`${ANTIVAX_ADMIN_SERVER_URL}/users`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': getState().auth.token
      },
      body: JSON.stringify({
        user: data
      })
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(logOut())
          dispatch(flashMessage('Authorization failed. Please, log in again', 'error'))
          throw new Error('Unauthorized action')
        } else {
          return response
        }
      })
      .then(response => response.json())
      .then(json => {
        if (json.success) {
          dispatch(confirmCreate(json.data.user))
          dispatch(flashMessage('Question created successfully', 'log'))
          hashHistory.push(`/users/${json.data.user._id}`)
        } else if (json.data.name === 'ValidationError') {
          let payload = {}

          for (let prop in json.data.errors) {
            payload[prop] = json.data.errors[prop].message
          }

          dispatch(rejectCreate(payload))
          dispatch(flashMessage('Could not create user due to errors', 'error'))
        } else {
          console.error(json.data)
          dispatch(flashMessage('Oops, something went wrong :()', 'error'))
        }
      })
  }
}

const requestDelete = (
  id
) => {
  return {
    type: REQUEST_DELETE_USER,
    id
  }
}

const confirmDelete = (
  id
) => {
  return {
    type: CONFIRM_DELETE_USER,
    id
  }
}

const rejectDelete = (
  id
) => {
  return {
    type: REJECT_DELETE_USER,
    id
  }
}

export const deleteUser = (
  id
) => {
  return (dispatch, getState) => {
    dispatch(requestDelete(id))

    fetch(`${ANTIVAX_ADMIN_SERVER_URL}/users/${id}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': getState().auth.token
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(logOut())
          dispatch(flashMessage('Authorization failed. Please, log in again', 'error'))
          throw new Error('Unauthorized action')
        } else {
          return response
        }
      })
      .then(response => response.json())
      .then(json => {
        if (json.success) {
          dispatch(confirmDelete(id))
          dispatch(flashMessage('User was deleted', 'log'))
        } else {
          dispatch(rejectDelete(id))
          console.error(json.data)
          dispatch(flashMessage('Oops, something went wrong :()', 'error'))
        }
      })
  }
}
