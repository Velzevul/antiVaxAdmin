import React from 'react'
import {connect} from 'react-redux'

import {fetchUsers} from '../../store/usersActions'
import Directory from '../Directory'
import UsersDirectoryItem from '../UsersDirectoryItem'
import {Button} from '../UI'
import Loading from '../Loading'

class UsersDirectory extends React.Component {
  componentWillMount () {
    const {dispatch} = this.props

    dispatch(fetchUsers())
  }

  render () {
    const {children, isFetching, items} = this.props

    if (isFetching) {
      return <Loading />
    } else {
      const users = items.map(i =>
        <UsersDirectoryItem key={i.data._id} item={i} />
      )

      const actions = (
        <div>
          <Button
            to={`${PUBLIC_PATH}/users/new`}
            theme="accent1">Create new</Button>
        </div>
      )

      return (
        <Directory title="Users" items={users} actions={actions} children={children} />
      )
    }
  }
}

export default connect(
  state => {
    return {
      isFetching: state.users.isFetching,
      items: state.users.items
    }
  }
)(UsersDirectory)
