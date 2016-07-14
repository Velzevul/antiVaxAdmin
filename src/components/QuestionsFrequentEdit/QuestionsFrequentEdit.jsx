import React from 'react'
import {connect} from 'react-redux'

import {Block, Flex, ListInline, ListInlineItem} from '../Layouts'
import {Button, Input, Checkbox, Editor} from '../UI'
import {updateFaq} from '../../store/faqsActions'
import {ItemForm, ItemFormHeader, ItemFormBody} from '../ItemForm'
import Title from '../Title'

class QuestionsFrequentEdit extends React.Component {
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

    dispatch(updateFaq(this.props.item.data._id, this.state.data))
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
                to="questions/frequent">Cancel</Button>
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
            to="questions/frequent">Close</Button>
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
            <Input label="Title"
              value={this.state.data.title}
              error={this.state.errors.title}
              disabled={isUpdating}
              onChange={value => this.change('title', value)} />
          </Block>

          <Block n={1}>
            <Input label="URL"
              value={this.state.data.url}
              error={this.state.errors.url}
              disabled={isUpdating}
              onChange={value => this.change('url', value)} />
          </Block>

          <Block n={1}>
            <Checkbox label="Published"
              checked={this.state.data.isPublished}
              disabled={isUpdating}
              onChange={value => this.change('isPublished', value)} />
          </Block>

          <Editor value={this.state.data.content}
            error={this.state.errors.content}
            disabled={isUpdating}
            onChange={value => this.change('content', value)} />
        </ItemFormBody>
      </ItemForm>
    )
  }
}

export default connect(
  (state, ownProps) => {
    const itemId = ownProps.params.itemId

    return {
      item: state.faqs.items ? state.faqs.items.filter(i => i.data._id === itemId)[0] : {data: {}, errors: {}}
    }
  }
)(QuestionsFrequentEdit)
