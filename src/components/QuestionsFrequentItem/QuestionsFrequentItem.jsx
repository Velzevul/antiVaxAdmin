import React from 'react'
import {connect} from 'react-redux'

import styles from './QuestionsFrequentItem.css'
import {Block, Flex, ListInline, ListInlineItem} from '../Layouts'
import {Button, Badge, Input, Checkbox, Editor} from '../UI'
import {updateFaq, markFaqDirty} from '../../store/faqsActions'

class QuestionsFrequentItem extends React.Component {
  constructor (props) {
    super(props)

    this.save = this.save.bind(this)
    this.changeTitle = this.changeTitle.bind(this)
    this.changeContent = this.changeContent.bind(this)
    this.changePublished = this.changePublished.bind(this)

    this.state = {
      isDirty: this.props.item.data.isDirty,
      isPublished: this.props.item.data.isPublished,
      title: this.props.item.data.title,
      titleError: null,
      content: this.props.item.data.content,
      contentError: null
    }
  }

  componentWillReceiveProps (newProps) {
    const {errors, isDirty} = newProps.item

    let newState = {
      isDirty
    }

    if (errors) {
      newState.titleError = errors.title
      newState.contentError = errors.content
    }

    this.setState(newState)
  }

  save () {
    const {dispatch} = this.props
    const payload = {
      title: this.state.title,
      isPublished: this.state.isPublished,
      content: this.state.content
    }

    dispatch(updateFaq(this.props.item.data.id, payload))
  }

  changeTitle (value) {
    const {dispatch} = this.props

    dispatch(markFaqDirty(this.props.item.data.id))

    this.setState({
      title: value,
      titleError: null
    })
  }

  changePublished (value) {
    const {dispatch} = this.props

    dispatch(markFaqDirty(this.props.item.data.id))

    this.setState({
      isPublished: value
    })
  }

  changeContent (value) {
    const {dispatch} = this.props

    dispatch(markFaqDirty(this.props.item.data.id))

    this.setState({
      content: value,
      contentError: null
    })
  }

  render () {
    const {isDirty, isPublished, title, content, titleError, contentError} = this.state
    const {isUpdating} = this.props.item

    return (
      <div className={styles.ItemForm}>
        <div className={styles.ItemForm__header}>
          <Flex justifyContent="space-between">
            {isDirty
            ? <Badge small theme="error" label="Unsaved changes" />
            : <Badge small label="All changes saved" />
            }

            <ListInline>
              <ListInlineItem>
                <Button small
                  theme="accent1"
                  disabled={isUpdating || !isDirty}
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
        </div>

        <div className={styles.ItemForm__body}>
          <Block>
            <Input label="Title"
              value={title}
              disabled={isUpdating}
              error={titleError}
              onChange={this.changeTitle} />
          </Block>

          <Block>
            <Checkbox label="Published"
              checked={isPublished}
              disabled={isUpdating}
              onChange={this.changePublished} />
          </Block>

          <Editor label="Content"
            value={content}
            error={contentError}
            disabled={isUpdating}
            onChange={this.changeContent} />
        </div>
      </div>
    )
  }
}

export default connect(
  (state, ownProps) => {
    const itemId = ownProps.params.itemId

    return {
      item: state.faqs.items ? state.faqs.items.filter(i => i.data.id === itemId)[0] : {}
    }
  }
)(QuestionsFrequentItem)
