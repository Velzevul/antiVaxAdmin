import React from 'react'
import {connect} from 'react-redux'

import {logOut} from '../../store/authActions'
import {flashMessage} from '../../store/flashActions'
import {ListInline, ListInlineItem} from '../Layouts'
import {Button} from '../UI'

import styles from './UserInfo.css'

const UserInfo = ({
  user,
  logOut
}) => {
  if (user) {
    return (
      <div className={styles.UserInfo}>
        <ListInline>
          <ListInlineItem>
            <ListInline n={0.5}>
              <ListInlineItem n={0.5}>Logged in as</ListInlineItem>

              <ListInlineItem n={0.5}>
                <div className={styles.UserInfo__username}>{user.name}</div>
              </ListInlineItem>
            </ListInline>
          </ListInlineItem>

          <ListInlineItem>
            <Button color="red"
              onClick={logOut}>Log out</Button>
          </ListInlineItem>
        </ListInline>
      </div>
    )
  } else {
    return <div />
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
)(UserInfo)
