import React from 'react'

import styles from './Checkbox.css'

class Checkbox extends React.Component {
  render () {
    const {
      checked,
      onChange,
      label,
      labelWidth = 8,
      disabled = false
    } = this.props

    return (
      <label className={styles.Checkbox}>
        {label
          ? <div style={{width: `${labelWidth}rem`}} className={styles.Checkbox__label}>{label}</div>
          : ''
        }

        <input className={styles.Checkbox__input}
          type="checkbox"
          ref={el => { this._element = el }}
          checked={checked}
          disabled={disabled}
          onChange={() => onChange(this._element.checked)} />
      </label>
    )
  }
}

export default Checkbox
