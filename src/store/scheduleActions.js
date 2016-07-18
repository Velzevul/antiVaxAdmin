import 'whatwg-fetch'

export const REQUEST_SCHEDULE = 'REQUEST_SCHEDULE'
export const RECEIVE_SCHEDULE = 'RECEIVE_SCHEDULE'

export const REQUEST_UPDATE_SCHEDULE = 'REQUEST_UPDATE_SCHEDULE'
export const RECEIVE_UPDATE_SCHEDULE = 'RECEIVE_UPDATE_SCHEDULE'

import {flashMessage} from './flashActions'
import {logOut} from './authActions'

const requestSchedule = () => {
  return {
    type: REQUEST_SCHEDULE
  }
}

const receiveSchedule = (
  items
) => {
  return {
    type: RECEIVE_SCHEDULE,
    items
  }
}

export const fetchSchedule = () => {
  return (dispatch, getState) => {
    dispatch(requestSchedule())

    fetch(`${ANTIVAX_ADMIN_SERVER_URL}/schedule`, {
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
          dispatch(receiveSchedule(json.data.schedule.items))
        } else {
          console.error(json.data)
          dispatch(flashMessage('Oops, something went wrong :()', 'error'))
        }
      })
  }
}

const requestUpdate = () => {
  return {
    type: REQUEST_UPDATE_SCHEDULE
  }
}

const receiveUpdate = (
  items
) => {
  return {
    type: RECEIVE_UPDATE_SCHEDULE,
    items
  }
}

export const updateSchedule = (
  data,
  successMessage
) => {
  return (dispatch, getState) => {
    dispatch(requestUpdate())

    fetch(`${ANTIVAX_ADMIN_SERVER_URL}/schedule`, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('antiVax_auth_token')
      },
      body: JSON.stringify({
        schedule: data
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
          dispatch(receiveUpdate(json.data.schedule.items))
          if (successMessage) {
            dispatch(flashMessage(successMessage, 'log'))
          }
        } else {
          console.error(json.data)
          dispatch(flashMessage('Oops, something went wrong :()', 'error'))
        }
      })
      .catch(err => {
        throw err
      })
  }
}
