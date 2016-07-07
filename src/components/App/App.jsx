import React from 'react'
import {connect} from 'react-redux'

import Header from '../Header'
import LoginPage from '../LoginPage'
import FlashMessage from '../FlashMessage'
import QuestionsPage from '../QuestionsPage'

const App = ({
  user,
  children
}) => {
  if (user) {
    return (
      <div>
        <Header />

        {children}

        <FlashMessage />
      </div>
    )
  } else {
    return (
      <div>
        <LoginPage />
        <FlashMessage />
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      user: state.auth.user
    }
  }
)(App)
