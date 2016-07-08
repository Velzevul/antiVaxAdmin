import React from 'react'
import {connect} from 'react-redux'
import Time from 'react-time'

import styles from './TrasnDirectoryEntry.css'
import {Block, ListInline, ListInlineItem, Flex} from '../Layouts'
import {Button, Badge} from '../UI'
import {updateQuestion} from '../../store/questionsActions'
import {flashMessage} from '../../store/flashActions'

class TrasnDirectoryEntry extends React.Component {
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

export default connect()(TrasnDirectoryEntry)
