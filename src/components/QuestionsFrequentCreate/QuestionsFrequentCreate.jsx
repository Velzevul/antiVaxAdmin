import React from 'react'
import {connect} from 'react-redux'

import styles from './QuestionsFrequentCreate.css'
import {Block, Flex, ListInline, ListInlineItem} from '../Layouts'
import {Button, Input, Checkbox, Editor} from '../UI'
import {createFaq} from '../../store/faqsActions'
import Title from '../Title'

class QuestionsFrequentCreate extends React.Component {
  constructor (props) {
    super(props)

    this.save = this.save.bind(this)
    this.change = this.change.bind(this)

    this.state = {
      data: {
        title: '',
        url: '',
        content: '',
        isPublished: false
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

    dispatch(createFaq(this.state.data))
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
      <div className={styles.ItemForm}>
        <div className={styles.ItemForm__header}>
          <Flex justifyContent="space-between">
            <Title label="Create Frequent Question" />

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
        </div>

        <div className={styles.ItemForm__body}>
          <Block n={1.5}>
            <Input label="Title"
              value={this.state.data.title}
              error={this.state.errors.title}
              disabled={isUpdating}
              onChange={value => this.change('title', value)} />
          </Block>

          <Block n={1.5}>
            <Input label="URL"
              value={this.state.data.url}
              error={this.state.errors.url}
              disabled={isUpdating}
              onChange={value => this.change('url', value)} />
          </Block>

          <Block n={1.5}>
            <Checkbox label="Published"
              checked={this.state.data.isPublished}
              disabled={isUpdating}
              onChange={value => this.change('isPublished', value)} />
          </Block>

          <Editor value={this.state.data.content}
            error={this.state.errors.content}
            disabled={isUpdating}
            onChange={value => this.change('content', value)} />
        </div>
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      item: state.faqs.newFaq
    }
  }
)(QuestionsFrequentCreate)
