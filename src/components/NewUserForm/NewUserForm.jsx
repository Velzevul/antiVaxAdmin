import React from 'react'
import {connect} from 'react-redux'

import {createUser} from '../../store/usersActions'
import {ListInline, ListInlineItem, Block} from '../Layouts'
import {Button, LinkButton, Input, Checkbox} from '../UI'

import styles from './NewUserForm.css'

class NewUserForm extends React.Component {
  constructor (props) {
    super(props)

    this.save = this.save.bind(this)
    this.change = this.change.bind(this)

    this.state = {
      data: {
        name: '',
        email: '',
        password: '',
        admin: '',
        isEnabled: false
      },
      errors: {}
    }
  }

  componentWillReceiveProps (newProps) {
    const {errors} = newProps.item

    this.setState({
      errors: Object.assign({}, errors)
    })
  }

  save () {
    const {createUser} = this.props

    createUser(this.state.data)
  }

  change (prop, value) {
    const newData = {
      [prop]: value
    }
    const newErrors = {
      [prop]: null
    }

    this.setState({
      data: Object.assign({}, this.state.data, newData),
      errors: Object.assign({}, this.state.errors, newErrors)
    })
  }

  render () {
    const {isUpdating} = this.props.item

    return (
      <div className={styles.NewUserForm}>
        <div className={styles.NewUserForm__body}>
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

        <div className={styles.NewUserForm__footer}>
          <ListInline>
            <ListInlineItem>
              <Button disabled={isUpdating}
                onClick={this.save}>
                Create
              </Button>
            </ListInlineItem>

            <ListInlineItem>
              <LinkButton disabled={isUpdating}
                color="red"
                to="/users/">Cancel</LinkButton>
            </ListInlineItem>
          </ListInline>
        </div>
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      item: state.users
        ? state.users.newUser
        : {data: {}, isUpdating: true, errors: {}}
    }
  },
  dispatch => {
    return {
      createUser: (id, data) => {
        dispatch(createUser(id, data))
      }
    }
  }
)(NewUserForm)
