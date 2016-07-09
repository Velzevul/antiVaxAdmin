import React from 'react'
import {connect} from 'react-redux'

import {fetchQuestions} from '../../store/questionsActions'
import Directory from '../Directory'
import TrashQuestionsDirectoryEntry from '../TrashQuestionsDirectoryEntry'
import Loading from '../Loading'

class TrashQuestionsDirectory extends React.Component {
  componentWillMount () {
    const {dispatch} = this.props

    dispatch(fetchQuestions())
  }

  render () {
    const {children, isFetching, items} = this.props

    if (isFetching) {
      return <Loading />
    } else {
      const fileredItems = items.filter(i => i.data.isDeleted === true)

      const questions = fileredItems.map(i =>
        <TrashQuestionsDirectoryEntry key={i.data.id} entry={i} />
      )

      return (
        <Directory title="Questions" items={questions} children={children} />
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
)(TrashQuestionsDirectory)
