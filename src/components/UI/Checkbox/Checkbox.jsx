import React from 'react'

import styles from './Checkbox.css'

class Checkbox extends React.Component {
  render () {
    const {checked, onChange, label = false, disabled = false} = this.props

    let labelEl = ''
    if (label) {
      labelEl = (
        <div className={styles.Checkbox__label}>{label}</div>
      )
    }

    return (
      <div className={styles.Checkbox}>
        {labelEl}
        <input type="checkbox"
          ref={el => { this._element = el }}
          checked={checked}
          disabled={disabled}
          onChange={() => onChange(this._element.checked)} />
      </div>
    )
  }
}

export default Checkbox
