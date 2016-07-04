import React from 'react'
import {connect} from 'react-redux'

import Header from '../Header'
import LoginPage from '../LoginPage'
import FlashMessage from '../FlashMessage'
import QuestionsPage from '../QuestionsPage'

const App = ({
  user,
  location
}) => {
  if (user) {
    let content = (
      <div>Main</div>
    )

    switch (location[0]) {
      case 'Questions':
        content = <QuestionsPage />
        break
      case 'Blog':
        break
      case 'Content':
        break
      case 'Users':
        break
      default:
        break
    }

    return (
      <div>
        <Header />

        {content}

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
      user: state.auth.user,
      location: state.location
    }
  }
)(App)
