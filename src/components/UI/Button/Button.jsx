import React from 'react'
import {Link} from 'react-router'

const baseline = 0.750
import styles from './Button.css'

const Button = ({
  children,
  onClick,
  disabled = false,
  link = false,
  to = null,
  inverse = false,
  theme = 'default',
  multipliers = {
    padding: {
      vertical: 0.75,
      horizontal: 2
    },
    fontSize: 1.167,
    lineHeight: 1.5
  },
  extraClassNames
}) => {
  let className = []

  if (link) {
    className.push(styles.Link)
  } else {
    className.push(inverse ? styles.InverseButton : styles.Button)

    switch (theme) {
      case 'primary':
        className.push(inverse ? styles.InverseButton_primary : styles.Button_primary)
        break
      case 'default':
      default:
        className.push(inverse ? styles.InverseButton_default : styles.Button_default)
        break
    }
  }

  const style = {
    padding: `${baseline * multipliers.padding.vertical}rem ${baseline * multipliers.padding.horizontal}rem`,
    lineHeight: `${multipliers.lineHeight * baseline}rem`,
    fontSize: `${multipliers.fontSize * baseline}rem`
  }

  if (to) {
    return (
      <Link style={style} disabled={disabled} className={`${className.join(' ')} ${extraClassNames}`} to={to}>{children}</Link>
    )
  } else {
    return (
      <button style={style} disabled={disabled} className={`${className.join(' ')} ${extraClassNames}`} onClick={onClick}>{children}</button>
    )
  }
}

export default Button
