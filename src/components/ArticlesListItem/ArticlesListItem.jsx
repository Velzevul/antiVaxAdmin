import React from 'react'
import {connect} from 'react-redux'
import Time from 'react-time'

import Badge from '../Badge'
import TableRow from '../TableRow'
import TableColumn from '../TableColumn'
import TableCell from '../TableCell'
import {ListInline, ListInlineItem} from '../Layouts'
import {LinkButton} from '../UI'

import styles from './ArticlesListItem.css'

const ArticlesListItem = ({
  article,
  parent,
  navigationType,
  disableInteraction
}) => {
  let articleUrl = `/${article.data.url}`
  if (article.data.articleType === 'heading') {
    articleUrl = ''
  }

  let actions = (
    <ListInlineItem>
      <div className={styles.ArticlesListItem__actions}>
        <LinkButton to={`/sections/${navigationType}/${parent.data._id}/articles/${article.data._id}`}>edit</LinkButton>
      </div>
    </ListInlineItem>
  )
  if (disableInteraction) {
    actions = ''
  }

  return (
    <div className={`${styles.ArticlesListItem}
      ${disableInteraction ? '' : styles.ArticlesListItem_interactive}
      ${article.data.articleType === 'heading' ? styles.ArticlesListItem_heading : ''}`}>
      <TableRow interactive={!disableInteraction}>
        <TableColumn width="stretch">
          <ListInline>
            <ListInlineItem>
              <TableCell title>
                {article.data.title}
              </TableCell>
            </ListInlineItem>

            {actions}
          </ListInline>
        </TableColumn>

        <TableColumn width="27">
          <TableCell>{articleUrl}</TableCell>
        </TableColumn>

        <TableColumn width="3">
          {article.data.isPublished
            ? ''
            : <Badge label="Draft" color="red" />
          }
        </TableColumn>

        <TableColumn width="10"
          align="right">
          <TableCell>
            {article.data.articleType === 'heading'
              ? ''
              : (
                <Time value={article.data.lastModifiedAt} format="h:mm A on MMM Do" />
              )
            }
          </TableCell>
        </TableColumn>
      </TableRow>
    </div>
  )
}

export default connect(
  (state, ownProps) => {
    const article = state.articles.items.find(a => a.data._id === ownProps.articleId)
    const parent = state.sections.items.find(s => s.data._id === article.data.parent)

    return {
      article,
      parent
    }
  }
)(ArticlesListItem)
