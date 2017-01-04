import React from 'react'
import {connect} from 'react-redux'

import {updateUser, deleteUser} from '../../store/usersActions'
import {ListInline, ListInlineItem, Block} from '../Layouts'
import {Button, IconButton, LinkButton, Input, Checkbox} from '../UI'

import styles from './EditUserForm.css'

class EditUserForm extends React.Component {
  constructor (props) {
    super(props)

    this.delete = this.delete.bind(this)
    this.save = this.save.bind(this)
    this.change = this.change.bind(this)
    this.cancel = this.cancel.bind(this)

    this.state = {
      isDirty: false,
      data: Object.assign({}, props.user.data, {
        password: ''
      }),
      errors: {}
    }
  }

  componentWillReceiveProps (newProps) {
    const {errors, data, isUpdating} = newProps.user

    if (!isUpdating) {
      let newState = {}

      if (Object.keys(errors).length === 0 && errors.constructor === Object) {
        newState = {
          isDirty: false,
          data: Object.assign({}, data, {
            password: ''
          }),
          errors: {}
        }
      } else {
        newState = {
          errors: Object.assign({}, errors)
        }
      }

      this.setState(newState)
    }
  }

  save () {
    const {user: {data: {_id: id}}, updateUser} = this.props
    const payload = Object.assign(this.state.data)

    if (!payload.password) {
      delete payload.password
    }

    updateUser(id, payload)
  }

  cancel () {
    const {user: {data: user}} = this.props

    this.setState({
      isDirty: false,
      data: Object.assign({}, user, {
        password: ''
      }),
      errors: {}
    })
  }

  change (prop, value) {
    const newData = {
      [prop]: value
    }
    const newErrors = {
      [prop]: null
    }

    this.setState({
      isDirty: true,
      data: Object.assign({}, this.state.data, newData),
      errors: Object.assign({}, this.state.errors, newErrors)
    })
  }

  delete () {
    const {deleteUser, user: {data: {_id: id}}} = this.props

    deleteUser(id)
  }

  render () {
    const {isUpdating} = this.props.user

    let actions = (
      <ListInline>
        <ListInlineItem>
          <Button disabled>All Saved</Button>
        </ListInlineItem>

        <ListInlineItem>
          <LinkButton disabled={isUpdating}
            color="blue"
            to="/users/">Close</LinkButton>
        </ListInlineItem>
      </ListInline>
    )
    if (this.state.isDirty) {
      actions = (
        <ListInline>
          <ListInlineItem>
            <Button disabled={isUpdating}
              onClick={this.save}>
              Save Changes
            </Button>
          </ListInlineItem>

          <ListInlineItem>
            <LinkButton disabled={isUpdating}
              color="red"
              to="/users/">Discard Changes</LinkButton>
          </ListInlineItem>
        </ListInline>
      )
    }

    return (
      <div className={styles.EditUserForm}>
        <div className={styles.EditUserForm__body}>
          <Block n={1}>
            <Input label="Full Name"
              value={this.state.data.name}
              error={this.state.errors.name}
              disabled={isUpdating}
              onChange={value => this.change('name', value)} />
          </Block>

          <Block n={1}>
            <Input label="Email"
              value={this.state.data.email}
              error={this.state.errors.email}
              disabled={isUpdating}
              onChange={value => this.change('email', value)} />
          </Block>

          <Block n={1}>
            <Input label="Password"
              value={this.state.data.password}
              error={this.state.errors.password}
              disabled={isUpdating}
              onChange={value => this.change('password', value)} />
          </Block>

          <Block n={1}>
            <Checkbox label="Enabled"
              checked={this.state.data.isEnabled}
              disabled={isUpdating}
              onChange={value => this.change('isEnabled', value)} />
          </Block>

          <Checkbox label="Admin"
            checked={this.state.data.admin}
            disabled={isUpdating}
            onChange={value => this.change('admin', value)} />
        </div>

        <div className={styles.EditUserForm__footer}>
          {actions}

          <div>
            <IconButton type="delete"
              disabled={isUpdating}
              onClick={this.delete} />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  (state, ownProps) => {
    const {params: {userId}} = ownProps

    return {
      user: state.users
        ? state.users.items.find(i => i.data._id === userId)
        : {data: {}, isUpdating: true}
    }
  },
  dispatch => {
    return {
      deleteUser: (id) => {
        dispatch(deleteUser(id))
      },
      updateUser: (id, data) => {
        dispatch(updateUser(id, data))
      }
    }
  }
)(EditUserForm)
