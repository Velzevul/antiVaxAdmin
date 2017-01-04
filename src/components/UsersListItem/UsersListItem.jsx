import React from 'react'
import Time from 'react-time'

import {LinkButton} from '../UI'
import {ListInline, ListInlineItem} from '../Layouts'
import Badge from '../Badge'

import styles from './UsersListItem.css'

class UsersListItem extends React.Component {
  render () {
    const {user, currentId, isNewUserForm, children} = this.props

    let timestamp = (
      <div className={styles.Timestamp}>
        never logged in
      </div>
    )
    if (user.data.lastLoggedInAt) {
      timestamp = (
        <div className={styles.Timestamp}>
          <Time value={user.data.lastLoggedInAt} format="MMM Do h:mm A" />
        </div>
      )
    }

    if (currentId === user.data._id) {
      return children
    } else {
      return (
        <div className={`${styles.UsersListItem}`}>
          <div className={styles.UsersListItem__name}>
            <ListInline>
              <ListInlineItem>
                <div className={styles.Name}>{user.data.name}</div>
              </ListInlineItem>

              <ListInlineItem>
                <div className={styles.Actions}>
                  {currentId || isNewUserForm ? '' : <LinkButton to={`/users/${user.data._id}`}>Edit</LinkButton>}
                </div>
              </ListInlineItem>
            </ListInline>
          </div>

          <div className={styles.UsersListItem__email}>
            <div className={styles.Email}>({user.data.email})</div>
          </div>

          <div className={styles.UsersListItem__badges}>
            {user.data.admin
              ? (
                  <div className={styles.Badge}>
                    <Badge label="Admin" color="green" />
                  </div>
              )
              : ''
            }
            {!user.data.isEnabled
              ? (
                  <div className={styles.Badge}>
                    <Badge label="Disabled" color="red" />
                  </div>
              )
              : ''
            }
          </div>

          <div className={styles.UsersListItem__timestamp}>
            {timestamp}
          </div>
        </div>
      )
    }
  }
}

export default UsersListItem
