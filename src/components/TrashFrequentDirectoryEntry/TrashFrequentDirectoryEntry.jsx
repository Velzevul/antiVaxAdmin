import React from 'react'
import {connect} from 'react-redux'
import Time from 'react-time'

import styles from './TrashFrequentDirectoryEntry.css'
import {Block, Flex} from '../Layouts'
import {Button} from '../UI'
import {updateFaq} from '../../store/faqsActions'

class TrashFrequentDirectoryEntry extends React.Component {
  constructor (props) {
    super(props)

    this.putBack = this.putBack.bind(this)
  }

  putBack () {
    const {dispatch, entry} = this.props
    const payload = {
      isDeleted: false
    }

    dispatch(updateFaq(entry.data._id, payload, 'moved to "Frequent"'))
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

            <Button small
              disabled={entry.isUpdating}
              inverse
              theme="error"
              onClick={this.putBack}>Put back</Button>
          </Flex>
        </Block>

        <div className={styles.Entry__title}>{entry.data.title}</div>
      </div>
    )
  }
}

export default connect()(TrashFrequentDirectoryEntry)
