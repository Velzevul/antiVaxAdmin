import React from 'react'

import styles from './Directory.css'

const Directory = ({
  title,
  items,
  children
}) => {
  return (
    <div className={styles.Directory}>
      <div className={styles.Directory__header}>
        <div className={styles.Directory__title}>{title}</div>
      </div>

      <div className={styles.Directory__body}>
        {items}
      </div>

      {children}
    </div>
  )
}

export default Directory
