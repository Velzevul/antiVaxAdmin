import React from 'react'
import {connect} from 'react-redux'

import {updateArticle, deleteArticle} from '../../store/articleActions'
import {Flex, ListInline, ListInlineItem, Block} from '../Layouts'
import {Button, IconButton, LinkButton, Input, Checkbox, Editor} from '../UI'
import {Form, FormBody, FormHeader, FormFooter} from '../Form'
import Comments from '../Comments'

class EditArticleForm extends React.Component {
  constructor (props) {
    super(props)

    this.delete = this.delete.bind(this)
    this.save = this.save.bind(this)
    this.change = this.change.bind(this)
    this.deleteComment = this.deleteComment.bind(this)
    this.deleteReply = this.deleteReply.bind(this)

    this.state = {
      isDirty: false,
      data: Object.assign({}, props.article.data),
      errors: {}
    }
  }

  componentWillReceiveProps (newProps) {
    const {article: {errors, data, isUpdating}} = newProps

    if (!isUpdating) {
      let newState = {}

      if (Object.keys(errors).length === 0 && errors.constructor === Object) {
        newState = {
          isDirty: false,
          data: Object.assign({}, data),
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
    const {article: {data: {_id: id}}, updateArticle} = this.props
    const payload = Object.assign(this.state.data)

    updateArticle(id, payload)
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
    const {deleteArticle, article} = this.props

    deleteArticle(article.data._id)
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
    const comment = this.state.data.comments.find(c => c._id === commentId)
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
    const {params: {isUpdating}, params} = this.props

    let actions = ''
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
              to={`/sections/${params.sectionId}`}>Discard Changes</LinkButton>
          </ListInlineItem>
        </ListInline>
      )
    } else {
      actions = (
        <ListInline>
          <ListInlineItem>
            <Button disabled>All Saved</Button>
          </ListInlineItem>

          <ListInlineItem>
            <LinkButton disabled={isUpdating}
              to={`/sections/${params.sectionId}`}>Close</LinkButton>
          </ListInlineItem>
        </ListInline>
      )
    }

    let formTitle = ''
    switch (this.state.data.articleType) {
      case 'article':
        formTitle = 'Edit Article'
        break
      case 'blogpost':
        formTitle = 'Edit Blogpost'
        break
      case 'heading':
        formTitle = 'Edit Heading'
        break
      default:
        console.error(`unexpected article type ${this.state.data.articleType}`)
    }

    return (
      <Form>
        <FormHeader>
          {formTitle}
        </FormHeader>

        <FormBody>
          <Block>
            <Input label="Title"
              value={this.state.data.title}
              error={this.state.errors.title}
              disabled={isUpdating}
              onChange={value => this.change('title', value)} />
          </Block>

          {this.state.data.articleType !== 'heading'
            ? (
              <Block>
                <Input label="url"
                  value={this.state.data.url}
                  error={this.state.errors.url}
                  disabled={isUpdating}
                  onChange={value => this.change('url', value)} />
              </Block>
            )
            : ''
          }

          <Block>
            <Checkbox label="Published:"
              checked={this.state.data.isPublished}
              disabled={isUpdating}
              onChange={value => this.change('isPublished', value)} />
          </Block>

          {this.state.data.articleType === 'article'
            ? (
              <Block>
                <Checkbox label="Featured:"
                  checked={this.state.data.isFrequent}
                  disabled={isUpdating}
                  onChange={value => this.change('isFrequent', value)} />
              </Block>
            )
            : ''
          }

          {this.state.data.articleType === 'blogpost'
            ? (
              <Block>
                <Editor
                  label="Preview:"
                  value={this.state.data.snippet}
                  error={this.state.errors.snippet}
                  disabled={isUpdating}
                  onChange={value => this.change('snippet', value)} />
              </Block>
            )
            : ''
          }

          {this.state.data.articleType !== 'heading'
            ? (
              <Block>
                <Editor
                  label="Content:"
                  value={this.state.data.content}
                  error={this.state.errors.content}
                  disabled={isUpdating}
                  onChange={value => this.change('content', value)} />
              </Block>
            )
            : ''
          }

          <Comments items={this.state.data.comments} onDeleteComment={this.deleteComment} onDeleteReply={this.deleteReply} />
        </FormBody>

        <FormFooter>
          <Flex justifyContent="space-between">
            {actions}

            <div>
              <IconButton type="delete"
                disabled={isUpdating}
                onClick={this.delete} />
            </div>
          </Flex>
        </FormFooter>
      </Form>
    )
  }
}

export default connect(
  (state, ownProps) => {
    const {params} = ownProps

    return {
      article: state.articles.items.find(a => a.data._id === params.articleId)
    }
  },
  (dispatch, ownProps) => {
    const {params} = ownProps
    const backlink = `/sections/${params.sectionId}`

    return {
      deleteArticle: (id) => {
        dispatch(deleteArticle(id, backlink))
      },
      updateArticle: (id, data) => {
        dispatch(updateArticle(id, data, backlink))
      }
    }
  }
)(EditArticleForm)
