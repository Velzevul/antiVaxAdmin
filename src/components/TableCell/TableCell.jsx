import React from 'react'
import {Link} from 'react-router'

import styles from './TableCell.css'

const TableCell = ({
  children,
  title = false,
  heading = false,
  to = null
}) => {
  let classNames = []

  if (heading) {
    classNames.push(styles.TableHeadingCell)

    if (title) {
      classNames.push(styles.TableHeadingCell_title)
    }
  } else {
    classNames.push(styles.TableCell)

    if (title) {
      classNames.push(styles.TableCell_title)
    }
  }

  if (to) {
    return (
      <Link to={to}
        className={classNames.join(' ')}>
        {children}
      </Link>
    )
  } else {
    return (
      <div className={classNames.join(' ')}>
        {children}
      </div>
    )
  }
}

export default TableCell
