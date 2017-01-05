import React from 'react'
import {connect} from 'react-redux'
import {sortable} from 'react-sortable'

import {updateSection} from '../../store/sectionsActions'
import ArticlesListItem from '../ArticlesListItem'
import {LinkButton} from '../UI'
import {Flex, ListInline, ListInlineItem} from '../Layouts'
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
    const {articles, section, children, params, location} = this.props
    const isNewArticleRoute = location.pathname === `/sections/${params.sectionId}/articles/new`
    const isEditArticleRoute = location.pathname === `/sections/${params.sectionId}/articles/${params.articleId}`
    const disableInteraction = isNewArticleRoute || isEditArticleRoute

    let actions = ''
    if (section.data.sectionType === 'articles') {
      actions = (
        <Flex justifyContent="flex-end">
          <LinkButton to={`/sections/${params.sectionId}/articles/new`}>add new article</LinkButton>
          <LinkButton to={`/sections/${params.sectionId}/articles/new?type=heading`}>add new heading</LinkButton>
        </Flex>
      )
    } else if (section.data.sectionType === 'blogposts') {
      actions = (
        <Flex justifyContent="flex-end">
          <LinkButton to={`/sections/${params.sectionId}/articles/new`}>add new blog post</LinkButton>
        </Flex>
      )
    }

    return (
      <Wrapper dimmed={disableInteraction}>
        <Table>
          <TableRow heading>
            <TableColumn width="stretch">
              <TableCell title heading>{section.data.title}</TableCell>
            </TableColumn>

            <TableColumn width="20">
              <TableCell heading>url</TableCell>
            </TableColumn>

            <TableColumn last
              width="15">
              {disableInteraction
                ? ''
                : actions
              }
            </TableColumn>
          </TableRow>

          {isNewArticleRoute
            ? children
            : ''
          }

          {this.state.data.items.map((articleId, i) => {
            if (isEditArticleRoute && params.articleId === articleId) {
              return (
                <div key={i}>
                  {children}
                </div>
              )
            } else {
              const article = articles.find(a => a.data._id === articleId)

              if (disableInteraction) {
                return (
                  <ArticlesListItem key={i}
                    article={article}
                    section={section}
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
                      article={article}
                      section={section}
                      disableInteraction={disableInteraction || this.state.draggingIndex !== null} />
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
    const section = state.sections.items.find(s => s.data._id === params.sectionId)
    const articles = state.articles.items.filter(a => section.data.articles.indexOf(a.data._id) !== -1)

    return {
      section,
      articles
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
