import React from 'react'
import {connect} from 'react-redux'

import {ListInline, ListInlineItem} from '../Layouts'
import {Button} from '../UI'
import {logOut} from '../../store/authActions'
import styles from './CurrentUser.css'

class CurrentUser extends React.Component {
  constructor (props) {
    super(props)

    this.logout = this.logout.bind(this)
  }

  logout () {
    const {dispatch} = this.props

    dispatch(logOut())
  }

  render () {
    const {user} = this.props

    return (
      <div className={styles.CurrentUser}>
        <ListInline n={2}>
          <ListInlineItem n={2}>
            <div className={styles.CurrentUser__name}>
              {user.name}
            </div>
          </ListInlineItem>

          <ListInlineItem n={2}>
            <Button theme="primary" onClick={this.logout}>Log out</Button>
          </ListInlineItem>
        </ListInline>
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
)(CurrentUser)
