import React from 'react'

import styles from './Title.css'

const Title = ({
  label,
  theme = 'default'
}) => {
  let classNames = [styles.Title]

  switch (theme) {
    case 'success':
      classNames.push(styles.Title_success)
      break
    case 'error':
      classNames.push(styles.Title_error)
      break
    case 'default':
    default:
      classNames.push(styles.Title_default)
  }

  return (
    <div className={classNames.join(' ')}>{label}</div>
  )
}

export default Title
