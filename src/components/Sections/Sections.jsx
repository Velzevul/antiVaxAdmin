import React from 'react'
import {connect} from 'react-redux'

import {fetchSections} from '../../store/sectionsActions'
import {fetchArticles} from '../../store/articleActions'
import Loading from '../Loading'

class Sections extends React.Component {
  componentWillMount () {
    const {fetchSections, fetchArticles} = this.props

    fetchSections()
    fetchArticles()
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
  state => {
    return {
      isFetching: state.sections.isFetching || state.articles.isFetching
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
