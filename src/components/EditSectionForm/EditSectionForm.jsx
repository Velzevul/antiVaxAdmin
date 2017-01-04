import React from 'react'
import {connect} from 'react-redux'

import {updateSection, deleteSection} from '../../store/sectionsActions'
import {Flex, ListInline, ListInlineItem, Block} from '../Layouts'
import {Button, IconButton, LinkButton, Input, Select} from '../UI'
import {Form, FormBody, FormHeader, FormFooter} from '../Form'

class EditSectionForm extends React.Component {
  constructor (props) {
    super(props)

    this.delete = this.delete.bind(this)
    this.save = this.save.bind(this)
    this.change = this.change.bind(this)

    this.state = {
      isDirty: false,
      data: Object.assign({}, props.section.data),
      errors: {}
    }
  }

  componentWillReceiveProps (newProps) {
    const {section: {errors, data, isUpdating}} = newProps

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
    const {section: {data: {_id: id}}, updateSection} = this.props
    const payload = Object.assign(this.state.data)

    updateSection(id, payload)
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
    const {deleteSection, section} = this.props

    deleteSection(section.data._id, section.data.children)
  }

  render () {
    const {section: {isUpdating}, parentSection, params} = this.props

    let sectionTypes = []
    if (parentSection.data.sectionType === 'meta') {
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

    let actions = (
      <ListInline>
        <ListInlineItem>
          <Button disabled>All Saved</Button>
        </ListInlineItem>

        <ListInlineItem>
          <LinkButton disabled={isUpdating}
            to={`/sections/${params.navigationType}/${params.sectionId}`}>Close</LinkButton>
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
              to={`/sections/${params.navigationType}/${params.sectionId}`}>Discard Changes</LinkButton>
          </ListInlineItem>
        </ListInline>
      )
    }

    return (
      <Form>
        <FormHeader>Edit section</FormHeader>

        <FormBody>
          <Block n={1}>
            <Input label="Title"
              value={this.state.data.title}
              error={this.state.errors.title}
              disabled={isUpdating}
              onChange={value => this.change('title', value)} />
          </Block>

          <Block n={1}>
            <Input label="url"
              value={this.state.data.url}
              error={this.state.errors.url}
              disabled={isUpdating}
              onChange={value => this.change('url', value)} />
          </Block>

          <Select label="Type"
            value={this.state.data.sectionType}
            options={sectionTypes}
            disabled={isUpdating}
            onChange={value => this.change('sectionType', value)} />
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
    const {location: {query: {sectionId}}, params: {sectionId: parentSectionId}} = ownProps
    const section = state.sections.items.find(s => s.data._id === sectionId)
    const parentSection = state.sections.items.find(s => s.data._id === parentSectionId)

    return {
      section,
      parentSection
    }
  },
  (dispatch, ownProps) => {
    const {params: {navigationType, sectionId}} = ownProps
    const backlink = `/sections/${navigationType}/${sectionId}`

    return {
      deleteSection: (id, children) => {
        dispatch(deleteSection(id, children, backlink))
      },
      updateSection: (id, data) => {
        dispatch(updateSection(id, data, backlink))
      }
    }
  }
)(EditSectionForm)
