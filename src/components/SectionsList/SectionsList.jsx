import React from 'react'
import {connect} from 'react-redux'
import {sortable} from 'react-sortable'

import {updateSection} from '../../store/sectionsActions'
import SectionsListItem from '../SectionsListItem'
import {LinkButton} from '../UI'
import SubSectionsList from '../SubSectionsList'
import Wrapper from '../Wrapper'
import Table from '../Table'
import TableRow from '../TableRow'
import TableColumn from '../TableColumn'
import TableCell from '../TableCell'
import {Flex} from '../Layouts'

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
        items: props.metaSection.data.children
      }
    }
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      data: {
        items: newProps.metaSection.data.children
      }
    })
  }

  updateState (obj) {
    if (obj.draggingIndex === null) {
      const {metaSection, updateSection} = this.props

      updateSection(metaSection.data._id, {
        children: this.state.data.items
      })
    }

    this.setState(obj)
  }

  render () {
    const {children, metaSection, sections, location, params} = this.props

    const isNewSectionRoute = location.pathname === `/${params.metaSectionUrl}/new`
    const isEditSectionRoute = location.pathname === `/${params.metaSectionUrl}/${params.sectionId}/edit`
    const disableInteraction = isNewSectionRoute || isEditSectionRoute

    return (
      <Wrapper dimmed={disableInteraction}>
        <Table>
          <TableRow heading>
            <TableColumn width="stretch">
              <TableCell heading title>{metaSection.data.title}</TableCell>
            </TableColumn>

            <TableColumn width="20">
              <TableCell heading>url</TableCell>
            </TableColumn>

            <TableColumn last
              width="15" />
          </TableRow>

          {isNewSectionRoute && location.query.parentId === metaSection.data._id
            ? children
            : ''
          }

          {this.state.data.items.map((sectionId, i) => {
            if (isEditSectionRoute && sectionId === params.sectionId) {
              return (
                <div key={i}>
                  {children}
                </div>
              )
            } else {
              const section = sections.find(s => s.data._id === sectionId)
              const subsections = sections.filter(s => section.data.children.indexOf(s.data._id) !== -1)

              let subsectionsList = (
                <SubSectionsList section={section}
                  subsections={subsections}
                  children={children}
                  params={params}
                  location={location} />
              )

              if (disableInteraction) {
                return (
                  <div key={i}>
                    <SectionsListItem
                      params={params}
                      section={section}
                      parent={metaSection}
                      disableInteraction={disableInteraction || this.state.draggingIndex !== null} />

                    {subsectionsList}
                  </div>
                )
              } else {
                return (
                  <SortableListItem key={i}
                    updateState={this.updateState}
                    items={this.state.data.items}
                    draggingIndex={this.state.draggingIndex}
                    sortId={i}
                    outline="list">
                    <SectionsListItem
                      params={params}
                      section={section}
                      parent={metaSection}
                      disableInteraction={disableInteraction || this.state.draggingIndex !== null} />

                    {subsectionsList}
                  </SortableListItem>
                )
              }
            }
          })}
        </Table>
      </Wrapper>
    )
  }
}

export default connect(
  (state, ownProps) => {
    const {params} = ownProps
    const metaSection = state.sections.items.find(s => s.data.url === params.metaSectionUrl && s.data.meta)

    return {
      sections: state.sections.items,
      metaSection
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
