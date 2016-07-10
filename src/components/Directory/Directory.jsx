import React from 'react'

import styles from './Directory.css'

const Directory = ({
  title,
  items,
  children
}) => {
  if (children) {
    return children
  } else {
    return (
      <div className={styles.Directory}>
        <div className={styles.Directory__header}>
          <div className={styles.Directory__title}>{title}</div>
        </div>

        <div className={styles.Directory__body}>
          {items}
        </div>
      </div>
    )
  }
}

export default Directory
