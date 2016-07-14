import React from 'react'
import {connect} from 'react-redux'

import {ItemForm, ItemFormBody, ItemFormHeader} from '../ItemForm'
import {Block, Flex, ListInline, ListInlineItem} from '../Layouts'
import {Button, Input, Checkbox, Editor} from '../UI'
import {updateBlogpost} from '../../store/blogpostsActions'
import Title from '../Title'
import Comments from '../Comments'

class BlogpostsEdit extends React.Component {
  constructor (props) {
    super(props)

    this.save = this.save.bind(this)
    this.change = this.change.bind(this)
    this.deleteComment = this.deleteComment.bind(this)
    this.deleteReply = this.deleteReply.bind(this)

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

    dispatch(updateBlogpost(this.props.item.data._id, this.state.data))
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
                to="blogposts">Cancel</Button>
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
            to="blogposts">Close</Button>
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

          <Block n={2}>
            <Editor value={this.state.data.content}
              error={this.state.errors.content}
              disabled={isUpdating}
              onChange={value => this.change('content', value)} />
          </Block>

          <Comments items={this.state.data.comments || []} onDeleteComment={this.deleteComment} onDeleteReply={this.deleteReply} />
        </ItemFormBody>
      </ItemForm>
    )
  }
}

export default connect(
  (state, ownProps) => {
    const itemId = ownProps.params.itemId

    return {
      item: state.blogposts.items ? state.blogposts.items.filter(i => i.data._id === itemId)[0] : {data: {}, errors: {}}
    }
  }
)(BlogpostsEdit)
