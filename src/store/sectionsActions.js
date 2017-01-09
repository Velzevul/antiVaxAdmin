import 'whatwg-fetch'
import {browserHistory} from 'react-router'

export const REQUEST_SECTIONS = 'REQUEST_SECTIONS'
export const RECEIVE_SECTIONS = 'RECEIVE_SECTIONS'

export const REQUEST_UPDATE_SECTION = 'REQUEST_UPDATE_SECTION'
export const CONFIRM_UPDATE_SECTION = 'CONFIRM_UPDATE_SECTION'
export const REJECT_UPDATE_SECTION = 'REJECT_UPDATE_SECTION'

export const REQUEST_CREATE_SECTION = 'CREATE_SECTION'
export const CONFIRM_CREATE_SECTION = 'CONFIRM_CREATE_SECTION'
export const REJECT_CREATE_SECTION = 'REJECT_CREATE_SECTION'

export const REQUEST_DELETE_SECTION = 'REQUEST_DELETE_SECTION'
export const CONFIRM_DELETE_SECTION = 'CONFIRM_DELETE_SECTION'
export const REJECT_DELETE_SECTION = 'REJECT_DELETE_SECTION'

import {flashMessage} from './flashActions'
import {logOut} from './authActions'

const requestSections = () => {
  return {
    type: REQUEST_SECTIONS
  }
}

const receiveSections = (
  items
) => {
  return {
    type: RECEIVE_SECTIONS,
    items
  }
}

export const fetchSections = () => {
  return (dispatch, getState) => {
    dispatch(requestSections())

    fetch(`${VACCINEANSWERS_ADMIN_SERVER_URL}/sections/`, {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('antiVax_auth_token')
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
        dispatch(receiveSections(json.data.items))
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
    type: REQUEST_UPDATE_SECTION,
    id
  }
}

const receiveUpdate = (
  id,
  item
) => {
  return {
    type: CONFIRM_UPDATE_SECTION,
    id,
    item
  }
}

const receiveErrors = (
  id,
  errors
) => {
  return {
    type: REJECT_UPDATE_SECTION,
    id,
    errors
  }
}

export const updateSection = (
  id,
  data,
  backlink
) => {
  return (dispatch, getState) => {
    dispatch(requestUpdate(id))

    fetch(`${VACCINEANSWERS_ADMIN_SERVER_URL}/sections/${id}`, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('antiVax_auth_token')
      },
      body: JSON.stringify({
        section: data
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
          dispatch(receiveUpdate(id, json.data.section))
          dispatch(flashMessage('Section was successfully updated', 'log'))
          if (backlink) {
            browserHistory.push(backlink)
          }
        } else if (json.data.name === 'ValidationError') {
          let payload = {}

          for (let prop in json.data.errors) {
            payload[prop] = json.data.errors[prop].message
          }

          dispatch(receiveErrors(id, payload))
          dispatch(flashMessage('Could not update section due to errors', 'error'))
        } else {
          console.error(json.data)
          dispatch(flashMessage('Oops, something went wrong :()', 'error'))
        }
      })
  }
}

const requestCreate = () => {
  return {
    type: REQUEST_CREATE_SECTION
  }
}

const confirmCreate = (
  item
) => {
  return {
    type: CONFIRM_CREATE_SECTION,
    item
  }
}

const rejectCreate = (
  errors
) => {
  return {
    type: REJECT_CREATE_SECTION,
    errors
  }
}

export const createSection = (
  data,
  backlink
) => {
  return (dispatch, getState) => {
    dispatch(requestCreate())

    fetch(`${VACCINEANSWERS_ADMIN_SERVER_URL}/sections/`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('antiVax_auth_token')
      },
      body: JSON.stringify({
        section: data
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
          dispatch(confirmCreate(json.data.section))
          dispatch(receiveUpdate(json.data.parent._id, json.data.parent))
          dispatch(flashMessage('Section created successfully', 'log'))
          if (backlink) {
            browserHistory.push(backlink)
          }
        } else if (json.data.name === 'ValidationError') {
          // TODO: test validation errors
          let payload = {}

          for (let prop in json.data.errors) {
            payload[prop] = json.data.errors[prop].message
          }

          dispatch(rejectCreate(payload))
          dispatch(flashMessage('Could not create section due to errors', 'error'))
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
    type: REQUEST_DELETE_SECTION,
    id
  }
}

const confirmDelete = (
  id
) => {
  return {
    type: CONFIRM_DELETE_SECTION,
    id
  }
}

const rejectDelete = (
  id
) => {
  return {
    type: REJECT_DELETE_SECTION,
    id
  }
}

export const deleteSection = (
  id,
  children,
  backlink
) => {
  return (dispatch, getState) => {
    dispatch(requestDelete(id))

    fetch(`${VACCINEANSWERS_ADMIN_SERVER_URL}/sections/${id}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('antiVax_auth_token')
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
          dispatch(receiveUpdate(json.data.parent._id, json.data.parent))
          if (backlink) {
            browserHistory.push(backlink)
          }
          dispatch(confirmDelete(id))
          children.map(c => confirmDelete(c))
          dispatch(flashMessage('Section was deleted', 'log'))
        } else {
          dispatch(rejectDelete(id))
          console.error(json.data)
          dispatch(flashMessage('Oops, something went wrong :()', 'error'))
        }
      })
  }
}
