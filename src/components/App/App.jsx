import React from 'react'
import {connect} from 'react-redux'

import styles from './App.css'
import Login from '../Login'
import FlashMessage from '../FlashMessage'
import Nav from '../Nav'
import CurrentUser from '../CurrentUser'
import {Block} from '../Layouts'

const App = ({
  user,
  children
}) => {
  if (user) {
    const navItems = [
      {
        id: 'questions',
        label: 'Questions'
      },
      {
        id: 'blogposts',
        label: 'Blogposts'
      },
      {
        id: 'content',
        label: 'Content'
      },
      {
        id: 'users',
        label: 'Users'
      }
    ]

    return (
      <div className={styles.App}>
        <div className={styles.App__sidebar}>
          <div>
            <Block n={2.5}>
              <h1 className={styles.App__title}>Antivax admin</h1>
            </Block>

            <Nav items={navItems} />
          </div>

          <CurrentUser />
        </div>

        {children}

        <FlashMessage />
      </div>
    )
  } else {
    return (
      <div className={styles.App}>
        <Login />

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
