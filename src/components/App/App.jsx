import React from 'react'
import {connect} from 'react-redux'

import styles from './App.css'
import Login from '../Login'
import FlashMessage from '../FlashMessage'
import Nav from '../Nav'
import {Button} from '../UI'
import {Block} from '../Layouts'
import {categories, sections, blogposts} from '../../config'
import {logOut} from '../../store/authActions'
import {flashMessage} from '../../store/flashActions'

const App = ({
  user,
  children,
  logOut
}) => {
  if (user) {
    const navItems = [
      {
        id: 'questions',
        label: 'Questions'
      },
      {
        id: 'schedule-builder',
        label: 'Schedule Builder'
      },
      {
        id: 'users',
        label: 'Users'
      },
      {
        id: 'sections',
        label: 'Website Sections',
        heading: true
      },
      blogposts,
      ...sections,
      {
        id: 'categories',
        label: 'Categories',
        heading: true
      },
      ...categories
    ]

    return (
      <div className={styles.App}>
        <div className={styles.App__sidebar}>
          <div>
            <Block n={3}>
              <h1 className={styles.App__title}>Antivax admin</h1>
            </Block>

            <Nav items={navItems} />
          </div>

          <div className={styles.App__options}>
            <Block n={0.5}>
              <div className={styles.App__user}>Logged in as {user.name}</div>
            </Block>

            <Block>
              <Button
                inverse
                fullWidth
                theme="accent1"
                onClick={logOut}>Re-build search index</Button>
            </Block>

            <Button fullWidth theme="accent1" onClick={logOut}>Log out</Button>
          </div>
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
  },
  dispatch => {
    return {
      logOut: () => {
        dispatch(logOut())
        dispatch(flashMessage('You have been successfully logged out', 'log'))
      }
    }
  }
)(App)
