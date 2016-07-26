import React from 'react'
import {Link} from 'react-router'
import styles from './Nav.css'

const Nav = ({
  items
}) => {
  const navItems = items.map(i => {
    if (i.heading) {
      return (
        <div key={i.id} className={styles.Nav__heading}>{i.label}</div>
      )
    } else {
      return (
        <Link key={i.id}
          className={styles.Nav__item}
          activeClassName={styles.Nav__item_active}
          to={`${PUBLIC_PATH}/${i.id}`}>{i.label}</Link>
      )
    }
  })

  return (
    <div className={styles.Nav}>
      {navItems}
    </div>
  )
}

export default Nav
