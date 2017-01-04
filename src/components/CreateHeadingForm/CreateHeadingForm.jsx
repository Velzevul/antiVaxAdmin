import React from 'react'
import {connect} from 'react-redux'

import {createArticle} from '../../store/articleActions'
import {Block, ListInline, ListInlineItem} from '../Layouts'
import {Button, LinkButton, Input, Checkbox, Editor} from '../UI'
import {Form, FormBody, FormHeader, FormFooter} from '../Form'

class CreateHeadingForm extends React.Component {
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
        articleType: 'heading',
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
    const {item: {isUpdating}, params} = this.props

    return (
      <Form>
        <FormHeader>Add new heading</FormHeader>

        <FormBody>
          <Block>
            <Input label="Title"
              value={this.state.data.title}
              error={this.state.errors.title}
              disabled={isUpdating}
              onChange={value => this.change('title', value)} />
          </Block>

          <Block>
            <Checkbox label="Published:"
              checked={this.state.data.isPublished}
              disabled={isUpdating}
              onChange={value => this.change('isPublished', value)} />
          </Block>
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
)(CreateHeadingForm)
