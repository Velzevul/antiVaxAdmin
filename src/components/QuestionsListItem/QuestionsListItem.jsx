import React from 'react'
import {hashHistory} from 'react-router'
import Time from 'react-time'

import TableRow from '../TableRow'
import TableColumn from '../TableColumn'
import TableCell from '../TableCell'
import {LinkButton} from '../UI'
import {Flex} from '../Layouts'
import Badge from '../Badge'
import Icon from '../Icon'

import styles from './QuestionsListItem.css'

const QuestionsListItem = ({
  question,
  disableInteraction
}) => {
  const truncatedText = `${question.data.question.slice(3, Math.min(question.data.question.length - 3, 70))}..`

  return (
    <TableRow interactive={!disableInteraction}>
      <TableColumn>
        <Icon type="envelope" />
      </TableColumn>

      <TableColumn width="10">
        <TableCell title
          to={disableInteraction ? null : `/questions/${question.data._id}`}>
          {question.data.posterName}
        </TableCell>
      </TableColumn>

      <TableColumn width="stretch">
        <TableCell to={disableInteraction ? null : `/questions/${question.data._id}`}>
          {truncatedText}
        </TableCell>
      </TableColumn>

      <TableColumn width="10">
        {question.data.isSeen
          ? ''
          : (
            <div className={styles.Badge}>
              <Badge label="Not Answered" color="red" />
            </div>
          )
        }
      </TableColumn>

      <TableColumn last
        width="10">
        <TableCell>
          <Time value={question.data.createdAt} format="h:mm A on MMM Do" />
        </TableCell>
      </TableColumn>
    </TableRow>
  )
}

export default QuestionsListItem
