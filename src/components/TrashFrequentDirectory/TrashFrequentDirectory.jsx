import React from 'react'
import {connect} from 'react-redux'

import {fetchFaqs} from '../../store/faqsActions'
import Directory from '../Directory'
import TrashFrequentDirectoryEntry from '../TrashFrequentDirectoryEntry'
import Loading from '../Loading'

class TrashFrequentDirectory extends React.Component {
  componentWillMount () {
    const {dispatch} = this.props

    dispatch(fetchFaqs())
  }

  render () {
    const {children, isFetching, items} = this.props

    if (isFetching) {
      return <Loading />
    } else {
      const filteredItems = items.filter(i => i.data.isDeleted === true)

      const faqs = filteredItems.map(i =>
        <TrashFrequentDirectoryEntry key={i.data.id} entry={i} />
      )

      return (
        <Directory title="Frequent Questions" items={faqs} children={children} />
      )
    }
  }
}

export default connect(
  state => {
    return {
      isFetching: state.faqs.isFetching,
      items: state.faqs.items
    }
  }
)(TrashFrequentDirectory)
