import React from 'react'
import {Link} from 'react-router'

import {Flex} from '../Layouts'

import styles from './Breadcrumbs.css'

const Breadcrumbs = ({
  items,
  disableInteraction
}) => {
  return (
    <div className={styles.Breadcrumbs}>
      <Flex alignItems="flex-end">
        {items.map((i, index) => {
          if (disableInteraction) {
            return (
              <div key={index}
                className={styles.Breadcrumbs__item}>{i.label}</div>
            )
          } else {
            return (
              <Link key={index}
                to={i.path}
                className={`${styles.Breadcrumbs__item}
                ${styles.Breadcrumbs__item_link}`}>{i.label}</Link>
            )
          }
        })}
      </Flex>
    </div>
  )
}

export default Breadcrumbs
