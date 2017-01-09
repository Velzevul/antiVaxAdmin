import 'whatwg-fetch'
import {browserHistory} from 'react-router'

import {CONFIRM_UPDATE_SECTION} from './sectionsActions'

export const REQUEST_ARTICLES = 'REQUEST_ARTICLES'
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES'

export const REQUEST_UPDATE_ARTICLE = 'REQUEST_UPDATE_ARTICLE'
export const CONFIRM_UPDATE_ARTICLE = 'CONFIRM_UPDATE_ARTICLE'
export const REJECT_UPDATE_ARTICLE = 'REJECT_UPDATE_ARTICLE'

export const REQUEST_CREATE_ARTICLE = 'CREATE_ARTICLE'
export const CONFIRM_CREATE_ARTICLE = 'CONFIRM_CREATE_ARTICLE'
export const REJECT_CREATE_ARTICLE = 'REJECT_CREATE_ARTICLE'

export const REQUEST_DELETE_ARTICLE = 'REQUEST_DELETE_ARTICLE'
export const CONFIRM_DELETE_ARTICLE = 'CONFIRM_DELETE_ARTICLE'
export const REJECT_DELETE_ARTICLE = 'REJECT_DELETE_ARTICLE'

import {flashMessage} from './flashActions'
import {logOut} from './authActions'

const requestArticles = () => {
  return {
    type: REQUEST_ARTICLES
  }
}

const receiveArticles = (
  items
) => {
  return {
    type: RECEIVE_ARTICLES,
    items
  }
}

export const fetchArticles = () => {
  return (dispatch, getState) => {
    dispatch(requestArticles())

    fetch(`${ANTIVAX_ADMIN_SERVER_URL}/articles/`, {
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
        dispatch(receiveArticles(json.data.articles))
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
    type: REQUEST_UPDATE_ARTICLE,
    id
  }
}

const receiveUpdate = (
  id,
  item
) => {
  return {
    type: CONFIRM_UPDATE_ARTICLE,
    id,
    item
  }
}

const receiveErrors = (
  id,
  errors
) => {
  return {
    type: REJECT_UPDATE_ARTICLE,
    id,
    errors
  }
}

export const updateArticle = (
  id,
  data,
  backlink
) => {
  return (dispatch, getState) => {
    dispatch(requestUpdate(id))

    data = Object.assign({}, data, {
      comments: data.comments
        .filter(c => !c.isDeleted)
        .map(c => {
          return Object.assign({}, c, {
            replies: c.replies.filter(r => !r.isDeleted)
          })
        })
    })

    fetch(`${ANTIVAX_ADMIN_SERVER_URL}/articles/${id}`, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('antiVax_auth_token')
      },
      body: JSON.stringify({
        article: data
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
          dispatch(receiveUpdate(id, json.data.article))
          dispatch(flashMessage('Article has been saved', 'log'))
          if (backlink) {
            browserHistory.push(backlink)
          }
        } else if (json.data.name === 'ValidationError') {
          let payload = {}

          for (let prop in json.data.errors) {
            payload[prop] = json.data.errors[prop].message
          }

          dispatch(receiveErrors(id, payload))
          dispatch(flashMessage('Could not update article due to errors', 'error'))
        } else {
          console.error(json.data)
          dispatch(flashMessage('Oops, something went wrong :()', 'error'))
        }
      })
  }
}

const requestCreate = () => {
  return {
    type: REQUEST_CREATE_ARTICLE
  }
}

const confirmCreate = (
  item
) => {
  return {
    type: CONFIRM_CREATE_ARTICLE,
    item
  }
}

const rejectCreate = (
  errors
) => {
  return {
    type: REJECT_CREATE_ARTICLE,
    errors
  }
}

export const createArticle = (
  data,
  backlink
) => {
  return (dispatch, getState) => {
    dispatch(requestCreate())

    fetch(`${ANTIVAX_ADMIN_SERVER_URL}/articles/`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('antiVax_auth_token')
      },
      body: JSON.stringify({
        article: data
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
          dispatch(confirmCreate(json.data.article))
          dispatch({
            type: CONFIRM_UPDATE_SECTION,
            id: json.data.parent._id,
            item: json.data.parent
          })
          dispatch(flashMessage('Article created successfully', 'log'))
          if (backlink) {
            browserHistory.push(backlink)
          }
        } else if (json.data.name === 'ValidationError') {
          let payload = {}

          for (let prop in json.data.errors) {
            payload[prop] = json.data.errors[prop].message
          }

          dispatch(rejectCreate(payload))
          dispatch(flashMessage('Could not create article due to errors', 'error'))
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
    type: REQUEST_DELETE_ARTICLE,
    id
  }
}

const confirmDelete = (
  id
) => {
  return {
    type: CONFIRM_DELETE_ARTICLE,
    id
  }
}

const rejectDelete = (
  id
) => {
  return {
    type: REJECT_DELETE_ARTICLE,
    id
  }
}

export const deleteArticle = (
  id,
  backlink
) => {
  return (dispatch, getState) => {
    dispatch(requestDelete(id))

    fetch(`${ANTIVAX_ADMIN_SERVER_URL}/articles/${id}`, {
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
          dispatch({
            type: CONFIRM_UPDATE_SECTION,
            id: json.data.parent._id,
            item: json.data.parent
          })
          if (backlink) {
            browserHistory.push(backlink)
          }
          dispatch(confirmDelete(id))
          dispatch(flashMessage('Article was deleted', 'log'))
        } else {
          dispatch(rejectDelete(id))
          console.error(json.data)
          dispatch(flashMessage('Oops, something went wrong :()', 'error'))
        }
      })
  }
}
