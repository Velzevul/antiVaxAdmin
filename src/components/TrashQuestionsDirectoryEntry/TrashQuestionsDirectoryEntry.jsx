import React from 'react'
import {connect} from 'react-redux'
import Time from 'react-time'

import styles from './TrashQuestionsDirectoryEntry.css'
import {Block, Flex} from '../Layouts'
import {Button} from '../UI'
import {updateQuestion} from '../../store/questionsActions'

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

    dispatch(updateQuestion(entry.data._id, payload, 'moved to "inbox"'))
  }

  render () {
    const {entry} = this.props

    return (
      <div className={`${styles.Entry} ${entry.data.isSeen ? '' : styles.Entry_new}`}>
        {entry.data.isSeen
          ? null
          : <div className={styles.Entry__badge}>New</div>
        }

        <Block>
          <Flex justifyContent="space-between">
            <div className={styles.Entry__posted}>
              <Time value={entry.data.createdAt} format="MMMM Do YYYY (h:mm a)" /> by {entry.data.posterName} ({entry.data.posterEmail})
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
