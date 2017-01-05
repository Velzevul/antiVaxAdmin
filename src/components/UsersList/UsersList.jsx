import React from 'react'
import {connect} from 'react-redux'

import {fetchUsers} from '../../store/usersActions'
import Loading from '../Loading'
import UsersListItem from '../UsersListItem'
import {LinkButton} from '../UI'
import Wrapper from '../Wrapper'
import Table from '../Table'
import TableRow from '../TableRow'
import TableColumn from '../TableColumn'
import TableCell from '../TableCell'
import {Flex} from '../Layouts'

class UsersList extends React.Component {
  componentWillMount () {
    const {fetchUsers} = this.props

    fetchUsers()
  }

  render () {
    const {children, items, isFetching, params, location} = this.props
    const isNewUserForm = location.pathname === '/users/new'
    const disableInteraction = isNewUserForm || params.userId

    if (isFetching) {
      return <Loading />
    } else {
      return (
        <Wrapper dimmed={disableInteraction}>
          <Table>
            <TableRow heading>
              <TableColumn width="stretch">
                <TableCell heading title>Users</TableCell>
              </TableColumn>

              <TableColumn width="25">
                <TableCell heading>last seen</TableCell>
              </TableColumn>

              <TableColumn last width="10">
                {disableInteraction
                  ? ''
                  : (
                    <Flex justifyContent="flex-end">
                      <LinkButton to="/users/new">add new user</LinkButton>
                    </Flex>
                  )
                }
              </TableColumn>
            </TableRow>

            {isNewUserForm
              ? children
              : ''
            }

            {items.map((u, index) => {
              if (u.data._id === params.userId) {
                return (
                  <div key={index}>
                    {children}
                  </div>
                )
              } else {
                return (
                  <UsersListItem key={index}
                    user={u}
                    disableInteraction={disableInteraction} />
                )
              }
            })}
          </Table>
        </Wrapper>
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
