import React from 'react'
import {connect} from 'react-redux'

import {fetchQuestions} from '../../store/questionsActions'
import Directory from '../Directory'
import QuestionsDirectoryItem from '../QuestionsDirectoryItem'
import Loading from '../Loading'

class QuestionsDirectory extends React.Component {
  componentWillMount () {
    const {dispatch} = this.props

    dispatch(fetchQuestions())
  }

  render () {
    const {children, isFetching, items} = this.props

    if (isFetching) {
      return <Loading />
    } else {
      const questions = items.map(i =>
        <QuestionsDirectoryItem key={i.data._id} item={i} />
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
)(QuestionsDirectory)
