import React from 'react'
import {Link} from 'react-router'

import styles from './IconButton.css'

const IconButton = ({
  type,
  onClick,
  disabled = false,
  to = null,
  href = null
}) => {
  let className = [styles.IconButton]

  switch (type) {
    case 'delete':
      className.push(styles.IconButton_delete)
      break
    case 'close':
      className.push(styles.IconButton_close)
      break
  }

  if (to) {
    return (
      <Link disabled={disabled}
        className={className.join(' ')}
        to={to} />
    )
  } else if (href) {
    return (
      <a disabled={disabled}
        className={className.join(' ')}
        href={href} />
    )
  } else {
    return (
      <button disabled={disabled}
        className={className.join(' ')}
        onClick={onClick} />
    )
  }
}

export default IconButton
