import React from 'react'
import {connect} from 'react-redux'

import {fetchArticles} from '../../store/articleActions'
import Directory from '../Directory'
import ArticleDirectoryEntry from '../ArticleDirectoryEntry'
import {Button} from '../UI'
import Loading from '../Loading'
import PageNotFound from '../PageNotFound'

class ArticleDirectory extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      notFound: false
    }
  }

  componentWillMount () {
    const {dispatch, params} = this.props
    const allowedSections = ['faqs', 'diseases', 'vaccines', 'about-vaccines', 'vaccine-safety', 'about-project', 'additional-information']

    if (allowedSections.indexOf(params.sectionId) === -1) {
      this.setState({ notFound: true })
    } else {
      dispatch(fetchArticles())
    }
  }

  render () {
    if (this.state.notFound) {
      return (
        <PageNotFound />
      )
    } else {
      const {children, isFetching, items, params} = this.props

      if (isFetching) {
        return <Loading />
      } else {
        const articles = items.filter(i => i.data.type.id === params.sectionId).map(i =>
          <ArticleDirectoryEntry key={i.data._id} item={i} />
        )

        const actions = (
          <div>
            <Button med
              to={`${params.sectionId}/new`}
              theme="accent1">Create new</Button>
          </div>
        )

        const sectionTypeMap = {
          'faqs': 'FAQs',
          'diseases': 'Diseases',
          'vaccines': 'Vaccines',
          'about-vaccines': 'About Vaccines',
          'vaccine-safety': 'Vaccine Safety',
          'about-project': 'About Project',
          'additional-information': 'Additional Information'
        }

        return (
          <Directory title={sectionTypeMap[params.sectionId]} items={articles} actions={actions} children={children} />
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
