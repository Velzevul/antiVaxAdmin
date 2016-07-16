import React from 'react'

import styles from './Select.css'

class Select extends React.Component {
  render () {
    const {options, onChange, value, label} = this.props

    let labelEl = ''
    if (label) {
      labelEl = (
        <div className={styles.Select__label}>{label}</div>
      )
    }

    let inputLabel = 'None'
    if (value) {
      inputLabel = options.filter(o => o.id === value)[0].label
    }

    return (
      <div className={styles.Select}>
        {labelEl}

        <div className={styles.Select__wrap}>
          <div className={styles.Select__fake}>{inputLabel}</div>

          <select className={styles.Select__input}
            ref={el => { this._element = el }}
            value={value}
            onChange={(v) => onChange(v.target.value)}>
            {options.map(o =>
              <option key={o.id} value={o.id}>{o.label}</option>
            )}
            <option value={''}>None</option>
          </select>
        </div>
      </div>
    )
  }
}

export default Select
