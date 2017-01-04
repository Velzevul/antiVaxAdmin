import React from 'react'
import {connect} from 'react-redux'
import {sortable} from 'react-sortable'

import Breadcrumbs from '../Breadcrumbs'
import {updateSection} from '../../store/sectionsActions'
import SectionsListItem from '../SectionsListItem'
import Icon from '../Icon'
import {LinkButton} from '../UI'
import {ListInline, ListInlineItem} from '../Layouts'
import Wrapper from '../Wrapper'
import Table from '../Table'
import TableRow from '../TableRow'
import TableColumn from '../TableColumn'
import TableCell from '../TableCell'

const SortableListItem = sortable((props) => {
  return (
    <div {...props}>{props.children}</div>
  )
})

class SectionsList extends React.Component {
  constructor (props) {
    super(props)

    this.updateState = this.updateState.bind(this)

    this.state = {
      draggingIndex: null,
      data: {
        items: props.section.data.children
      }
    }
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      data: {
        items: newProps.section.data.children
      }
    })
  }

  updateState (obj) {
    if (obj.draggingIndex === null) {
      const {section, updateSection} = this.props

      updateSection(section.data._id, {
        children: this.state.data.items
      })
    }

    this.setState(obj)
  }

  render () {
    const {children, section, parentSection, location, params} = this.props
    let isNewSectionRoute = location.pathname === `/sections/${params.navigationType}/${params.sectionId}/new`
    let isEditSectionRoute = location.pathname === `/sections/${params.navigationType}/${params.sectionId}/edit`
    let newSectionLink = `/sections/${params.navigationType}/${params.sectionId}/new`

    const disableInteraction = isNewSectionRoute || isEditSectionRoute

    let breadcrumbs = ''
    if (parentSection) {
      let parentItems = [
        {
          label: parentSection.data.title,
          path: `/sections/${params.navigationType}/${parentSection.data._id}`
        }
      ]

      breadcrumbs = (
        <Breadcrumbs items={parentItems}
          disableInteraction={disableInteraction} />
      )
    }

    let tableHeading = ''
    if (isNewSectionRoute) {
      tableHeading = children
    } else {
      tableHeading = (
        <TableRow heading>
          <TableColumn width="stretch">
            <ListInline>
              <ListInlineItem>
                <TableCell heading title>{section.data.title}</TableCell>
              </ListInlineItem>

              {disableInteraction
                ? ''
                : (
                <ListInlineItem>
                  <LinkButton to={newSectionLink}>add new section</LinkButton>
                </ListInlineItem>
                )
              }
            </ListInline>
          </TableColumn>
        </TableRow>
      )
    }

    return (
      <Wrapper dimmed={disableInteraction}>
        <Table breadcrumbs={breadcrumbs !== ''}>
          {breadcrumbs}
          {tableHeading}

          {this.state.data.items.map((sectionId, i) => {
            if (isEditSectionRoute && sectionId === location.query.sectionId) {
              return (
                <div key={i}>
                  {children}
                </div>
              )
            } else if (disableInteraction) {
              return (
                <SectionsListItem key={i}
                  sectionId={sectionId}
                  navigationType={params.navigationType}
                  disableInteraction={disableInteraction || this.state.draggingIndex !== null} />
              )
            } else {
              return (
                <SortableListItem key={i}
                  updateState={this.updateState}
                  items={this.state.data.items}
                  draggingIndex={this.state.draggingIndex}
                  sortId={i}
                  outline="list">
                  <SectionsListItem sectionId={sectionId}
                    navigationType={params.navigationType}
                    disableInteraction={disableInteraction || this.state.draggingIndex !== null} />
                </SortableListItem>
              )
            }
          })}
        </Table>
      </Wrapper>
    )
  }
}

export default connect(
  (state, ownProps) => {
    const {params: {sectionId}} = ownProps
    const section = state.sections.items.find(s => s.data._id === sectionId)

    let parentSection = null
    if (section.data.parent) {
      parentSection = state.sections.items.find(s => s.data._id === section.data.parent)
    }

    return {
      section,
      parentSection
    }
  },
  dispatch => {
    return {
      updateSection: (id, data) => {
        dispatch(updateSection(id, data))
      }
    }
  }
)(SectionsList)
