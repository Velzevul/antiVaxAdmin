import 'whatwg-fetch'

import {flashMessage} from './flashActions'
import {logOut} from './authActions'

export const REQUEST_INDEX = 'REQUEST_INDEX'
export const RECEIVE_INDEX = 'RECEIVE_INDEX'

export const REQUEST_UPDATE_INDEX = 'REQUEST_UPDATE_INDEX'
export const CONFIRM_UPDATE_INDEX = 'CONFIRM_UPDATE_INDEX'

const requestSearchIndex = () => {
  return {
    type: REQUEST_INDEX
  }
}

const receiveSearchIndex = (
  lastUpdatedOn,
  lastUpdatedBy
) => {
  return {
    type: RECEIVE_INDEX,
    lastUpdatedOn,
    lastUpdatedBy
  }
}

export const fetchSearchIndex = () => {
  return (dispatch, getState) => {
    dispatch(requestSearchIndex())

    fetch(`${VACCINEANSWERS_ADMIN_SERVER_URL}/searchIndex`, {
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
          dispatch(receiveSearchIndex(json.data.searchIndex.lastUpdatedOn, json.data.searchIndex.lastUpdatedBy))
        } else {
          console.error(json.data)
          dispatch(flashMessage('Oops, something went wrong :()', 'error'))
        }
      })
  }
}

const requestUpdate = () => {
  return {
    type: REQUEST_UPDATE_INDEX
  }
}

const confirmUpdate = (
  lastUpdatedOn,
  lastUpdatedBy
) => {
  return {
    type: CONFIRM_UPDATE_INDEX,
    lastUpdatedOn,
    lastUpdatedBy
  }
}

export const updateSearchIndex = () => {
  return (dispatch, getState) => {
    dispatch(requestUpdate())

    fetch(`${VACCINEANSWERS_ADMIN_SERVER_URL}/searchIndex`, {
      method: 'PUT',
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
          dispatch(confirmUpdate(json.data.searchIndex.lastUpdatedOn, json.data.searchIndex.lastUpdatedBy))
          dispatch(flashMessage('Search index updated', 'log'))
        } else {
          console.error(json.data)
          dispatch(flashMessage('Oops, something went wrong :()', 'error'))
        }
      })
  }
}
