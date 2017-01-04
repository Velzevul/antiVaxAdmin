import React from 'react'

import styles from './Badge.css'

const Badge = ({
  label,
  color = 'blue'
}) => {
  let classNames = [styles.Badge]
  switch (color) {
    case 'red':
      classNames.push(styles.Badge_red)
      break
    case 'green':
      classNames.push(styles.Badge_green)
      break
    case 'blue':
    default:
      classNames.push(styles.Badge_blue)
  }

  return (
    <div className={classNames.join(' ')}>{label}</div>
  )
}

export default Badge
