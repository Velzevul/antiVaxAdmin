import React from 'react'

import styles from './Wrapper.css'

const Wrapper = ({
  dimmed,
  children
}) => {
  return (
    <div className={`${styles.Wrapper}
      ${dimmed ? styles.Wrapper_dimmed : ''}`}>
      {children}
    </div>
  )
}

export default Wrapper
