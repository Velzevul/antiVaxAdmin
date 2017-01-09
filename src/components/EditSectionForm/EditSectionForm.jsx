import React from 'react'
import {connect} from 'react-redux'

import {updateSection, deleteSection} from '../../store/sectionsActions'
import {Flex, ListInline, ListInlineItem, Block} from '../Layouts'
import {Button, IconButton, LinkButton, Input} from '../UI'
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
    const {section, parentSection, params} = this.props

    let actions = (
      <ListInline>
        <ListInlineItem>
          <Button disabled>All Saved</Button>
        </ListInlineItem>

        <ListInlineItem>
          <LinkButton disabled={section.isUpdating}
            to={`/${params.metaSectionUrl}`}>Close</LinkButton>
        </ListInlineItem>
      </ListInline>
    )
    if (this.state.isDirty) {
      actions = (
        <ListInline>
          <ListInlineItem>
            <Button disabled={section.isUpdating}
              onClick={this.save}>
              Save Changes
            </Button>
          </ListInlineItem>

          <ListInlineItem>
            <LinkButton disabled={section.isUpdating}
              color="red"
              to={`/${params.metaSectionUrl}`}>Discard Changes</LinkButton>
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
              disabled={section.isUpdating}
              onChange={value => this.change('title', value)} />
          </Block>

          <Input label="url"
            value={this.state.data.url}
            error={this.state.errors.url}
            disabled={section.isUpdating}
            onChange={value => this.change('url', value)} />
        </FormBody>

        <FormFooter>
          <Flex justifyContent="space-between">
            {actions}

            <div>
              {parentSection.data.meta
                ? ''
                : (
                  <IconButton type="delete"
                    disabled={section.isUpdating}
                    onClick={this.delete} />
                )
              }
            </div>
          </Flex>
        </FormFooter>
      </Form>
    )
  }
}

export default connect(
  (state, ownProps) => {
    const {params: {sectionId}} = ownProps
    const section = state.sections.items.find(s => s.data._id === sectionId)
    const parentSection = state.sections.items.find(s => s.data._id === section.data.parent)

    return {
      section,
      parentSection
    }
  },
  (dispatch, ownProps) => {
    const {params} = ownProps
    const backlink = `/${params.metaSectionUrl}`

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
