import React from 'react'

import styles from './Alert.css'

const Alert = ({
  message,
  type = 'log'
}) => {
  const messageClassNames = [styles.Alert__message]

  switch (type) {
    case 'error':
      messageClassNames.push(styles.Alert__message_error)
      break
    case 'log':
    default:
      messageClassNames.push(styles.Alert__message_log)
  }

  return (
    <div className={styles.Alert}>
      {message
        ? <div className={messageClassNames.join(' ')}>{message}</div>
        : ''
      }
    </div>
  )
}

export default Alert
