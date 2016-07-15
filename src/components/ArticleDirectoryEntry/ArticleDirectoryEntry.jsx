import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import Time from 'react-time'

import styles from './ArticleDirectoryEntry.css'
import {Block, ListInline, ListInlineItem, Flex} from '../Layouts'
import {Button} from '../UI'
import {updateArticle, deleteArticle} from '../../store/articleActions'

class ArticleDirectoryEntry extends React.Component {
  constructor (props) {
    super(props)

    this.publish = this.publish.bind(this)
    this.delete = this.delete.bind(this)
  }

  publish () {
    const {dispatch, item} = this.props
    const payload = {
      isPublished: !item.data.isPublished
    }

    dispatch(updateArticle(item.data._id, payload))
  }

  delete () {
    const {dispatch, item} = this.props

    dispatch(deleteArticle(item.data._id))
  }

  render () {
    const {item} = this.props

    let badge = ''
    let actions = ''
    if (item.data.isPublished) {
      badge = (
        <div className={styles.Entry__badge}>Published</div>
      )

      actions = (
        <ListInline>
          <ListInlineItem>
            <Button small
              disabled={item.isUpdating}
              inverse
              theme="error"
              onClick={this.publish}>Unpublish</Button>
          </ListInlineItem>

          <ListInlineItem>
            <Button small
              disabled
              inverse
              theme="error"
              onClick={this.delete}>Delete</Button>
          </ListInlineItem>
        </ListInline>
      )
    } else {
      badge = (
        <div className={styles.Entry__badge}>Draft</div>
      )

      actions = (
        <ListInline>
          <ListInlineItem>
            <Button small
              disabled={item.isUpdating}
              inverse
              theme="accent1"
              onClick={this.publish}>Publish</Button>
          </ListInlineItem>

          <ListInlineItem>
            <Button small
              disabled={item.isUpdating}
              inverse
              theme="error"
              onClick={this.delete}>Delete</Button>
          </ListInlineItem>
        </ListInline>
      )
    }

    return (
      <div className={`${styles.Entry} ${item.data.isPublished ? '' : styles.Entry_draft}`}>
        <Block n={0.5}>
          <Flex justifyContent="space-between" alignItems="center">
            <ListInline>
              <ListInlineItem>
                {badge}
              </ListInlineItem>

              <ListInlineItem>
                <div className={styles.Entry__info}>Last modified by {item.data.lastModifiedBy} on <Time value={item.data.lastModifiedAt} format="MMMM Do YYYY (h:mm a)" /></div>
              </ListInlineItem>
            </ListInline>

            {actions}
          </Flex>
        </Block>

        <div>
          <Link to={`${item.data.type.id}/${item.data._id}`} className={styles.Entry__title}>{item.data.title}</Link>
        </div>
      </div>
    )
  }
}

export default connect()(ArticleDirectoryEntry)
