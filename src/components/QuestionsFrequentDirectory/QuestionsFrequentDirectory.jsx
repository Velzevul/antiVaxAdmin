import React from 'react'
import {connect} from 'react-redux'

import {fetchFaqs} from '../../store/faqsActions'
import Directory from '../Directory'
import QuestionsFrequentDirectoryEntry from '../QuestionsFrequentDirectoryEntry'
import {Button} from '../UI'
import Loading from '../Loading'

class QuestionsFrequentDirectory extends React.Component {
  componentWillMount () {
    const {dispatch} = this.props

    dispatch(fetchFaqs())
  }

  render () {
    const {children, isFetching, items} = this.props

    if (isFetching) {
      return <Loading />
    } else {
      const filteredItems = items.filter(i => i.data.isDeleted === false)

      const faqs = filteredItems.map(i =>
        <QuestionsFrequentDirectoryEntry key={i.data._id} entry={i} />
      )

      const actions = (
        <div>
          <Button small
            to="/questions/frequent/new"
            theme="accent1">Create new</Button>
        </div>
      )

      return (
        <Directory title="Frequent" items={faqs} actions={actions} children={children} />
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
)(QuestionsFrequentDirectory)
