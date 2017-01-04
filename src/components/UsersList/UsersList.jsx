import React from 'react'
import {connect} from 'react-redux'

import {fetchUsers} from '../../store/usersActions'
import Loading from '../Loading'
import UsersListItem from '../UsersListItem'
import {LinkButton} from '../UI'
import {ListInline, ListInlineItem} from '../Layouts'

import styles from './UsersList.css'

class UsersList extends React.Component {
  componentWillMount () {
    const {fetchUsers} = this.props

    fetchUsers()
  }

  render () {
    const {children, items, isFetching, params, location} = this.props
    const isNewUserForm = location.pathname === '/users/new'

    if (isFetching) {
      return <Loading />
    } else {
      return (
        <div className={`${styles.Wrapper} ${params.userId || isNewUserForm ? styles.Wrapper_dimmed : ''}`}>
          <div className={styles.UsersList}>
            <div className={styles.Heading}>
              <div className={styles.Heading__name}>
                <ListInline>
                  <ListInlineItem>
                    <div className={styles.Name}>Users</div>
                  </ListInlineItem>

                  {params.userId || isNewUserForm
                    ? ''
                    : (
                      <ListInlineItem>
                        <LinkButton to="/users/new">add new user</LinkButton>
                      </ListInlineItem>
                    )
                  }
                </ListInline>
              </div>

              <div className={styles.Heading__email}>
                <div className={styles.Email}>email</div>
              </div>

              <div className={styles.Heading__timestamp}>
                <div className={styles.Timestamp}>last log in</div>
              </div>
            </div>

            {isNewUserForm ? children : ''}

            {items.map((i, index) => {
              return (
                <UsersListItem key={index}
                  user={i}
                  children={children}
                  currentId={params.userId}
                  isNewUserForm={isNewUserForm} />
              )
            })}
          </div>
        </div>
      )
    }
  }
}

export default connect(
  state => {
    return {
      items: state.users.items,
      isFetching: state.users.isFetching
    }
  },
  dispatch => {
    return {
      fetchUsers: () => {
        dispatch(fetchUsers())
      }
    }
  }
)(UsersList)
