import React from 'react'
import {connect} from 'react-redux'

import {ItemForm, ItemFormBody, ItemFormHeader} from '../ItemForm'
import {Block, Flex, ListInline, ListInlineItem} from '../Layouts'
import {Button, Input, Checkbox} from '../UI'
import {createUser} from '../../store/usersActions'
import Title from '../Title'

class UsersCreate extends React.Component {
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
    const {dispatch} = this.props

    dispatch(createUser(this.state.data))
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
      <ItemForm>
        <ItemFormHeader>
          <Flex justifyContent="space-between">
            <Title label="Create User" />

            <ListInline>
              <ListInlineItem>
                <Button
                  theme="accent1"
                  disabled={isUpdating}
                  onClick={this.save}>Save</Button>
              </ListInlineItem>

              <ListInlineItem>
                <Button
                  inverse
                  theme="accent1"
                  disabled={isUpdating}
                  to="users">Cancel</Button>
              </ListInlineItem>
            </ListInline>
          </Flex>
        </ItemFormHeader>

        <ItemFormBody>
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

          <Block n={1}>
            <Checkbox label="Admin"
              checked={this.state.data.admin}
              disabled={isUpdating}
              onChange={value => this.change('admin', value)} />
          </Block>
        </ItemFormBody>
      </ItemForm>
    )
  }
}

export default connect(
  state => {
    return {
      item: state.users.newUser
    }
  }
)(UsersCreate)
