import React from 'react'
import {connect} from 'react-redux'

import {ItemForm, ItemFormBody, ItemFormHeader} from '../ItemForm'
import {Block, Flex, ListInline, ListInlineItem} from '../Layouts'
import {Button, Input, Checkbox} from '../UI'
import {updateUser} from '../../store/usersActions'
import Title from '../Title'

class UsersEdit extends React.Component {
  constructor (props) {
    super(props)

    this.save = this.save.bind(this)
    this.change = this.change.bind(this)

    this.state = {
      isDirty: false,
      data: Object.assign({}, props.item.data),
      errors: Object.assign({}, props.item.errors)
    }
  }

  componentWillReceiveProps (newProps) {
    const {errors, data, isUpdating} = newProps.item

    if (!isUpdating) {
      let newState = {}

      if (Object.keys(errors).length === 0 && errors.constructor === Object) {
        newState = {
          isDirty: false,
          data: data,
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
    const {dispatch} = this.props

    dispatch(updateUser(this.props.item.data._id, this.state.data))
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

  render () {
    const {isUpdating} = this.props.item

    let header = ''

    if (this.state.isDirty) {
      header = (
        <Flex justifyContent="space-between">
          <Title label="Unsaved Changes" theme="error" />

          <ListInline>
            <ListInlineItem>
              <Button small
                theme="accent1"
                disabled={isUpdating}
                onClick={this.save}>Save</Button>
            </ListInlineItem>

            <ListInlineItem>
              <Button small
                inverse
                theme="accent1"
                disabled={isUpdating}
                to="users">Cancel</Button>
            </ListInlineItem>
          </ListInline>
        </Flex>
      )
    } else {
      header = (
        <Flex justifyContent="space-between">
          <Title label="All Saved" theme="success" />

          <Button small
            inverse
            theme="accent1"
            disabled={isUpdating}
            to="users">Close</Button>
        </Flex>
      )
    }

    return (
      <ItemForm>
        <ItemFormHeader>
          {header}
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
  (state, ownProps) => {
    const itemId = ownProps.params.itemId

    return {
      item: state.users.items ? state.users.items.filter(i => i.data._id === itemId)[0] : {data: {}, errors: {}}
    }
  }
)(UsersEdit)
