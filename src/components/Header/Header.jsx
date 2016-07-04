import React from 'react'

import {Flex, ListInline, ListInlineItem} from '../Layouts'
import CurrentUser from '../CurrentUser'
import HeaderNav from '../HeaderNav'
import styles from './Header.css'

const Header = () => {
  return (
    <div className={styles.Header}>
      <Flex justifyContent="space-between" alignItems="center">
        <ListInline n={2.5} alignItems="center">
          <ListInlineItem n={2.5}>
            <div className={styles.Header__title}>
              AntiVax admin panel
            </div>
          </ListInlineItem>

          <ListInlineItem n={2.5}>
            <HeaderNav />
          </ListInlineItem>
        </ListInline>

        <div>
          <CurrentUser />
        </div>
      </Flex>
    </div>
  )
}

export default Header
