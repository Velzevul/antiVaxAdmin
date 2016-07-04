import React from 'react'

const baseline = 0.750
import styles from './Spinner.css'

const Spinner = ({
  multipliers = {
    minHeight: 30,
    __inner: {
      width: 5,
      height: 5
    }
  }
}) => {
  const style = {
    minHeight: `${baseline * multipliers.minHeight}rem`
  }

  const __innerStyle = {
    width: `${baseline * multipliers.__inner.width}rem`,
    height: `${baseline * multipliers.__inner.height}rem`
  }

  return (
    <div style={style} className={styles.Spinner}>
      <div style={__innerStyle} className={styles.Spinner__inner}>
        <div className={`${styles.Spinner__circle} ${styles.Spinner__circle1}`}></div>
        <div className={`${styles.Spinner__circle} ${styles.Spinner__circle2}`}></div>
        <div className={`${styles.Spinner__circle} ${styles.Spinner__circle3}`}></div>
        <div className={`${styles.Spinner__circle} ${styles.Spinner__circle4}`}></div>
        <div className={`${styles.Spinner__circle} ${styles.Spinner__circle5}`}></div>
        <div className={`${styles.Spinner__circle} ${styles.Spinner__circle6}`}></div>
        <div className={`${styles.Spinner__circle} ${styles.Spinner__circle7}`}></div>
        <div className={`${styles.Spinner__circle} ${styles.Spinner__circle8}`}></div>
        <div className={`${styles.Spinner__circle} ${styles.Spinner__circle9}`}></div>
        <div className={`${styles.Spinner__circle} ${styles.Spinner__circle10}`}></div>
        <div className={`${styles.Spinner__circle} ${styles.Spinner__circle11}`}></div>
        <div className={`${styles.Spinner__circle} ${styles.Spinner__circle12}`}></div>
      </div>
    </div>
  )
}

export default Spinner
