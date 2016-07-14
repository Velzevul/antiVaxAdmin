import 'whatwg-fetch'
import {hashHistory} from 'react-router'

export const REQUEST_BLOGPOSTS = 'REQUEST_BLOGPOSTS'
export const RECEIVE_BLOGPOSTS = 'RECEIVE_BLOGPOSTS'

export const REQUEST_BLOGPOST_UPDATE = 'REQUEST_BLOGPOST_UPDATE'
export const RECEIVE_BLOGPOST_UPDATE = 'RECEIVE_BLOGPOST_UPDATE'
export const RECEIVE_BLOGPOST_ERRORS = 'RECEIVE_BLOGPOST_ERRORS'

export const REQUEST_CREATE_BLOGPOST = 'CREATE_BLOGPOST'
export const CONFIRM_CREATE_BLOGPOST = 'CONFIRM_CREATE_BLOGPOST'
export const REJECT_CREATE_BLOGPOST = 'REJECT_CREATE_BLOGPOST'

export const REQUEST_DELETE_BLOGPOST = 'REQUEST_DELETE_BLOGPOST'
export const CONFIRM_DELETE_BLOGPOST = 'CONFIRM_DELETE_BLOGPOST'
export const REJECT_DELETE_BLOGPOST = 'REJECT_DELETE_BLOGPOST'

import {flashMessage} from './flashActions'
import {logOut} from './authActions'

const requestBlogposts = () => {
  return {
    type: REQUEST_BLOGPOSTS
  }
}

const receiveBlogposts = (
  items
) => {
  return {
    type: RECEIVE_BLOGPOSTS,
    items
  }
}

export const fetchBlogposts = () => {
  return (dispatch, getState) => {
    dispatch(requestBlogposts())

    fetch(`${ANTIVAX_ADMIN_SERVER_URL}/blogposts/`, {
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
        dispatch(receiveBlogposts(json.data.blogposts))
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
    type: REQUEST_BLOGPOST_UPDATE,
    id
  }
}

const receiveUpdate = (
  id,
  updatedItem
) => {
  return {
    type: RECEIVE_BLOGPOST_UPDATE,
    id,
    updatedItem
  }
}

const receiveErrors = (
  id,
  errors
) => {
  return {
    type: RECEIVE_BLOGPOST_ERRORS,
    id,
    errors
  }
}

export const updateBlogpost = (
  id,
  data,
  successMessage
) => {
  return (dispatch, getState) => {
    dispatch(requestUpdate(id))

    fetch(`${ANTIVAX_ADMIN_SERVER_URL}/blogposts/${id}`, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': getState().auth.token
      },
      body: JSON.stringify({
        blogpost: data
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
          dispatch(receiveUpdate(id, json.data.blogpost))
          if (successMessage) {
            dispatch(flashMessage(successMessage, 'log'))
          }
        } else if (json.data.name === 'ValidationError') {
          let payload = {}

          for (let prop in json.data.errors) {
            payload[prop] = json.data.errors[prop].message
          }

          dispatch(receiveErrors(id, payload))
          dispatch(flashMessage('Could not update blogpost due to errors', 'error'))
        } else {
          console.error(json.data)
          dispatch(flashMessage('Oops, something went wrong :()', 'error'))
        }
      })
  }
}

const requestCreate = () => {
  return {
    type: REQUEST_CREATE_BLOGPOST
  }
}

const confirmCreate = (
  item
) => {
  return {
    type: CONFIRM_CREATE_BLOGPOST,
    item
  }
}

const rejectCreate = (
  errors
) => {
  return {
    type: REJECT_CREATE_BLOGPOST,
    errors
  }
}

export const createBlogpost = (
  data
) => {
  return (dispatch, getState) => {
    dispatch(requestCreate())

    fetch(`${ANTIVAX_ADMIN_SERVER_URL}/blogposts`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': getState().auth.token
      },
      body: JSON.stringify({
        blogpost: data
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
          dispatch(confirmCreate(json.data.blogpost))
          dispatch(flashMessage('Question created successfully', 'log'))
          hashHistory.push(`/blogposts/${json.data.blogpost._id}`)
        } else if (json.data.name === 'ValidationError') {
          let payload = {}

          for (let prop in json.data.errors) {
            payload[prop] = json.data.errors[prop].message
          }

          dispatch(rejectCreate(payload))
          dispatch(flashMessage('Could not create blogpost due to errors', 'error'))
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
    type: REQUEST_DELETE_BLOGPOST,
    id
  }
}

const confirmDelete = (
  id
) => {
  return {
    type: CONFIRM_DELETE_BLOGPOST,
    id
  }
}

const rejectDelete = (
  id
) => {
  return {
    type: REJECT_DELETE_BLOGPOST,
    id
  }
}

export const deleteBlogpost = (
  id
) => {
  return (dispatch, getState) => {
    dispatch(requestDelete(id))

    fetch(`${ANTIVAX_ADMIN_SERVER_URL}/blogposts/${id}`, {
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
          dispatch(flashMessage('Blogpost was deleted', 'log'))
        } else {
          dispatch(rejectDelete(id))
          console.error(json.data)
          dispatch(flashMessage('Oops, something went wrong :()', 'error'))
        }
      })
  }
}
