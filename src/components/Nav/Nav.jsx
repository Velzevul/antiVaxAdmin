import React from 'react'
import {Link} from 'react-router'

import {ListInline, ListInlineItem} from '../Layouts'

import styles from './Nav.css'

const Nav = () => {
  const items = [
    {
      label: 'Questions',
      url: '/questions'
    },
    {
      label: 'Sections',
      url: '/sections'
    },
    {
      label: 'Users',
      url: '/users'
    },
    {
      label: 'Search Index',
      url: '/search-index'
    }
  ]

  return (
    <div className={styles.Nav}>
      <ListInline n={0.5}>
        {items.map(i => {
          return (
            <ListInlineItem n={0.5} key={i.url}>
              <Link className={styles.Nav__item}
                activeClassName={styles.Nav__item_active}
                to={i.url}>{i.label}</Link>
            </ListInlineItem>
          )
        })}
      </ListInline>
    </div>
  )
}

export default Nav
