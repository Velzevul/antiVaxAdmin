import React from 'react'
import {connect} from 'react-redux'

import {fetchArticles} from '../../store/articleActions'
import Directory from '../Directory'
import ArticleDirectoryItem from '../ArticleDirectoryItem'
import {Button} from '../UI'
import Loading from '../Loading'
import PageNotFound from '../PageNotFound'
import {getCurrentSection, isSection, isCategory, isBlogpost} from '../../config'

class ArticleDirectory extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      notFound: false
    }
  }

  componentWillMount () {
    const {dispatch, params} = this.props

    if (isSection(params.sectionId) || isCategory(params.sectionId) || isBlogpost(params.sectionId)) {
      this.setState({ notFound: false })
      dispatch(fetchArticles())
    } else {
      this.setState({ notFound: true })
    }
  }

  componentWillReceiveProps (newProps) {
    const {params} = newProps

    if (params.sectionId !== this.props.params.sectionId) {
      if (isSection(params.sectionId) || isCategory(params.sectionId) || isBlogpost(params.sectionId)) {
        this.setState({ notFound: false })
      } else {
        this.setState({ notFound: true })
      }
    }
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
        const articles = items.filter(i => i.data.type.id === currentSection.id).map(i =>
          <ArticleDirectoryItem key={i.data._id} item={i} />
        )

        const actions = (
          <div>
            <Button med
              to={`${currentSection.id}/new`}
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
  }
)(ArticleDirectory)
