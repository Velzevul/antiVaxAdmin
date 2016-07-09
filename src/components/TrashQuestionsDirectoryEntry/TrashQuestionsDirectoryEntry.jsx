import React from 'react'
import {connect} from 'react-redux'
import Time from 'react-time'

import styles from './TrashQuestionsDirectoryEntry.css'
import {Block, Flex} from '../Layouts'
import {Button} from '../UI'
import {updateQuestion} from '../../store/questionsActions'
import {flashMessage} from '../../store/flashActions'

class TrashQuestionsDirectoryEntry extends React.Component {
  constructor (props) {
    super(props)

    this.putBack = this.putBack.bind(this)
  }

  putBack () {
    const {dispatch, entry} = this.props
    const payload = {
      isDeleted: false
    }

    dispatch(updateQuestion(entry.data.id, payload))
    dispatch(flashMessage('question has been put back to "inbox"', 'log'))
  }

  render () {
    const {entry} = this.props

    return (
      <div className={`${styles.Entry} ${entry.data.seen ? '' : styles.Entry_new}`}>
        {entry.data.seen
          ? null
          : <div className={styles.Entry__badge}>New</div>
        }

        <Block>
          <Flex justifyContent="space-between">
            <div className={styles.Entry__posted}>
              <Time value={entry.data.postedAt} format="MMMM Do YYYY (h:mm a)" /> by {entry.data.posterName} ({entry.data.posterEmail})
            </div>

            <Button small
              disabled={entry.isUpdating}
              inverse
              theme="accent1"
              onClick={this.putBack}>Put back</Button>
          </Flex>
        </Block>

        <div className={styles.Entry__body}>{entry.data.question}</div>
      </div>
    )
  }
}

export default connect()(TrashQuestionsDirectoryEntry)
