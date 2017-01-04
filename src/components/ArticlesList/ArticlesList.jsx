import React from 'react'
import {connect} from 'react-redux'
import {sortable} from 'react-sortable'

import Breadcrumbs from '../Breadcrumbs'
import {updateSection} from '../../store/sectionsActions'
import ArticlesListItem from '../ArticlesListItem'
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

class ArticlesList extends React.Component {
  constructor (props) {
    super(props)

    this.updateState = this.updateState.bind(this)

    this.state = {
      draggingIndex: null,
      data: {
        items: props.section.data.articles
      }
    }
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      data: {
        items: newProps.section.data.articles
      }
    })
  }

  updateState (obj) {
    if (obj.draggingIndex === null) {
      const {updateSection} = this.props

      updateSection({
        articles: this.state.data.items
      })
    }

    this.setState(obj)
  }

  render () {
    const {children, section, parentSections, location, params} = this.props
    const isNewArticleRoute = location.pathname === `/sections/${params.navigationType}/${params.sectionId}/articles/new`
    const isEditArticleRoute = location.pathname === `/sections/${params.navigationType}/${params.sectionId}/articles/${params.articleId}`
    const disableInteraction = isNewArticleRoute || isEditArticleRoute

    let parentItems = parentSections.map(s => {
      return {
        label: s.data.title,
        path: `/sections/${params.navigationType}/${s.data._id}`
      }
    })

    let actions = ''
    if (section.data.sectionType === 'articles') {
      actions = (
        <ListInlineItem>
          <ListInline>
            <ListInlineItem>
              <LinkButton to={`/sections/${params.navigationType}/${params.sectionId}/articles/new`}>add new article</LinkButton>
            </ListInlineItem>

            <ListInlineItem>
              <LinkButton to={`/sections/${params.navigationType}/${params.sectionId}/articles/new?type=heading`}>add new heading</LinkButton>
            </ListInlineItem>
          </ListInline>
        </ListInlineItem>
      )
    } else if (section.data.sectionType === 'blogposts') {
      actions = (
        <ListInlineItem>
          <LinkButton to={`/sections/${params.navigationType}/${params.sectionId}/articles/new`}>add new blog post</LinkButton>
        </ListInlineItem>
      )
    }

    let tableHeading = ''
    if (isNewArticleRoute) {
      tableHeading = children
    } else {
      tableHeading = (
        <TableRow heading>
          <TableColumn width="stretch">
            <ListInline>
              <ListInlineItem>
                <TableCell title heading>{section.data.title}</TableCell>
              </ListInlineItem>

              {disableInteraction
                ? ''
                : actions
              }
            </ListInline>
          </TableColumn>
        </TableRow>
      )
    }

    return (
      <Wrapper dimmed={disableInteraction}>
        <Table breadcrumbs>
          <Breadcrumbs items={parentItems}
            disableInteraction={disableInteraction} />

          {tableHeading}

          {this.state.data.items.map((articleId, i) => {
            if (isEditArticleRoute && params.articleId === articleId) {
              return (
                <div key={i}>
                  {children}
                </div>
              )
            } else if (disableInteraction) {
              return (
                <ArticlesListItem key={i}
                  articleId={articleId}
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
                  <ArticlesListItem key={i}
                    articleId={articleId}
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
    const {params} = ownProps
    const section = state.sections.items.find(s => s.data._id === params.sectionId)

    let parentSections = []
    let currentChild = section
    while (currentChild.data.parent) {
      let parent = state.sections.items.find(s => s.data._id === currentChild.data.parent)
      parentSections = [parent, ...parentSections]
      currentChild = parent
    }

    return {
      section,
      parentSections
    }
  },
  (dispatch, ownProps) => {
    const {params} = ownProps

    return {
      updateSection: (data) => {
        dispatch(updateSection(params.sectionId, data))
      }
    }
  }
)(ArticlesList)
