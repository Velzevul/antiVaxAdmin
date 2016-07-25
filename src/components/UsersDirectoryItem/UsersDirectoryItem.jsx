import React from 'react'
import {connect} from 'react-redux'
import Time from 'react-time'

import Badge from '../Badge'
import {DirectoryItem, DirectoryItemTitle, DirectoryItemInfo} from '../DirectoryItem'
import {Block, ListInline, ListInlineItem, Flex} from '../Layouts'
import {Button} from '../UI'
import {updateUser, deleteUser} from '../../store/usersActions'

class UsersDirectoryItem extends React.Component {
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

    let lastLoggedIn = ''
    if (item.data.lastLoggedInAt) {
      lastLoggedIn = (
        <DirectoryItemInfo>Last log in on <Time value={item.data.lastLoggedInAt} format="MMMM Do YYYY (h:mm a)" /></DirectoryItemInfo>
      )
    } else {
      lastLoggedIn = (
        <DirectoryItemInfo>Never logged in</DirectoryItemInfo>
      )
    }

    return (
      <DirectoryItem draft={!item.data.isEnabled}>
        <Block n={0.5}>
          <Flex justifyContent="space-between" alignItems="center">
            {lastLoggedIn}

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
            <DirectoryItemTitle to={`users/${item.data._id}`}>{item.data.email}</DirectoryItemTitle>
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
      </DirectoryItem>
    )
  }
}

export default connect()(UsersDirectoryItem)
