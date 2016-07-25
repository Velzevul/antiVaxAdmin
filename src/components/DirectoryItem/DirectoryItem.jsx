import React from 'react'
import {Link} from 'react-router'

import styles from './DirectoryItem.css'

const DirectoryItem = ({
  children
}) => {
  return (
    <div className={styles.DirectoryItem}>{children}</div>
  )
}

const DirectoryItemTitle = ({
  children,
  to = null
}) => {
  if (to) {
    return (
      <Link
        to={to}
        className={`${styles.DirectoryItem__title} ${styles.DirectoryItem__title_link}`}
        dangerouslySetInnerHTML={{__html: children}} />
    )
  } else {
    return (
      <div
        className={styles.DirectoryItem__title}
        dangerouslySetInnerHTML={{__html: children}} />
    )
  }
}

const DirectoryItemInfo = ({
  children
}) => {
  return (
    <div className={styles.DirectoryItem__info}>{children}</div>
  )
}

export {DirectoryItem, DirectoryItemTitle, DirectoryItemInfo}
