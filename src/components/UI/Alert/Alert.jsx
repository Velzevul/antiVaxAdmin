import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const baseline = 0.750
import styles from './Alert.css'
import {Block} from '../../Layouts'

const Alert = ({
  message,
  theme = 'default',
  multipliers = {
    padding: {
      vertical: 1,
      horizontal: 2
    }
  }
}) => {
  const messageStyle = {
    padding: `${multipliers.padding.vertical * baseline}rem ${multipliers.padding.horizontal * baseline}rem`
  }

  const messageClassNames = [styles.Alert__message]

  switch (theme) {
    case 'error':
      messageClassNames.push(styles.Alert__message_error)
      break
    case 'default':
    default:
      messageClassNames.push(styles.Alert__message_default)
  }

  return (
    <div className={styles.Alert}>
      <ReactCSSTransitionGroup transitionName="alert" transitionEnterTimeout={200} transitionLeaveTimeout={200}>
        {message
          ? <Block>
            <div style={messageStyle} className={messageClassNames.join(' ')}>{message}</div>
          </Block>
          : null
        }
      </ReactCSSTransitionGroup>
    </div>
  )
}

export default Alert
