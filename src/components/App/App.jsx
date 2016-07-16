import React from 'react'
import {connect} from 'react-redux'

import styles from './App.css'
import Login from '../Login'
import FlashMessage from '../FlashMessage'
import Nav from '../Nav'
import CurrentUser from '../CurrentUser'
import {Block} from '../Layouts'
import {categories, sections, blogposts} from '../../config'

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
