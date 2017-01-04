import React from 'react'
import {hashHistory} from 'react-router'
import {connect} from 'react-redux'

import {fetchQuestions} from '../../store/questionsActions'
import Loading from '../Loading'
import QuestionsListItem from '../QuestionsListItem'

import styles from './QuestionsList.css'

class QuestionsList extends React.Component {
  componentWillMount () {
    const {fetchQuestions} = this.props

    fetchQuestions()
  }

  render () {
    const {children, items, isFetching, params} = this.props

    if (isFetching) {
      return <Loading />
    } else {
      return (
        <div className={`${styles.Wrapper} ${params.questionId ? styles.Wrapper_dimmed : ''}`}>
          <div className={styles.QuestionsList}>
            <div className={styles.Heading}>
              <div className={styles.Heading__name}>
                <div className={styles.Name}>Question</div>
              </div>

              <div className={styles.Heading__timestamp}>
                <div className={styles.Timestamp}>Posted on</div>
              </div>
            </div>

            {items.map((i, index) => {
              return (
                <QuestionsListItem key={index}
                  question={i}
                  children={children}
                  currentId={params.questionId} />
              )
            })}
          </div>
        </div>
      )
    }
  }
}

export default connect(
  state => {
    return {
      items: state.questions.items,
      isFetching: state.questions.isFetching
    }
  },
  dispatch => {
    return {
      fetchQuestions: () => {
        dispatch(fetchQuestions())
      }
    }
  }
)(QuestionsList)
