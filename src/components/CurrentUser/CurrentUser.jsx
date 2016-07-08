import React from 'react'
import {connect} from 'react-redux'

import {Block, List, ListItem} from '../Layouts'
import {Button} from '../UI'
import {logOut} from '../../store/authActions'
import {flashMessage} from '../../store/flashActions'
import styles from './CurrentUser.css'

class CurrentUser extends React.Component {
  constructor (props) {
    super(props)

    this.logout = this.logout.bind(this)
  }

  logout () {
    const {dispatch} = this.props

    dispatch(logOut())
    dispatch(flashMessage('You have been successfully logged out', 'log'))
  }

  render () {
    const {user} = this.props

    return (
      <aside className={styles.CurrentUser}>
        <List n={2}>
          <ListItem n={2}>
            <Block>
              <h1 className={styles.CurrentUser__title}>Logged in as</h1>
            </Block>

            <div className={styles.CurrentUser__name}>
              {user.name}
            </div>
          </ListItem>

          <ListItem n={2}>
            <Button fullWidth theme="accent1" onClick={this.logout}>Log out</Button>
          </ListItem>
        </List>
      </aside>
    )
  }
}

export default connect(
  state => {
    return {
      user: state.auth.user ? state.auth.user : {}
    }
  }
)(CurrentUser)
