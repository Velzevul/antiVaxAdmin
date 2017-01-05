import React from 'react'

import TableRow from '../TableRow'
import TableColumn from '../TableColumn'
import TableCell from '../TableCell'
import {Flex} from '../Layouts'
import {LinkButton} from '../UI'
import Icon from '../Icon'

import styles from './SectionsListItem.css'

const SectionsListItem = ({
  section,
  parent,
  disableInteraction
}) => {
  let icon = null
  if (section.data.sectionType === 'parent') {
    icon = 'folder'
  } else if (section.data.sectionType === 'custom') {
    icon = 'file-code'
  } else if (section.data.sectionType === 'articles') {
    icon = 'file-text'
  } else if (section.data.sectionType === 'blogposts') {
    icon = 'file-blogpost'
  }

  let url = ''
  if (parent.data.sectionType === 'meta') {
    url = `/${section.data.url}`
  } else {
    url = `/${parent.data.url}/${section.data.url}`
  }

  let actions = ''
  if (!disableInteraction) {
    if (section.data.sectionType === 'parent') {
      actions = (
        <div className={styles.SectionsListItem__actions}>
          <Flex justifyContent="flex-end">
            <LinkButton to={`/sections/new?parentId=${section.data._id}`}>add new sub-section</LinkButton>

            <LinkButton to={`/sections/${section.data._id}/edit`}>edit</LinkButton>
          </Flex>
        </div>
      )
    } else {
      actions = (
        <div className={styles.SectionsListItem__actions}>
          <Flex justifyContent="flex-end">
            <LinkButton to={`/sections/${section.data._id}/edit`}>edit</LinkButton>
          </Flex>
        </div>
      )
    }
  }

  let sectionLink = ''
  if (!disableInteraction && section.data.sectionType !== 'parent') {
    sectionLink = `/sections/${section.data._id}`
  }

  return (
    <div className={`${styles.SectionsListItem}
      ${disableInteraction ? '' : styles.SectionsListItem_interactive}`}>
      <TableRow interactive={!disableInteraction}
        indented={parent.data.sectionType !== 'meta'}>
        <TableColumn>
          <Icon type={icon} />
        </TableColumn>

        <TableColumn width="stretch">
          <TableCell title
            to={sectionLink}>
            {section.data.title}
          </TableCell>
        </TableColumn>

        <TableColumn width="20">
          <TableCell>{url}</TableCell>
        </TableColumn>

        <TableColumn width="15"
          last>
          {actions}
        </TableColumn>
      </TableRow>
    </div>
  )
}

export default SectionsListItem
