import React from 'react'
import {connect} from 'react-redux'
import Time from 'react-time'

import styles from './QuestionsInboxDirectoryEntry.css'
import {Block, ListInline, ListInlineItem, Flex} from '../Layouts'
import {Button} from '../UI'
import {updateQuestion, deleteQuestion} from '../../store/questionsActions'

class QuestionsInboxDirectoryEntry extends React.Component {
  constructor (props) {
    super(props)

    this.markSeen = this.markSeen.bind(this)
    this.delete = this.delete.bind(this)
  }

  markSeen () {
    const {dispatch, entry} = this.props
    const payload = {
      isSeen: !entry.data.isSeen
    }

    dispatch(updateQuestion(entry.data._id, payload))
  }

  delete () {
    const {dispatch, entry} = this.props

    dispatch(deleteQuestion(entry.data._id))
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

            {entry.data.isSeen
              ? <ListInline>
                <ListInlineItem>
                  <Button small
                    disabled={entry.isUpdating}
                    inverse
                    theme="accent1"
                    onClick={this.markSeen}>mark as new</Button>
                </ListInlineItem>

                <ListInlineItem>
                  <Button small
                    disabled={entry.isUpdating}
                    inverse
                    theme="error"
                    onClick={this.delete}>Delete</Button>
                </ListInlineItem>
              </ListInline>
              : <ListInline>
                <ListInlineItem>
                  <Button small
                    disabled={entry.isUpdating}
                    theme="accent1"
                    href={`mailto:${entry.data.posterEmail}?subject=Reply to your questions on antivax&body=Reply to your question:\n ${entry.data.question}`}>respond via email</Button>
                </ListInlineItem>

                <ListInlineItem>
                  <Button small
                    disabled={entry.isUpdating}
                    inverse
                    theme="accent1"
                    onClick={this.markSeen}>mark as seen</Button>
                </ListInlineItem>

                <ListInlineItem>
                  <Button small
                    disabled={entry.isUpdating}
                    inverse
                    theme="error"
                    onClick={this.delete}>Delete</Button>
                </ListInlineItem>
              </ListInline>
            }
          </Flex>
        </Block>

        <div className={styles.Entry__body}>{entry.data.question}</div>
      </div>
    )
  }
}

export default connect()(QuestionsInboxDirectoryEntry)
