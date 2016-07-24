import React from 'react'

import styles from './Counter.css'

const Counter = ({
  value,
  upCallback,
  downCallback
}) => {
  return (
    <div className={styles.Counter}>
      <button
        onClick={upCallback}
        className={styles.Counter__button}>&#9650;</button>
      <div className={styles.Counter__value}>{value}</div>
      <button
        onClick={downCallback}
        className={styles.Counter__button}>&#9660;</button>
    </div>
  )
}

export default Counter
