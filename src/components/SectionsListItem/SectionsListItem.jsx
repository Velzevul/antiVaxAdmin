import React from 'react'
import {connect} from 'react-redux'

import TableRow from '../TableRow'
import TableColumn from '../TableColumn'
import TableCell from '../TableCell'
import {ListInline, ListInlineItem} from '../Layouts'
import {LinkButton} from '../UI'
import Icon from '../Icon'

import styles from './SectionsListItem.css'

const SectionsListItem = ({
  section,
  parent,
  disableInteraction,
  navigationType
}) => {
  let sectionType = ''
  let sectionLink = ''
  let icon = ''
  if (section.data.sectionType === 'parent') {
    sectionType = 'parent'
    sectionLink = `/sections/${navigationType}/${section.data._id}`
    icon = 'folder'
  } else if (section.data.sectionType === 'custom') {
    sectionType = 'custom page'
    sectionLink = `/sections/${navigationType}/${section.data._id}/custom-page`
    icon = 'file-code'
  } else if (section.data.sectionType === 'articles') {
    sectionType = 'articles'
    sectionLink = `/sections/${navigationType}/${section.data._id}/articles`
    icon = 'file-text'
  } else if (section.data.sectionType === 'blogposts') {
    sectionType = 'blog'
    sectionLink = `/sections/${navigationType}/${section.data._id}/articles`
    icon = 'file-blogpost'
  }

  let editLink = `/sections/${navigationType}/${parent.data._id}/edit?sectionId=${section.data._id}`
  let url = ''
  if (parent.data.sectionType === 'meta') {
    url = `/${section.data.url}`
  } else {
    url = `/${parent.data.url}/${section.data.url}`
  }

  let actions = (
    <ListInlineItem>
      <div className={styles.SectionsListItem__actions}>
        <LinkButton to={editLink}>edit</LinkButton>
      </div>
    </ListInlineItem>
  )
  if (disableInteraction) {
    actions = ''
  }

  return (
    <div className={`${styles.SectionsListItem}
      ${disableInteraction ? '' : styles.SectionsListItem_interactive}`}>
      <TableRow interactive={!disableInteraction}>
        <TableColumn width="stretch">
          <ListInline>
            <ListInlineItem>
              <TableCell title
                to={disableInteraction ? null : sectionLink}>
                <ListInline>
                  <ListInlineItem>
                    <Icon type={icon} />
                  </ListInlineItem>

                  <ListInlineItem>
                    {section.data.title}
                  </ListInlineItem>
                </ListInline>
              </TableCell>
            </ListInlineItem>

            {actions}
          </ListInline>
        </TableColumn>

        <TableColumn width="30">
          <TableCell>{url}</TableCell>
        </TableColumn>

        <TableColumn width="10"
          align="right">
          <TableCell>{sectionType}</TableCell>
        </TableColumn>
      </TableRow>
    </div>
  )
}

export default connect(
  (state, ownProps) => {
    const section = state.sections.items.find(s => s.data._id === ownProps.sectionId)
    const parent = state.sections.items.find(s => s.data._id === section.data.parent)

    return {
      section,
      parent
    }
  }
)(SectionsListItem)
