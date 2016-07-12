import React from 'react'

import styles from './Directory.css'
import Title from '../Title'
import {Flex} from '../Layouts'

const Directory = ({
  title,
  items,
  actions = '',
  children
}) => {
  if (children) {
    return children
  } else {
    return (
      <div className={styles.Directory}>
        <div className={styles.Directory__header}>
          <Flex justifyContent="space-between">
            <Title label={title} />

            {actions}
          </Flex>
        </div>

        <div className={styles.Directory__body}>
          {items}
        </div>
      </div>
    )
  }
}

export default Directory
