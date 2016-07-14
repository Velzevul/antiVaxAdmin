import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import Time from 'react-time'

import styles from './BlogpostsDirectoryEntry.css'
import {Block, ListInline, ListInlineItem, Flex} from '../Layouts'
import {Button} from '../UI'
import {updateBlogpost, deleteBlogpost} from '../../store/blogpostsActions'

class BlogpostsDirectoryEntry extends React.Component {
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

    dispatch(updateBlogpost(entry.data._id, payload))
  }

  delete () {
    const {dispatch, entry} = this.props

    dispatch(deleteBlogpost(entry.data._id))
  }

  render () {
    const {entry} = this.props

    return (
      <div className={`${styles.Entry} ${entry.data.isPublished ? '' : styles.Entry_draft}`}>
        {entry.data.isPublished
          ? null
          : <div className={styles.Entry__badge}>Draft</div>
        }

        <Flex justifyContent="space-between" alignItems="center">
          <div>
            <Block n={0.5}>
              <div className={styles.Entry__info}>Last modified by {entry.data.lastModifiedBy} on <Time value={entry.data.lastModifiedAt} format="MMMM Do YYYY (h:mm a)" /></div>
            </Block>

            <Link to={`blogposts/${entry.data._id}`} className={styles.Entry__title}>{entry.data.title}</Link>
          </div>

          {entry.data.isPublished
            ? <Button small
              disabled={entry.isUpdating}
              inverse
              theme="error"
              onClick={this.publish}>Unpublish</Button>
            : <ListInline>
              <ListInlineItem>
                <Button small
                  inverse
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
      </div>
    )
  }
}

export default connect()(BlogpostsDirectoryEntry)
