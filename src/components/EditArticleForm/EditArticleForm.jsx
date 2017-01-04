import React from 'react'
import {connect} from 'react-redux'

import {updateArticle, deleteArticle} from '../../store/articleActions'
import {Flex, ListInline, ListInlineItem, Block} from '../Layouts'
import {Button, IconButton, LinkButton, Input, Select, Checkbox, Editor} from '../UI'
import {Form, FormBody, FormHeader, FormFooter} from '../Form'

class EditArticleForm extends React.Component {
  constructor (props) {
    super(props)

    this.delete = this.delete.bind(this)
    this.save = this.save.bind(this)
    this.change = this.change.bind(this)

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

  render () {
    const {params: {isUpdating}, params} = this.props
    const articleTypes = [
      {
        id: 'article',
        label: 'Article'
      },
      {
        id: 'heading',
        label: 'Heading'
      }
    ]

    let body = ''
    if (this.state.data.articleType === 'article') {
      body = (
        <div>
          <Block>
            <Input label="Title"
              value={this.state.data.title}
              error={this.state.errors.title}
              disabled={isUpdating}
              onChange={value => this.change('title', value)} />
          </Block>

          <Block>
            <Input label="url"
              value={this.state.data.url}
              error={this.state.errors.url}
              disabled={isUpdating}
              onChange={value => this.change('url', value)} />
          </Block>

          <Block>
            <Checkbox label="Published:"
              checked={this.state.data.isPublished}
              disabled={isUpdating}
              onChange={value => this.change('isPublished', value)} />
          </Block>

          <Block>
            <Checkbox label="Featured:"
              checked={this.state.data.isFrequent}
              disabled={isUpdating}
              onChange={value => this.change('isFrequent', value)} />
          </Block>

          <Editor
            label="Content:"
            value={this.state.data.content}
            error={this.state.errors.content}
            disabled={isUpdating}
            onChange={value => this.change('content', value)} />
        </div>
      )
    } else {
      body = (
        <div>
          <Block>
            <Input label="Title"
              value={this.state.data.title}
              error={this.state.errors.title}
              disabled={isUpdating}
              onChange={value => this.change('title', value)} />
          </Block>

          <Checkbox label="Published:"
            checked={this.state.data.isPublished}
            disabled={isUpdating}
            onChange={value => this.change('isPublished', value)} />
        </div>
      )
    }

    let actions = (
      <ListInline>
        <ListInlineItem>
          <Button disabled>All Saved</Button>
        </ListInlineItem>

        <ListInlineItem>
          <LinkButton disabled={isUpdating}
            to={`/sections/${params.navigationType}/${params.sectionId}/articles/`}>Close</LinkButton>
        </ListInlineItem>
      </ListInline>
    )
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
              to={`/sections/${params.navigationType}/${params.sectionId}/articles/`}>Discard Changes</LinkButton>
          </ListInlineItem>
        </ListInline>
      )
    }

    return (
      <Form>
        <FormHeader>
          {this.state.data.articleType === 'article'
            ? 'Edit article'
            : 'Edit heading'
          }
        </FormHeader>

        <FormBody>
          <Block>
            <Select label="Type"
              value={this.state.data.articleType}
              options={articleTypes}
              disabled={isUpdating}
              onChange={value => this.change('articleType', value)} />
          </Block>

          {body}
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
    const backlink = `/sections/${params.navigationType}/${params.sectionId}/articles`

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
