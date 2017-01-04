import React from 'react'
import {hashHistory} from 'react-router'
import Time from 'react-time'

import Badge from '../Badge'

import styles from './QuestionsListItem.css'

class QuestionsListItem extends React.Component {
  constructor (props) {
    super(props)

    this.navigate = this.navigate.bind(this)
  }

  navigate () {
    const {question, currentId} = this.props

    if (!currentId) {
      hashHistory.push(`/questions/${question.data._id}`)
    }
  }

  render () {
    const {question, currentId, children} = this.props

    if (currentId && currentId === question.data._id) {
      return children
    } else {
      const truncatedText = `${question.data.question.slice(3, Math.min(question.data.question.length - 4, 70))}..`

      return (
        <div onClick={this.navigate}
          className={`${styles.QuestionsListItem} ${currentId ? '' : styles.QuestionsListItem_active}`}>
          <div className={styles.QuestionsListItem__sender}>
            <div className={styles.Sender}>{question.data.posterName}</div>
          </div>

          <div className={styles.QuestionsListItem__message}>
            <div className={styles.Message}>{truncatedText}</div>
          </div>

          <div className={styles.QuestionsListItem__badges}>
            {question.data.isSeen
              ? ''
              : (
                <div className={styles.Badge}>
                  <Badge label="Not Answered" color="red" />
                </div>
              )
            }
          </div>

          <div className={styles.QuestionsListItem__timestamp}>
            <div className={styles.Timestamp}>
              <Time value={question.data.createdAt} format="h:mm A on MMM Do" />
            </div>
          </div>
        </div>
      )
    }
  }
}

export default QuestionsListItem
