import React from 'react'
import {connect} from 'react-redux'

import {fetchArticles, updateArticle} from '../../store/articleActions'
import Directory from '../Directory'
import ArticleDirectoryItem from '../ArticleDirectoryItem'
import {Button} from '../UI'
import Loading from '../Loading'
import PageNotFound from '../PageNotFound'
import {getCurrentSection, isSection, isAttachment, isBlogpost, isFaq} from '../../config'

class ArticleDirectory extends React.Component {
  constructor (props) {
    super(props)

    this.swap = this.swap.bind(this)

    this.state = {
      notFound: false
    }
  }

  componentWillMount () {
    const {fetchArticles, params} = this.props

    if (isSection(params.sectionId) || isAttachment(params.sectionId) || isBlogpost(params.sectionId) || isFaq(params.sectionId)) {
      this.setState({ notFound: false })
      fetchArticles()
    } else {
      this.setState({ notFound: true })
    }
  }

  componentWillReceiveProps (newProps) {
    const {params} = newProps

    if (params.sectionId !== this.props.params.sectionId) {
      if (isSection(params.sectionId) || isAttachment(params.sectionId) || isBlogpost(params.sectionId) || isFaq(params.sectionId)) {
        this.setState({ notFound: false })
      } else {
        this.setState({ notFound: true })
      }
    }
  }

  swap (orderA, orderB) {
    const {updateArticle, items, params: {sectionId}} = this.props
    const currentSection = getCurrentSection(sectionId)
    const filteredArticles = items
      .filter(i => i.data.type.id === currentSection.id)

    const articleA = filteredArticles.filter(a => a.data.order === orderA)[0]
    const articleB = filteredArticles.filter(a => a.data.order === orderB)[0]

    updateArticle(articleA.data._id, {
      order: orderB
    })

    updateArticle(articleB.data._id, {
      order: orderA
    })
  }

  render () {
    if (this.state.notFound) {
      return (
        <PageNotFound />
      )
    } else {
      const {children, isFetching, items, params} = this.props

      const currentSection = getCurrentSection(params.sectionId)

      if (isFetching) {
        return <Loading />
      } else {
        const filteredArticles = items
          .filter(i => i.data.type.id === currentSection.id)
          .sort((a, b) => {
            return a.data.order - b.data.order
          })

        const articles = filteredArticles
          .map(i =>
            <ArticleDirectoryItem key={i.data._id} item={i} nItems={filteredArticles.length} swap={this.swap} />
          )

        const actions = (
          <div>
            <Button med
              to={`${PUBLIC_PATH}/${currentSection.id}/new`}
              theme="accent1">Create new</Button>
          </div>
        )

        return (
          <Directory title={currentSection.label} items={articles} actions={actions} children={children} />
        )
      }
    }
  }
}

export default connect(
  state => {
    return {
      isFetching: state.articles.isFetching,
      items: state.articles.items
    }
  },
  dispatch => {
    return {
      updateArticle: (id, data) => {
        dispatch(updateArticle(id, data))
      },
      fetchArticles: () => {
        dispatch(fetchArticles())
      }
    }
  }
)(ArticleDirectory)
