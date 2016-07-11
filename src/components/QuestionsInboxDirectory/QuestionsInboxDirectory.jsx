import React from 'react'
import {connect} from 'react-redux'

import {fetchQuestions} from '../../store/questionsActions'
import Directory from '../Directory'
import QuestionsInboxDirectoryEntry from '../QuestionsInboxDirectoryEntry'
import Loading from '../Loading'

class QuestionsInboxDirectory extends React.Component {
  componentWillMount () {
    const {dispatch} = this.props

    dispatch(fetchQuestions())
  }

  render () {
    const {children, isFetching, items} = this.props

    if (isFetching) {
      return <Loading />
    } else {
      const fileredItems = items.filter(i => i.data.isDeleted === false)

      const questions = fileredItems.map(i =>
        <QuestionsInboxDirectoryEntry key={i.data._id} entry={i} />
      )

      return (
        <Directory title="Inbox" items={questions} children={children} />
      )
    }
  }
}

export default connect(
  state => {
    return {
      isFetching: state.questions.isFetching,
      items: state.questions.items
    }
  }
)(QuestionsInboxDirectory)
