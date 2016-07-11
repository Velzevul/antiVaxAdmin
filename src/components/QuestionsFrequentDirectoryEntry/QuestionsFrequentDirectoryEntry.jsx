import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import Time from 'react-time'

import styles from './QuestionsFrequentDirectoryEntry.css'
import {Block, ListInline, ListInlineItem, Flex} from '../Layouts'
import {Button} from '../UI'
import {updateFaq} from '../../store/faqsActions'

class QuestionsFrequentDirectoryEntry extends React.Component {
  constructor (props) {
    super(props)

    this.publish = this.publish.bind(this)
    this.delete = this.delete.bind(this)
  }

  publish () {
    const {dispatch, entry} = this.props
    const payload = {
      isPublished: !entry.data.isPublished
    }

    dispatch(updateFaq(entry.data._id, payload))
  }

  delete () {
    const {dispatch, entry} = this.props
    const payload = {
      isDeleted: true
    }

    dispatch(updateFaq(entry.data._id, payload, 'moved to "trash"'))
  }

  render () {
    const {entry} = this.props

    return (
      <div className={`${styles.Entry} ${entry.data.isPublished ? '' : styles.Entry_draft}`}>
        {entry.data.isPublished
          ? null
          : <div className={styles.Entry__badge}>Draft</div>
        }

        <Block>
          <Flex justifyContent="space-between">
            <div className={styles.Entry__modified}>Last modified by {entry.data.lastModifiedBy} on <Time value={entry.data.lastModifiedAt} format="MMMM Do YYYY (h:mm a)" /></div>

            {entry.data.isPublished
              ? <Button small
                disabled={entry.isUpdating}
                inverse
                theme="error"
                onClick={this.publish}>Unpublish</Button>
              : <ListInline>
                <ListInlineItem>
                  <Button small
                    disabled={entry.isUpdating}
                    theme="accent1"
                    onClick={this.publish}>Publish</Button>
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

        <Link to={`questions/frequent/${entry.data._id}`} className={styles.Entry__title}>{entry.data.title}</Link>
      </div>
    )
  }
}

export default connect()(QuestionsFrequentDirectoryEntry)
