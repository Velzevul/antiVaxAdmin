import React from 'react'

import Badge from '../Badge'
import TableRow from '../TableRow'
import TableColumn from '../TableColumn'
import TableCell from '../TableCell'
import {LinkButton} from '../UI'
import {Flex} from '../Layouts'
import Icon from '../Icon'

import styles from './ArticlesListItem.css'

const ArticlesListItem = ({
  article,
  section,
  disableInteraction,
  params
}) => {
  let icon = null
  switch (article.data.articleType) {
    case 'article':
      icon = article.data.isPublished
        ? 'file-text'
        : 'file-text-draft'
      break
    case 'blogpost':
      icon = article.data.isPublished
        ? 'file-blogpost'
        : 'file-blogpost-draft'
      break
    case 'heading':
    default:
      icon = null
  }

  let url = `/${article.data.url}`
  if (article.data.articleType === 'heading') {
    url = ''
  }

  let actions = ''
  if (!disableInteraction) {
    actions = (
      <div className={styles.ArticlesListItem__actions}>
        <LinkButton to={`/${params.metaSectionUrl}/${section.data._id}/articles/${article.data._id}`}>edit</LinkButton>
      </div>
    )
  }

  return (
    <div className={`${styles.ArticlesListItem}
      ${disableInteraction ? '' : styles.ArticlesListItem_interactive}
      ${article.data.articleType === 'heading' ? styles.ArticlesListItem_heading : ''}`}>
      <TableRow interactive={!disableInteraction}>
        {icon
          ? (
            <TableColumn>
              <Icon type={icon} />
            </TableColumn>
          )
          : ''
        }

        <TableColumn width="stretch">
          <TableCell title>
            {article.data.title}
          </TableCell>
        </TableColumn>

        <TableColumn width="25">
          <TableCell>{url}</TableCell>
        </TableColumn>

        <TableColumn width="3">
          {article.data.isPublished
            ? ''
            : <Badge label="Draft" color="red" />
          }
        </TableColumn>

        <TableColumn width="7"
          last>
          <Flex justifyContent="flex-end">
            {actions}
          </Flex>
        </TableColumn>
      </TableRow>
    </div>
  )
}

export default ArticlesListItem
