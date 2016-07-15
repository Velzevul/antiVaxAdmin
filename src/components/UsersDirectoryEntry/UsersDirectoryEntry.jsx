import React from 'react'
import {connect} from 'react-redux'
import Time from 'react-time'

import Badge from '../Badge'
import {DirectoryEntry, DirectoryEntryTitle, DirectoryEntryInfo} from '../DirectoryEntry'
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
    const {dispatch, item} = this.props
    const payload = {
      isEnabled: !item.data.isEnabled
    }

    dispatch(updateUser(item.data._id, payload))
  }

  delete () {
    const {dispatch, item} = this.props

    dispatch(deleteUser(item.data._id))
  }

  render () {
    const {item} = this.props

    return (
      <DirectoryEntry draft={!item.data.isEnabled}>
        <Block n={0.5}>
          <Flex justifyContent="space-between" alignItems="center">
            <DirectoryEntryInfo>Last log in on <Time value={item.data.lastLoggedInAt} format="MMMM Do YYYY (h:mm a)" /></DirectoryEntryInfo>

            <ListInline>
              <ListInlineItem>
                <Button small
                  disabled={item.disable}
                  inverse
                  theme={item.data.isEnabled ? 'error' : 'accent1'}
                  onClick={this.disable}>{item.data.isEnabled ? 'Disable' : 'Enable'}</Button>
              </ListInlineItem>

              <ListInlineItem>
                <Button small
                  disabled={item.isUpdating || item.data.isEnabled}
                  inverse
                  theme="error"
                  onClick={this.delete}>Delete</Button>
              </ListInlineItem>
            </ListInline>
          </Flex>
        </Block>

        <ListInline>
          <ListInlineItem>
            <DirectoryEntryTitle to={`users/${item.data._id}`}>{item.data.name} ({item.data.email})</DirectoryEntryTitle>
          </ListInlineItem>

          {item.data.isEnabled
          ? ''
          : <ListInlineItem>
            <Badge label="Disabled" theme="error" />
          </ListInlineItem>}

          {item.data.admin
          ? <ListInlineItem>
            <Badge label="Admin" theme="success" />
          </ListInlineItem>
          : ''}
        </ListInline>
      </DirectoryEntry>
    )
  }
}

export default connect()(UsersDirectoryEntry)
