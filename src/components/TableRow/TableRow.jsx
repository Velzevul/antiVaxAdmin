import React from 'react'

import styles from './TableRow.css'

const TableRow = ({
  children,
  interactive = false,
  heading = false,
  indented = false
}) => {
  let classNames = [styles.TableRow]
  if (heading) {
    classNames.push(styles.TableRow_heading)
  }
  if (interactive) {
    classNames.push(styles.TableRow_interactive)
  }
  if (indented) {
    classNames.push(styles.TableRow_indented)
  }

  return (
    <div className={classNames.join(' ')}>
      {children}
    </div>
  )
}

export default TableRow
