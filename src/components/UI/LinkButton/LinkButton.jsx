import React from 'react'
import {Link} from 'react-router'

import styles from './LinkButton.css'

const LinkButton = ({
  children,
  onClick,
  disabled = false,
  to = null,
  href = null,
  color = 'blue'
}) => {
  let classNames = [styles.LinkButton]

  switch (color) {
    case 'red':
      classNames.push(styles.LinkButton_red)
      break
    case 'green':
      classNames.push(styles.LinkButton_green)
      break
    case 'blue':
    default:
      classNames.push(styles.LinkButton_blue)
      break
  }

  if (to) {
    return (
      <Link disabled={disabled} className={classNames.join(' ')} to={to}>{children}</Link>
    )
  } else if (href) {
    return (
      <a disabled={disabled} className={classNames.join(' ')} href={href}>{children}</a>
    )
  } else {
    return (
      <button disabled={disabled} className={classNames.join(' ')} onClick={onClick}>{children}</button>
    )
  }
}

export default LinkButton
