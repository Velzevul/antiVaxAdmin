import React from 'react'

import styles from './Table.css'

const Table = ({
  children,
  breadcrumbs = false
}) => {
  return (
    <div className={`${styles.Table} ${breadcrumbs ? styles.Table_breadcrumbs : ''}`}>
      {children}
    </div>
  )
}

export default Table
