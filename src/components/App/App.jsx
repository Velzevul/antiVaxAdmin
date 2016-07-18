import React from 'react'
import {connect} from 'react-redux'
import Time from 'react-time'

import styles from './App.css'
import FlashMessage from '../FlashMessage'
import Nav from '../Nav'
import Loading from '../Loading'
import Login from '../Login'
import {Button} from '../UI'
import {Block} from '../Layouts'
import {attachments, sections, blogposts, faqs} from '../../config'
import {logOut, loginWithToken} from '../../store/authActions'
import {flashMessage} from '../../store/flashActions'
import {fetchSearchIndex, updateSearchIndex} from '../../store/searchIndexActions'

class App extends React.Component {
  componentWillMount () {
    const token = localStorage.getItem('antiVax_auth_token')

    if (token) {
      this.props.attemptToken(token)
    }
  }

  componentWillReceiveProps (nextProps) {
    const {fetchIndex, user} = nextProps

    if (user && !this.props.user) {
      fetchIndex()
    }
  }

  render () {
    const {
      user,
      searchIndex,
      children,
      logOut,
      updateIndex,
      attemptingLogin
    } = this.props

    if (attemptingLogin) {
      return (
        <Loading />
      )
    } else {
      if (user) {
        const navItems = [
          {
            id: 'questions',
            label: 'Questions'
          },
          blogposts,
          faqs,
          {
            id: 'users',
            label: 'Users'
          },
          {
            id: 'sections',
            label: 'Website Sections',
            heading: true
          },
          ...sections,
          {
            id: 'attachments',
            label: 'Attachments',
            heading: true
          },
          ...attachments
        ]

        let indexInfo = ''
        if (searchIndex.isFetching) {
          indexInfo = (
            <div className={styles.App__info}>Fetching...</div>
          )
        } else if (searchIndex.isUpdating) {
          indexInfo = (
            <div className={styles.App__info}>Updating...</div>
          )
        } else {
          indexInfo = (
            <div className={styles.App__info}>last updated on <Time value={searchIndex.lastUpdatedOn} format="MMMM Do YYYY (h:mm a)" /> by {searchIndex.lastUpdatedBy}</div>
          )
        }

        return (
          <div className={styles.App}>
            <div className={styles.App__sidebar}>
              <div className={styles.App__header}>
                <h1 className={styles.App__title}>Antivax admin</h1>
              </div>

              <Nav items={navItems} />

              <div className={styles.App__options}>
                <Block n={0.5}>
                  {indexInfo}
                </Block>

                <Block n={0.5}>
                  <Button
                    inverse
                    fullWidth
                    disabled={searchIndex.isUpdating || searchIndex.isFetching}
                    theme="accent1"
                    onClick={updateIndex}>Update search index</Button>
                </Block>

                <Block n={0.5}>
                  <div className={styles.App__info}>Logged in as {user.name}</div>
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
      },
      logOut: () => {
        dispatch(logOut())
        dispatch(flashMessage('You have been successfully logged out', 'log'))
      },
      updateIndex: () => {
        dispatch(updateSearchIndex())
      },
      fetchIndex: () => {
        dispatch(fetchSearchIndex())
      }
    }
  }
)(App)
