import React from 'react'
import {Link} from 'react-router'

const baseline = 0.750
import styles from './Button.css'

const Button = ({
  children,
  onClick,
  disabled = false,
  to = null,
  href = null,
  color = 'blue'
}) => {
  let className = [styles.Button]

  switch (color) {
    case 'red':
      className.push(styles.Button_red)
      break
    case 'green':
      className.push(styles.Button_green)
      break
    case 'blue':
    default:
      className.push(styles.Button_blue)
      break
  }

  if (to) {
    return (
      <Link disabled={disabled} className={className.join(' ')} to={to}>{children}</Link>
    )
  } else if (href) {
    return (
      <a disabled={disabled} className={className.join(' ')} href={href}>{children}</a>
    )
  } else {
    return (
      <button disabled={disabled} className={className.join(' ')} onClick={onClick}>{children}</button>
    )
  }
}

export default Button
