import React from 'react'

import {Block} from '../Layouts'
import Nav from '../Nav'
import styles from './Section.css'

const Section = ({
  title,
  children,
  navItems
}) => {
  return (
    <div className={styles.Section}>
      <div className={styles.Section__sidebar}>
        <Block n={2}>
          <div className={styles.Section__title}>{title}</div>
        </Block>

        <Nav items={navItems} />
      </div>

      {children}
    </div>
  )
}

export default Section
