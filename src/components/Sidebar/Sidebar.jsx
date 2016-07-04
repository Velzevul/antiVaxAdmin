import React from 'react'

import styles from './Sidebar.css'
import {List, ListItem} from '../Layouts'

const QuestionsSidebar = ({
  active,
  items,
  onClick
}) => {
  return (
    <div className={styles.Sidebar}>
      <List>
        {items.map(item =>
          <ListItem key={item.id}>
            <button className={`${styles.Sidebar__item} ${item.id === active ? styles.Sidebar__item_active : ''}`}
              onClick={() => onClick(item)}>{item.content}</button>
          </ListItem>
        )}
      </List>
    </div>
  )
}

export default QuestionsSidebar
