import React from 'react'
import {connect} from 'react-redux'

import {createSection} from '../../store/sectionsActions'
import {Block, ListInline, ListInlineItem} from '../Layouts'
import {Button, LinkButton, Input, Select} from '../UI'
import {Form, FormBody, FormHeader, FormFooter} from '../Form'

class NewSectionForm extends React.Component {
  constructor (props) {
    super(props)

    this.save = this.save.bind(this)
    this.change = this.change.bind(this)

    this.state = {
      data: {
        title: '',
        url: '',
        sectionType: 'articles',
        parent: props.parentSection.data._id
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
    const {createSection} = this.props

    createSection(this.state.data)
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
    const {item: {isUpdating}, parentSection, params} = this.props

    let sectionTypes = []
    if (parentSection.data.meta) {
      sectionTypes = [
        {
          id: 'articles',
          label: 'List of articles'
        },
        {
          id: 'parent',
          label: 'Parent'
        },
        {
          id: 'custom',
          label: 'Custom page'
        },
        {
          id: 'blogposts',
          label: 'List of blog posts'
        }
      ]
    } else {
      sectionTypes = [
        {
          id: 'articles',
          label: 'List of articles'
        },
        {
          id: 'blogposts',
          label: 'list of blog posts'
        }
      ]
    }

    return (
      <Form>
        <FormHeader>Add new section</FormHeader>

        <FormBody>
          <Block n={1}>
            <Input label="Title"
              value={this.state.data.title}
              error={this.state.errors.title}
              disabled={isUpdating}
              onChange={value => this.change('title', value)} />
          </Block>

          <Input label="url"
            value={this.state.data.url}
            error={this.state.errors.url}
            disabled={isUpdating}
            onChange={value => this.change('url', value)} />
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
                to={`/${params.metaSectionUrl}/`}>Cancel</LinkButton>
            </ListInlineItem>
          </ListInline>
        </FormFooter>
      </Form>
    )
  }
}

export default connect(
  (state, ownProps) => {
    const {location: {query: {parentId}}} = ownProps
    const parentSection = state.sections.items.find(s => s.data._id === parentId)

    return {
      item: state.sections.newSection,
      parentSection
    }
  },
  (dispatch, ownProps) => {
    const {params} = ownProps

    return {
      createSection: (data) => {
        dispatch(createSection(data, `/${params.metaSectionUrl}`))
      }
    }
  }
)(NewSectionForm)
