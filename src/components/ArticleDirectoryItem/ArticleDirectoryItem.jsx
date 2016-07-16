import React from 'react'
import {connect} from 'react-redux'
import Time from 'react-time'

import Badge from '../Badge'
import {DirectoryItem, DirectoryItemTitle, DirectoryItemInfo} from '../DirectoryItem'
import {Block, ListInline, ListInlineItem, Flex} from '../Layouts'
import {Button} from '../UI'
import {updateArticle, deleteArticle} from '../../store/articleActions'

class ArticleDirectoryItem extends React.Component {
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

    return (
      <DirectoryItem>
        <Block n={0.5}>
          <Flex justifyContent="space-between" alignItems="center">
            <ListInline>
              <ListInlineItem>
                <Badge label={item.data.isPublished ? 'Published' : 'Draft'}
                  theme={item.data.isPublished ? 'success' : 'error'} />
              </ListInlineItem>

              <ListInlineItem>
                <DirectoryItemInfo>Last modified by {item.data.lastModifiedBy} on <Time value={item.data.lastModifiedAt} format="MMMM Do YYYY (h:mm a)" /></DirectoryItemInfo>
              </ListInlineItem>
            </ListInline>

            <ListInline>
              <ListInlineItem>
                <Button small
                  disabled={item.isUpdating}
                  inverse
                  theme={item.data.isPublished ? 'error' : 'accent1'}
                  onClick={this.publish}>{item.data.isPublished ? 'Unpublish' : 'Publish'}</Button>
              </ListInlineItem>

              <ListInlineItem>
                <Button small
                  disabled={item.isUpdating || item.data.isPublished}
                  inverse
                  theme="error"
                  onClick={this.delete}>Delete</Button>
              </ListInlineItem>
            </ListInline>
          </Flex>
        </Block>

        <DirectoryItemTitle to={`${item.data.type.id}/${item.data._id}`}>{item.data.title}</DirectoryItemTitle>
      </DirectoryItem>
    )
  }
}

export default connect()(ArticleDirectoryItem)
