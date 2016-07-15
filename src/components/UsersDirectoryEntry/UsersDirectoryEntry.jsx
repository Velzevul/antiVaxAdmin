import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import Time from 'react-time'

import styles from './UsersDirectoryEntry.css'
import {Block, ListInline, ListInlineItem, Flex} from '../Layouts'
import {Button} from '../UI'
import {updateUser, deleteUser} from '../../store/usersActions'

class UsersDirectoryEntry extends React.Component {
  constructor (props) {
    super(props)

    this.disable = this.disable.bind(this)
    this.delete = this.delete.bind(this)
  }

  disable () {
    const {dispatch, entry} = this.props
    const payload = {
      isEnabled: !entry.data.isEnabled
    }

    dispatch(updateUser(entry.data._id, payload))
  }

  delete () {
    const {dispatch, entry} = this.props

    dispatch(deleteUser(entry.data._id))
  }

  render () {
    const {entry} = this.props

    return (
      <div className={`${styles.Entry} ${entry.data.isEnabled ? '' : styles.Entry_draft}`}>
        {entry.data.isEnabled
          ? null
          : <div className={styles.Entry__badge}>Disabled</div>
        }

        <Flex justifyContent="space-between" alignItems="center">
          <div>
            <Block n={0.5}>
              <div className={styles.Entry__info}>Last logged in on <Time value={entry.data.lastLoggedInAt} format="MMMM Do YYYY (h:mm a)" /></div>
            </Block>

            <Link to={`users/${entry.data._id}`} className={styles.Entry__title}>{entry.data.name}</Link>
          </div>

          {entry.data.isEnabled
            ? <Button small
              disabled={entry.isUpdating}
              inverse
              theme="error"
              onClick={this.disable}>Disable</Button>
            : <ListInline>
              <ListInlineItem>
                <Button small
                  inverse
                  disabled={entry.isUpdating}
                  theme="accent1"
                  onClick={this.disable}>Enable</Button>
              </ListInlineItem>

              <ListInlineItem>
                <Button small
                  disabled={entry.isUpdating}
                  inverse
                  theme="error"
                  onClick={this.delete}>Delete</Button>
              </ListInlineItem>
            </ListInline>
          }
        </Flex>
      </div>
    )
  }
}

export default connect()(UsersDirectoryEntry)
