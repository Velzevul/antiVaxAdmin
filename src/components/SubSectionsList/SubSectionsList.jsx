import React from 'react'
import {connect} from 'react-redux'
import {sortable} from 'react-sortable'

import {updateSection} from '../../store/sectionsActions'
import SectionsListItem from '../SectionsListItem'

const SortableListItem = sortable((props) => {
  return (
    <div {...props}>{props.children}</div>
  )
})

class SubSectionsList extends React.Component {
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
    const {section, subsections, children, location, params} = this.props
    const isNewSectionRoute = location.pathname === `/${params.metaSectionUrl}/new`
    const isEditSectionRoute = location.pathname === `/${params.metaSectionUrl}/${params.sectionId}/edit`
    const disableInteraction = isNewSectionRoute || isEditSectionRoute

    return (
      <div>
        {isNewSectionRoute && location.query.parentId === section.data._id
          ? children
          : ''
        }

        {section.data.children.map((subsectionId, i) => {
          const subsection = subsections.find(sub => sub.data._id === subsectionId)

          if (isEditSectionRoute && subsectionId === params.sectionId) {
            return (
              <div key={i}>
                {children}
              </div>
            )
          } else {
            if (disableInteraction) {
              return (
                <SectionsListItem
                  key={i}
                  params={params}
                  section={subsection}
                  parent={section}
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
                  <SectionsListItem
                    params={params}
                    section={subsection}
                    parent={section}
                    disableInteraction={disableInteraction || this.state.draggingIndex !== null} />
                </SortableListItem>
              )
            }
          }
        })}
      </div>
    )
  }
}

export default connect(
  null,
  dispatch => {
    return {
      updateSection: (id, data) => {
        dispatch(updateSection(id, data))
      }
    }
  }
)(SubSectionsList)
