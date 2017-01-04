import React from 'react'
import Time from 'react-time'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

import {updateQuestion, deleteQuestion} from '../../store/questionsActions'
import {Flex, Block, ListInline, ListInlineItem} from '../Layouts'
import {Button, IconButton, LinkButton} from '../UI'
import Badge from '../Badge'

import styles from './Question.css'

class Question extends React.Component {
  constructor (props) {
    super(props)

    this.delete = this.delete.bind(this)
    this.toggleAnswered = this.toggleAnswered.bind(this)
  }

  delete () {
    const {deleteQuestion, question} = this.props

    deleteQuestion(question.data._id)
  }

  toggleAnswered () {
    const {updateQuestion, question} = this.props

    updateQuestion(question.data._id, {
      isSeen: !question.data.isSeen
    })
  }

  render () {
    const {question} = this.props

    let actions = (
      <ListInline>
        <ListInlineItem>
          <Button
            disabled={question.data.isUpdating}
            href={`mailto:${question.data.posterEmail}?subject=Reply to your questions on Vaccine Answers`}>Reply via email</Button>
        </ListInlineItem>

        <ListInlineItem>
          <LinkButton disabled={question.data.isUpdating}
            onClick={this.toggleAnswered}>Mark as answered</LinkButton>
        </ListInlineItem>

        <ListInlineItem>
          <LinkButton disabled={question.data.isUpdating}
            to="/questions">Close</LinkButton>
        </ListInlineItem>
      </ListInline>
    )
    if (question.data.isSeen) {
      actions = (
        <ListInline>
          <ListInlineItem>
            <LinkButton disabled={question.data.isUpdating}
              color="red"
              onClick={this.toggleAnswered}>Mark as not answered</LinkButton>
          </ListInlineItem>

          <ListInlineItem>
            <LinkButton disabled={question.data.isUpdating}
              to="/questions">Close</LinkButton>
          </ListInlineItem>
        </ListInline>
      )
    }

    return (
      <div ref={el => { this._element = el }}
        className={styles.Question}>
        <div ref={el => { this._body = el }}
          className={styles.Question__body}>
          <Block>
            <Flex justifyContent="space-between">
              <div className={styles.Name}>{question.data.posterName}</div>

              <ListInline>
                <ListInlineItem>
                  {question.data.isSeen ? '' : <Badge label="Not Answered" color="red" />}
                </ListInlineItem>

                <ListInlineItem>
                  <div className={styles.Timestamp}>
                    <Time value={question.data.createdAt} format="h:mm A on MMM Do" />
                  </div>
                </ListInlineItem>
              </ListInline>
            </Flex>

            <div className={styles.Email}>{question.data.posterEmail}</div>
          </Block>

          <div dangerouslySetInnerHTML={{__html: question.data.question}} />
        </div>

        <div className={styles.Question__footer}>
          {actions}

          <div>
            <IconButton type="delete"
              disabled={question.data.isUpdating}
              onClick={this.delete} />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  (state, ownProps) => {
    const {params: {questionId}} = ownProps

    return {
      question: state.questions
        ? state.questions.items.find(i => i.data._id === questionId)
        : {data: {}}
    }
  },
  dispatch => {
    return {
      deleteQuestion: (id) => {
        dispatch(deleteQuestion(id))
      },
      updateQuestion: (id, data) => {
        dispatch(updateQuestion(id, data))
      }
    }
  }
)(Question)
