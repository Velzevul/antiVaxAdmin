import React from 'react'
import {connect} from 'react-redux'

import FlashMessage from '../FlashMessage'
import Loading from '../Loading'
import Login from '../Login'
import AppHeader from '../AppHeader'
import {loginWithToken} from '../../store/authActions'

import styles from './App.css'

class App extends React.Component {
  componentWillMount () {
    const token = localStorage.getItem('antiVax_auth_token')

    if (token) {
      this.props.attemptToken(token)
    }
  }

  render () {
    const {
      user,
      children,
      attemptingLogin
    } = this.props

    if (attemptingLogin) {
      return (
        <Loading />
      )
    } else {
      if (user) {
        return (
          <div className={styles.App}>
            <AppHeader />

            {children}

            <FlashMessage />
          </div>
        )
      } else {
        return (
          <div>
            <Login />

            <FlashMessage />
          </div>
        )
      }
    }
  }
}

export default connect(
  state => {
    return {
      attemptingLogin: state.auth.isFetching,
      user: state.auth.user,
      searchIndex: {
        isFetching: state.searchIndex.isFetching,
        isUpdating: state.searchIndex.isUpdating,
        lastUpdatedOn: state.searchIndex.lastUpdatedOn,
        lastUpdatedBy: state.searchIndex.lastUpdatedBy
      }
    }
  },
  dispatch => {
    return {
      attemptToken: (token) => {
        dispatch(loginWithToken(token))
      }
    }
  }
)(App)
