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
        'x-access-token': getState.auth.token,
        'x-access-app': 'antiVaxAdmin'
      })
    })
      .then(response => response.json())
      .then(json => {
        if (json.success) {
          dispatch(receiveQuestions(json.data.questions))
        } else {
          dispatch(kickOut())
          dispatch(flashMessage(json.message, 'error'))
        }
      })
  }
}
