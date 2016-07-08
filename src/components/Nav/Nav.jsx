import React from 'react'
import {Link} from 'react-router'
import styles from './Nav.css'

const Nav = ({
  items
}) => {
  const navItems = items.map(i =>
    <Link key={i.id}
      className={styles.Nav__item}
      activeClassName={styles.Nav__item_active}
      to={`${ANTIVAX_ADMIN_PREFIX}/${i.id}`}>{i.label}</Link>
  )

  return (
    <div className={styles.Nav}>
      {navItems}
    </div>
  )
}

export default Nav
