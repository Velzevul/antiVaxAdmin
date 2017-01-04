import React from 'react'

import styles from './Select.css'

class Select extends React.Component {
  render () {
    const {
      options,
      onChange,
      value,
      label,
      disabled
    } = this.props

    const selectedOption = options.find(o => o.id === value)
    const inputLabel = selectedOption ? selectedOption.label : 'None'

    return (
      <div className={styles.Select}>
        <div className={`${styles.Select__label}`}>{label}</div>

        <div className={styles.Select__wrap}>
          <div className={styles.Select__fake}>{inputLabel}</div>

          <select className={styles.Select__input}
            ref={el => { this._element = el }}
            value={value}
            disabled={disabled}
            onChange={(v) => onChange(v.target.value)}>
            {options.map((o, index) =>
              <option key={index} value={o.id}>{o.label}</option>
            )}
          </select>
        </div>
      </div>
    )
  }
}

export default Select
