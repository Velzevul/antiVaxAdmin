import React from 'react'

import styles from './TableColumn.css'

const TableColumn = ({
  children,
  width,
  align = 'left'
}) => {
  let style = {
    textAlign: align
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
