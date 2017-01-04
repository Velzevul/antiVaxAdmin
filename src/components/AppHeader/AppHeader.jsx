import React from 'react'

import UserInfo from '../UserInfo'
import Nav from '../Nav'
import {ListInline, ListInlineItem} from '../Layouts'

import styles from './AppHeader.css'

const AppHeader = () => {
  return (
    <div className={styles.AppHeader}>
      <ListInline n={2}>
        <ListInlineItem n={2}>
          <div className={styles.AppHeader__sitename}>Vaccine Answers Admin</div>
        </ListInlineItem>

        <ListInlineItem n={2}>
          <Nav />
        </ListInlineItem>
      </ListInline>

      <UserInfo />
    </div>
  )
}

export default AppHeader
