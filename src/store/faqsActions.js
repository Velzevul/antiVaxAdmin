import 'whatwg-fetch'

export const REQUEST_FAQS = 'REQUEST_FAQS'
export const RECEIVE_FAQS = 'RECEIVE_FAQS'
export const REQUEST_FAQ_UPDATE = 'REQUEST_FAQ_UPDATE'
export const RECEIVE_FAQ_UPDATE = 'RECEIVE_FAQ_UPDATE'

import {flashMessage} from './flashActions'
import {logOut} from './authActions'

const requestFaqs = () => {
  return {
    type: REQUEST_FAQS
  }
}

const receiveFaqs = (
  items
) => {
  return {
    type: RECEIVE_FAQS,
    items
  }
}

export const fetchFaqs = () => {
  return (dispatch, getState) => {
    dispatch(requestFaqs())

    fetch(`${ANTIVAX_ADMIN_SERVER_URL}/faqs/`, {
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
          dispatch(receiveFaqs(json.data.faqs))
        } else {
          dispatch(flashMessage(json.message))
        }
      })
      .catch(err => {
        throw err
      })
  }
}

const requestUpdate = (id) => {
  return {
    type: REQUEST_FAQ_UPDATE,
    id
  }
}

const receiveUpdate = (
  id,
  updatedFaq
) => {
  return {
    type: RECEIVE_FAQ_UPDATE,
    id,
    updatedFaq
  }
}

export const updateFaq = (
  id,
  data
) => {
  return (dispatch, getState) => {
    dispatch(requestUpdate(id))

    fetch(`${ANTIVAX_ADMIN_SERVER_URL}/faqs/${id}`, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': getState().auth.token
      },
      body: JSON.stringify({
        faq: data
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
          dispatch(receiveUpdate(id, json.data.faq))
        } else {
          dispatch(flashMessage(json.message))
        }
      })
      .catch(err => {
        throw err
      })
  }
}
