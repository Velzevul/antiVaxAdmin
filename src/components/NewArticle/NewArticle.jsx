import React from 'react'
import {connect} from 'react-redux'

import {createArticle} from '../../store/articleActions'
import {Block, ListInline, ListInlineItem} from '../Layouts'
import {Button, LinkButton, Input, Checkbox, Editor} from '../UI'
import {Form, FormBody, FormHeader, FormFooter} from '../Form'

class newArticle extends React.Component {
  constructor (props) {
    super(props)

    this.save = this.save.bind(this)
    this.change = this.change.bind(this)

    let type = ''
    if (props.parent.data.sectionType === 'blogposts') {
      type = 'blogpost'
    } else if (props.location.query.type === 'heading') {
      type = 'heading'
    } else {
      type = 'article'
    }

    this.state = {
      data: {
        title: '',
        url: '',
        snippet: '',
        content: '',
        articleType: type,
        isPublished: false,
        isFrequent: false,
        parent: props.params.sectionId
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
    const {createArticle} = this.props

    createArticle(this.state.data)
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
    const {item: {isUpdating}, params, location, parent} = this.props

    let type = ''
    if (parent.data.sectionType === 'blogposts') {
      type = 'blogpost'
    } else if (location.query.type === 'heading') {
      type = 'heading'
    } else {
      type = 'article'
    }

    let title = ''
    if (type === 'article') {
      title = 'article'
    } else if (type === 'blogpost') {
      title = 'blog post'
    } else if (type === 'heading') {
      title = 'heading'
    }

    return (
      <Form>
        <FormHeader>Add new {title}</FormHeader>

        <FormBody>
          <Block>
            <Input label="Title"
              value={this.state.data.title}
              error={this.state.errors.title}
              disabled={isUpdating}
              onChange={value => this.change('title', value)} />
          </Block>

          {type !== 'heading'
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

          {type === 'article'
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

          {type === 'blogpost'
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

          {type !== 'heading'
            ? (
              <Editor
                label="Content:"
                value={this.state.data.content}
                error={this.state.errors.content}
                disabled={isUpdating}
                onChange={value => this.change('content', value)} />
            )
            : ''
          }
        </FormBody>

        <FormFooter>
          <ListInline>
            <ListInlineItem>
              <Button disabled={isUpdating}
                onClick={this.save}>
                Create
              </Button>
            </ListInlineItem>

            <ListInlineItem>
              <LinkButton disabled={isUpdating}
                color="red"
                to={`/sections/${params.navigationType}/${params.sectionId}/articles/`}>Cancel</LinkButton>
            </ListInlineItem>
          </ListInline>
        </FormFooter>
      </Form>
    )
  }
}

export default connect(
  (state, ownProps) => {
    const {params: {sectionId}} = ownProps
    const parent = state.sections.items.find(s => s.data._id === sectionId)

    return {
      item: state.articles.newArticle,
      parent
    }
  },
  (dispatch, ownProps) => {
    const {params} = ownProps

    return {
      createArticle: (data) => {
        dispatch(createArticle(data, `/sections/${params.navigationType}/${params.sectionId}/articles/`))
      }
    }
  }
)(newArticle)
