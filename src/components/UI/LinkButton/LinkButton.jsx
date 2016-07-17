import React from 'react'
import {Link} from 'react-router'

import styles from './LinkButton.css'

const LinkButton = ({
  children,
  onClick,
  small = false,
  disabled = false,
  to = null,
  href = null,
  theme = 'accent1'
}) => {
  let classNames = [styles.Link]

  if (small) {
    classNames.push(styles.Link_small)
  }

  switch (theme) {
    case 'accent2':
      classNames.push(styles.Link_accent2)
      break
    case 'error':
      classNames.push(styles.Link_error)
      break
    case 'accent1':
    default:
      classNames.push(styles.Link_accent1)
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
