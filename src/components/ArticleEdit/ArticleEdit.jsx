import React from 'react'
import {connect} from 'react-redux'

import {Block, Flex, ListInline, ListInlineItem} from '../Layouts'
import {Button, Input, Checkbox, Editor, Select} from '../UI'
import {updateArticle} from '../../store/articleActions'
import {ItemForm, ItemFormHeader, ItemFormBody} from '../ItemForm'
import Title from '../Title'
import {categories, isSection, isBlogpost} from '../../config'
import Comments from '../Comments'

class ArticleEdit extends React.Component {
  constructor (props) {
    super(props)

    this.save = this.save.bind(this)
    this.change = this.change.bind(this)
    this.deleteComment = this.deleteComment.bind(this)
    this.deleteReply = this.deleteReply.bind(this)
    this.currentSection = props.item.data.type

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

    dispatch(updateArticle(this.props.item.data._id, this.state.data))
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

  deleteComment (id) {
    const newComments = this.state.data.comments.map(c => {
      if (c._id === id) {
        return Object.assign({}, c, {
          isDeleted: !c.isDeleted
        })
      } else {
        return c
      }
    })

    this.setState({
      isDirty: true,
      data: Object.assign({}, this.state.data, {
        comments: newComments
      })
    })
  }

  deleteReply (id, commentId) {
    const comment = this.state.data.comments.filter(c => c._id === commentId)[0]
    const newReplies = comment.replies.map(r => {
      if (r._id === id) {
        return Object.assign({}, r, {
          isDeleted: !r.isDeleted
        })
      } else {
        return r
      }
    })

    this.setState({
      isDirty: true,
      data: Object.assign({}, this.state.data, {
        comments: this.state.data.comments.map(c => {
          if (c._id === commentId) {
            return Object.assign({}, c, {
              replies: newReplies
            })
          } else {
            return c
          }
        })
      })
    })
  }

  render () {
    const {isUpdating} = this.props.item

    let typeSpecificForm = ''
    if (isSection(this.currentSection.id)) {
      typeSpecificForm = (
        <Select options={categories}
          onChange={(v) => this.change('category', v)}
          value={this.state.data.category}
          label="Category:" />
      )
    } else if (isBlogpost(this.currentSection.id) && this.state.data.comments.length > 0) {
      typeSpecificForm = (
        <Comments items={this.state.data.comments} onDeleteComment={this.deleteComment} onDeleteReply={this.deleteReply} />
      )
    }

    let header = ''
    if (this.state.isDirty) {
      header = (
        <Flex justifyContent="space-between">
          <Title label="Unsaved Changes" theme="error" />

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
                to={this.props.item.data.type.id}>Cancel</Button>
            </ListInlineItem>
          </ListInline>
        </Flex>
      )
    } else {
      header = (
        <Flex justifyContent="space-between">
          <Title label="All Saved" theme="success" />

          <Button
            inverse
            theme="accent1"
            disabled={isUpdating}
            to={this.props.item.data.type.id}>Close</Button>
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
            <Input label="Title:"
              value={this.state.data.title}
              error={this.state.errors.title}
              disabled={isUpdating}
              onChange={value => this.change('title', value)} />
          </Block>

          <Block n={1}>
            <Input label="URL:"
              value={this.state.data.url}
              error={this.state.errors.url}
              disabled={isUpdating}
              onChange={value => this.change('url', value)} />
          </Block>

          <Block n={1}>
            <Checkbox label="Published:"
              checked={this.state.data.isPublished}
              disabled={isUpdating}
              onChange={value => this.change('isPublished', value)} />
          </Block>

          <Block n={typeSpecificForm ? 3 : 0}>
            <Editor value={this.state.data.content}
              error={this.state.errors.content}
              disabled={isUpdating}
              onChange={value => this.change('content', value)} />
          </Block>

          {typeSpecificForm}
        </ItemFormBody>
      </ItemForm>
    )
  }
}

export default connect(
  (state, ownProps) => {
    const itemId = ownProps.params.itemId

    return {
      item: state.articles.items ? state.articles.items.filter(i => i.data._id === itemId)[0] : {data: {}, errors: {}}
    }
  }
)(ArticleEdit)
