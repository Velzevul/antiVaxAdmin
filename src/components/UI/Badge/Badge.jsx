import React from 'react'

import styles from './Badge.css'

const Badge = ({
  children,
  theme = 'accent1'
}) => {
  let classNames = [styles.Badge]

  switch (theme) {
    case 'accent2':
      classNames.push(styles.Badge_accent2)
      break
    case 'accent1':
    default:
      classNames.push(styles.Badge_accent1)
  }

  return (
    <div className={classNames.join(' ')}>{children}</div>
  )
}

export default Badge
