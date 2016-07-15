import React from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

import {ItemForm, ItemFormBody, ItemFormHeader} from '../ItemForm'
import {Block, Flex, ListInline, ListInlineItem} from '../Layouts'
import {Button, Input, Checkbox, Editor} from '../UI'
import {createArticle} from '../../store/articleActions'
import Title from '../Title'

class ArticleCreate extends React.Component {
  constructor (props) {
    super(props)

    this.save = this.save.bind(this)
    this.change = this.change.bind(this)

    const sectionTypeMap = {
      'faqs': 'FAQ',
      'diseases': 'Disease Page',
      'vaccines': 'Vaccine Page',
      'about-vaccines': 'About Vaccines Page',
      'vaccine-safety': 'Vaccine Safety Page',
      'about-project': 'About Project Page',
      'additional-information': 'Additional Information Page'
    }

    this.state = {
      data: {
        title: '',
        type: {
          id: props.params.sectionId,
          label: sectionTypeMap[props.params.sectionId]
        },
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

    dispatch(createArticle(this.state.data))
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
      <ItemForm>
        <ItemFormHeader>
          <Flex justifyContent="space-between">
            <Title label={`Create new ${this.state.data.type.label}`} />

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
                  to={this.state.data.type.id}>Cancel</Button>
              </ListInlineItem>
            </ListInline>
          </Flex>
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
  state => {
    return {
      item: state.articles.newArticle
    }
  }
)(ArticleCreate)
