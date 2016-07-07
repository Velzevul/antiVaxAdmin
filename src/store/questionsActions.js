export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS'
export const RECEIVE_QUESTIONS = 'RECEOVE_QUESTIONS'

import {flashMessage} from './flashActions'
import {kickOut} from './authActions'

const requestQuestions = () => {
  return {
    type: REQUEST_QUESTIONS
  }
}

const receiveQuestions = (
  items
) => {
  return {
    type: RECEIVE_QUESTIONS,
    items
  }
}

export const fetchQuestions = () => {
  return (dispatch, getState) => {
    dispatch(requestQuestions())

    fetch(`${ANTIVAX_ADMIN_SERVER_URL}/questions/`, {
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json',
        'x-access-token': getState.auth.token
      })
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(kickOut())
          dispatch(flashMessage('Authorization failed. Please, log in again'))
        } else {
          return response
        }
      })
      .then(response => response.json())
      .then(json => {
        if (json.success) {
          dispatch(receiveQuestions(json.data.questions))
        } else {
          dispatch(flashMessage(json.message))
        }
      })
  }
}
