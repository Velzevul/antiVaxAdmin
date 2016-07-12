import React from 'react'

import {Block} from '../Layouts'
import Nav from '../Nav'
import Title from '../Title'
import styles from './Section.css'

const Section = ({
  title,
  children,
  navItems
}) => {
  return (
    <div className={styles.Section}>
      <div className={styles.Section__sidebar}>
        <Block n={2.5}>
          <Title label={title} />
        </Block>

        <Nav items={navItems} />
      </div>

      {children}
    </div>
  )
}

export default Section
