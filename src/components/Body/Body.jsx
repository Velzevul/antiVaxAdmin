import React from 'react'

import styles from './Body.css'

const Body = ({
  content
}) => {
  return (
    <div className={styles.Body}>{content}</div>
  )
}

export default Body
