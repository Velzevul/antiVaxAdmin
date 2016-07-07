import React from 'react'
import {Link} from 'react-router'

import styles from './Sidebar.css'
import {Block, List, ListItem} from '../Layouts'

const Sidebar = ({
  title,
  navItems
}) => {
  return (
    <aside className={styles.Sidebar}>
      <List>
        <Block n={1.5}>
          <h1 className={styles.Sidebar__title}>{title}</h1>
        </Block>

        {navItems.map(item =>
          <ListItem>
            <Link to={item.url}
              key={item.url}
              className={styles.Sidebar__item}
              activeClassName={styles.Sidebar__item_active}>{item.label}</Link>
          </ListItem>
        )}
      </List>
    </aside>
  )
}

export default Sidebar
