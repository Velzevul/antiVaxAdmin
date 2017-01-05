import React from 'react'
import Time from 'react-time'

import TableRow from '../TableRow'
import TableColumn from '../TableColumn'
import TableCell from '../TableCell'
import {LinkButton} from '../UI'
import {Flex} from '../Layouts'
import Badge from '../Badge'
import Icon from '../Icon'

import styles from './UsersListItem.css'

const UsersListItem = ({
  user,
  disableInteraction
}) => {
  let icon = null
  if (user.data.isEnabled) {
    if (user.data.admin) {
      icon = 'user-admin'
    } else {
      icon = 'user'
    }
  } else {
    icon = 'user-disabled'
  }

  let timestamp = ''
  if (user.data.lastLoggedInAt) {
    timestamp = <Time value={user.data.lastLoggedInAt} format="MMM Do h:mm A" />
  } else {
    timestamp = 'never logged in'
  }

  return (
    <div className={`${styles.UsersListItem}
      ${disableInteraction ? '' : styles.UsersListItem_interactive}`}>
      <TableRow interactive={!disableInteraction}>
        <TableColumn>
          <Icon type={icon} />
        </TableColumn>

        <TableColumn width="stretch">
          <TableCell title>
            {user.data.name}
          </TableCell>

          <TableCell>
            ({user.data.email})
          </TableCell>
        </TableColumn>

        <TableColumn width="15">
          <TableCell>
            {timestamp}
          </TableCell>
        </TableColumn>

        <TableColumn width="15">
          <Flex>
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
          </Flex>
        </TableColumn>

        <TableColumn last
          width="5">
          <Flex justifyContent="flex-end">
            {disableInteraction
              ? ''
              : (
                <div className={styles.UsersListItem__actions}>
                  <LinkButton to={`/users/${user.data._id}`}>edit</LinkButton>
                </div>
              )
            }
          </Flex>
        </TableColumn>
      </TableRow>
    </div>
  )
}

export default UsersListItem
