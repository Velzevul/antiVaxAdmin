import React from 'react'

import styles from './Badge.css'

const Badge = ({
  label,
  theme = 'default'
}) => {
  let classNames = [styles.Badge]
  switch (theme) {
    case 'accent1':
      classNames.push(styles.Badge_accent1)
      break
    case 'accent2':
      classNames.push(styles.Badge_accent2)
      break
    case 'error':
      classNames.push(styles.Badge_error)
      break
    case 'success':
      classNames.push(styles.Badge_success)
      break
    case 'default':
    default:
      classNames.push(styles.Badge_default)
  }

  return (
    <div className={classNames.join(' ')}>{label}</div>
  )
}

export default Badge
