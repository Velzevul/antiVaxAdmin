import React from 'react'
import {connect} from 'react-redux'

import styles from './QuestionsFrequentEdit.css'
import {Block, Flex, ListInline, ListInlineItem} from '../Layouts'
import {Button, Badge, Input, Checkbox, Editor} from '../UI'
import {updateFaq, markFaqDirty} from '../../store/faqsActions'

class QuestionsFrequentEdit extends React.Component {
  constructor (props) {
    super(props)

    this.save = this.save.bind(this)
    this.change = this.change.bind(this)

    this.state = {
      data: Object.assign({}, props.item.data),
      errors: Object.assign({}, props.item.errors)
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

    dispatch(updateFaq(this.props.item.data._id, this.state.data))
  }

  change (prop, value) {
    const {dispatch} = this.props

    dispatch(markFaqDirty(this.props.item.data._id))

    this.setState({
      data: Object.assign({}, this.state.data, {
        [prop]: value
      }),
      errors: Object.assign({}, this.state.errors, {
        [prop]: null
      })
    })
  }

  render () {
    const {isUpdating, isDirty} = this.props.item
    const {data, errors} = this.state

    let header = ''

    if (isDirty) {
      header = (
        <Flex justifyContent="space-between">
          <Badge small theme="error" label="Unsaved changes" />

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
          <Badge small label="All changes saved" />

          <Button small
            inverse
            theme="accent1"
            disabled={isUpdating}
            to="questions/frequent">Close</Button>
        </Flex>
      )
    }

    return (
      <div className={styles.ItemForm}>
        <div className={styles.ItemForm__header}>
          {header}
        </div>

        <div className={styles.ItemForm__body}>
          <Block>
            <Input label="Title"
              value={data.title}
              error={errors.title}
              disabled={isUpdating}
              onChange={value => this.change('title', value)} />
          </Block>

          <Block>
            <Input label="URL"
              value={data.url}
              error={errors.url}
              disabled={isUpdating}
              onChange={value => this.change('url', value)} />
          </Block>

          <Block>
            <Checkbox label="Published"
              checked={data.isPublished}
              disabled={isUpdating}
              onChange={value => this.change('isPublished', value)} />
          </Block>

          <Editor label="Content"
            value={data.content}
            error={errors.content}
            disabled={isUpdating}
            onChange={value => this.change('content', value)} />
        </div>
      </div>
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
