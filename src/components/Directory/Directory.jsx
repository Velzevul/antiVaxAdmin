import React from 'react'

import styles from './Directory.css'
import Title from '../Title'

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
          <Title label={title} />
        </div>

        <div className={styles.Directory__body}>
          {items}
        </div>
      </div>
    )
  }
}

export default Directory
