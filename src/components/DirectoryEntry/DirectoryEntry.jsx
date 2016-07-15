import React from 'react'
import {Link} from 'react-router'

import styles from './DirectoryEntry.css'

const DirectoryEntry = ({
  children
}) => {
  return (
    <div className={styles.DirectoryEntry}>{children}</div>
  )
}

const DirectoryEntryTitle = ({
  children,
  to = null
}) => {
  if (to) {
    return (
      <Link to={to} className={`${styles.DirectoryEntry__title} ${styles.DirectoryEntry__title_link}`}>{children}</Link>
    )
  } else {
    return (
      <div className={styles.DirectoryEntry__title}>{children}</div>
    )
  }
}

const DirectoryEntryInfo = ({
  children
}) => {
  return (
    <div className={styles.DirectoryEntry__info}>{children}</div>
  )
}

export {DirectoryEntry, DirectoryEntryTitle, DirectoryEntryInfo}
