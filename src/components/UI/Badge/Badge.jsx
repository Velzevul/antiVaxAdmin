import React from 'react'

const baseline = 0.750
import styles from './Badge.css'

const Badge = ({
  label,
  theme = 'default',
  small = false
}) => {
  let style = {
    lineHeight: `${3 * baseline}rem`
  }

  if (small) {
    style.lineHeight = `${2.5 * baseline}rem`
  }

  let classNames = [styles.Badge]

  switch (theme) {
    case 'accent1':
      classNames.push(styles.Badge_accent1)
      break
    case 'accent2':
      classNames.push(styles.Badge_accent2)
      break
    case 'accent3':
      classNames.push(styles.Badge_accent3)
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
    <div style={style} className={classNames.join(' ')}>{label}</div>
  )
}

export default Badge
