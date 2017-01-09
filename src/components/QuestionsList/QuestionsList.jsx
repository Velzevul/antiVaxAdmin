import React from 'react'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'

import {fetchQuestions} from '../../store/questionsActions'
import Loading from '../Loading'
import QuestionsListItem from '../QuestionsListItem'
import {LinkButton} from '../UI'
import Wrapper from '../Wrapper'
import Table from '../Table'
import TableRow from '../TableRow'
import TableColumn from '../TableColumn'
import TableCell from '../TableCell'
import {Flex} from '../Layouts'

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
        <Wrapper dimmed={params.questionId}>
          <Table>
            <TableRow heading>
              <TableColumn width="stretch">
                <TableCell heading title>Questions</TableCell>
              </TableColumn>

              <TableColumn last
                width="10">
                <TableCell heading>posted on</TableCell>
              </TableColumn>
            </TableRow>

            {items.map((i, index) => {
              if (i.data._id === params.questionId) {
                return (
                  <div key={index}>
                    {children}
                  </div>
                )
              }
              return (
                <QuestionsListItem key={index}
                  question={i}
                  disableInteraction={params.questionId} />
              )
            })}
          </Table>
        </Wrapper>
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
