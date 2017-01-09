import React from 'react'
import {connect} from 'react-redux'

import {createArticle} from '../../store/articleActions'
import {Block, ListInline, ListInlineItem} from '../Layouts'
import {Button, LinkButton, Input, Checkbox, Editor} from '../UI'
import {Form, FormBody, FormHeader, FormFooter} from '../Form'

class NewArticleForm extends React.Component {
  constructor (props) {
    super(props)

    this.save = this.save.bind(this)
    this.change = this.change.bind(this)

    this.state = {
      data: {
        title: '',
        url: '',
        snippet: '',
        content: '',
        articleType: '',
        isPublished: false,
        isFrequent: false,
        parent: props.params.sectionId
      },
      errors: {}
    }

    if (props.section.data.sectionType === 'blogposts') {
      this.state.data.articleType = 'blogpost'
    } else if (props.location.query.type === 'heading') {
      this.state.data.articleType = 'heading'
    } else {
      this.state.data.articleType = 'article'
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
    const {item: {isUpdating}, params} = this.props

    let title = ''
    switch (this.state.data.articleType) {
      case 'article':
        title = 'article'
        break
      case 'blogpost':
        title = 'blog post'
        break
      case 'heading':
        title = 'heading'
        break
      default:
        console.error(`unexpected article type ${this.state.data.articleType}`)
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
                to={`/${params.metaSectionUrl}/${params.sectionId}`}>Cancel</LinkButton>
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
    const section = state.sections.items.find(s => s.data._id === sectionId)

    return {
      item: state.articles.newArticle,
      section
    }
  },
  (dispatch, ownProps) => {
    const {params} = ownProps

    return {
      createArticle: (data) => {
        dispatch(createArticle(data, `/${params.metaSectionUrl}/${params.sectionId}`))
      }
    }
  }
)(NewArticleForm)
