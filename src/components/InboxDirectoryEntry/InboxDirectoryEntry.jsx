import React from 'react'
import {connect} from 'react-redux'
import Time from 'react-time'

import styles from './InboxDirectoryEntry.css'
import {Block, ListInline, ListInlineItem, Flex} from '../Layouts'
import {Button, Badge} from '../UI'
import {updateQuestion, deleteQuestion} from '../../store/questionsActions'

class InboxDirectoryEntry extends React.Component {
  constructor (props) {
    super(props)

    this.markSeen = this.markSeen.bind(this)
    this.delete = this.delete.bind(this)
  }

  markSeen () {
    const {dispatch, entry} = this.props
    const payload = {
      seen: !entry.data.seen
    }

    dispatch(updateQuestion(entry.data.id, payload))
  }

  delete () {
    const {dispatch, entry} = this.props
    const payload = {
      isDeleted: true
    }

    dispatch(updateQuestion(entry.data.id, payload))
  }

  render () {
    const {entry} = this.props

    return (
      <div className={`${styles.Entry} ${entry.data.seen ? '' : styles.Entry_new}`}>
        {entry.data.seen
          ? null
          : <div className={styles.Entry__badge}>
            <Badge theme="accent2">New</Badge>
          </div>
        }

        <Block>
          <Flex justifyContent="space-between">
            <ListInline n={2}>
              <ListInlineItem n={2}>
                <div className={styles.Entry__date}>
                  <Time value={entry.data.postedAt}
                    format="MMMM Do YYYY (h:mm a)" />
                </div>
              </ListInlineItem>

              <ListInlineItem n={2}>
                <div className={styles.Entry__poster}>{entry.data.posterName} ({entry.data.posterEmail})</div>
              </ListInlineItem>
            </ListInline>

            {entry.data.seen
              ? <ListInline>
                <ListInlineItem>
                  <Button small
                    disabled={entry.isUpdating}
                    inverse
                    theme="accent1"
                    href={`mailto:${entry.data.posterEmail}?subject=Reply to your questions on antivax&body=Reply to your question:\n ${entry.data.question}`}>respond via email</Button>
                </ListInlineItem>

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

export default connect()(InboxDirectoryEntry)
