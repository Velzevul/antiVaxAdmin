import React from 'react'
import {connect} from 'react-redux'

import {ItemForm, ItemFormBody, ItemFormHeader} from '../ItemForm'
import {Block, Flex, ListInline, ListInlineItem} from '../Layouts'
import {Button, Input, Checkbox, Editor, Select} from '../UI'
import {createArticle} from '../../store/articleActions'
import Title from '../Title'
import {attachments, isSection, getCurrentSection} from '../../config'

class ArticleCreate extends React.Component {
  constructor (props) {
    super(props)

    this.save = this.save.bind(this)
    this.change = this.change.bind(this)
    this.currentSection = getCurrentSection(this.props.params.sectionId)

    this.state = {
      data: {
        title: '',
        url: '',
        content: '',
        isPublished: false,
        attachment: ''
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
    const payload = Object.assign({}, this.state.data, {
      type: this.currentSection
    })

    dispatch(createArticle(payload))
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

    let typeSpecificForm = ''
    if (isSection(this.currentSection.id)) {
      typeSpecificForm = (
        <Select options={attachments}
          onChange={(v) => this.change('attachment', v)}
          value={this.state.data.attachment}
          label="Attachment:" />
      )
    }

    return (
      <ItemForm>
        <ItemFormHeader>
          <Flex justifyContent="space-between">
            <Title label={`New ${this.currentSection.label} page`} />

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
                  to={this.currentSection.id}>Cancel</Button>
              </ListInlineItem>
            </ListInline>
          </Flex>
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
  state => {
    return {
      item: state.articles.newArticle
    }
  }
)(ArticleCreate)
