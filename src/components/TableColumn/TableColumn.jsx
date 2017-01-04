import React from 'react'

import styles from './TableColumn.css'

const TableColumn = ({
  children,
  width,
  last = false
}) => {
  let style = {
    paddingRight: last ? 0 : '0.750rem'
  }
  if (width === 'stretch') {
    style.flex = 1
  } else {
    style.width = `${width}rem`
  }

  return (
    <div style={style}
      className={styles.TableColumn}>
      {children}
    </div>
  )
}

export default TableColumn
