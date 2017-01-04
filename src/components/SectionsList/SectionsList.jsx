import React from 'react'
import {connect} from 'react-redux'
import {sortable} from 'react-sortable'

import {updateSection, fetchSections} from '../../store/sectionsActions'
import {fetchArticles} from '../../store/articleActions'
import SectionsListItem from '../SectionsListItem'
import Loading from '../Loading'
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
        items: props.metaSection ? props.metaSection.data.children : []
      }
    }
  }

  componentWillMount () {
    const {fetchSections, fetchArticles} = this.props

    fetchSections()
    fetchArticles()
  }

  componentWillReceiveProps (newProps) {
    if (newProps.metaSection) {
      this.setState({
        data: {
          items: newProps.metaSection.data.children
        }
      })
    }
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
    const {children, isFetching, metaSection, sections, location, params} = this.props

    if (isFetching) {
      return <Loading />
    } else {
      const isNewSectionRoute = location.pathname === '/sections/new'
      const isEditSectionRoute = location.pathname === `/sections/${params.sectionId}/edit`
      const disableInteraction = isNewSectionRoute || isEditSectionRoute

      return (
        <Wrapper dimmed={disableInteraction}>
          <Table>
            <TableRow heading>
              <TableColumn width="stretch">
                <TableCell heading title>{metaSection.data.title}</TableCell>
              </TableColumn>

              <TableColumn width="stretch">
                <TableCell>url</TableCell>
              </TableColumn>

              <TableColumn last
                width="20">
                {disableInteraction
                  ? ''
                  : (
                    <Flex justifyContent="flex-end">
                      <LinkButton to={`/sections/new?parentId=${metaSection.data._id}`}>add new section</LinkButton>
                    </Flex>
                  )
                }
              </TableColumn>
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
                      <SectionsListItem section={section}
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
}

export default connect(
  (state, ownProps) => {
    const metaSection = state.sections.items.find(s => s.data.url === 'main-nav' && s.data.sectionType === 'meta')

    return {
      isFetching: state.sections.isFetching || state.articles.isFetching,
      sections: state.sections.items,
      metaSection
    }
  },
  dispatch => {
    return {
      fetchSections: () => {
        dispatch(fetchSections())
      },
      fetchArticles: () => {
        dispatch(fetchArticles())
      },
      updateSection: (id, data) => {
        dispatch(updateSection(id, data))
      }
    }
  }
)(SectionsList)
