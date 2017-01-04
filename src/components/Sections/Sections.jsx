import React from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

import {fetchArticles} from '../../store/articleActions'
import {fetchSections} from '../../store/sectionsActions'
import Loading from '../Loading'

class Sections extends React.Component {
  componentWillMount () {
    const {fetchSections, fetchArticles} = this.props

    fetchSections()
    fetchArticles()
  }

  componentWillReceiveProps (newProps) {
    const {metaSection, params} = newProps

    if (!params.sectionId && metaSection) {
      hashHistory.push(`/sections/${params.navigationType}/${metaSection.data._id}`)
    }
  }

  render () {
    const {isFetching, children} = this.props

    if (isFetching) {
      return <Loading />
    } else {
      return children
    }
  }
}

export default connect(
  (state, ownProps) => {
    const metaSection = state.sections.items.find(s => s.data.url === 'main-nav' && s.data.sectionType === 'meta')

    return {
      isFetching: state.sections.isFetching || state.articles.isFetching,
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
      }
    }
  }
)(Sections)
