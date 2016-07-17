import React from 'react'

const baseline = 0.750
import styles from './Select.css'

class Select extends React.Component {
  render () {
    const {
      options,
      onChange,
      value,
      label,
      disabled,
      labelParams = {
        width: 8,
        padding: 2
      },
      allowEmpty = true
    } = this.props

    let labelEl = ''
    if (label) {
      let labelStyle = {
        paddingRight: `${labelParams.padding * baseline}rem`
      }
      if (labelParams.width) {
        labelStyle.width = `${labelParams.width * baseline}rem`
        labelStyle.textAlign = 'right'
      }

      labelEl = (
        <div style={labelStyle} className={`${styles.Select__label}`}>{label}</div>
      )
    }

    let inputLabel = ''
    if (value) {
      inputLabel = options.filter(o => o.id === value)[0].label
    } else if (allowEmpty) {
      inputLabel = 'None'
    } else {
      inputLabel = options[0].label
    }

    let noneOption = ''
    if (allowEmpty) {
      noneOption = (
        <option value={''}>None</option>
      )
    }

    return (
      <div className={styles.Select}>
        {labelEl}

        <div className={styles.Select__wrap}>
          <div className={styles.Select__fake}>{inputLabel}</div>

          <select className={styles.Select__input}
            ref={el => { this._element = el }}
            value={value}
            disabled={disabled}
            onChange={(v) => onChange(v.target.value)}>
            {options.map(o =>
              <option key={o.id} value={o.id}>{o.label}</option>
            )}
            {noneOption}
          </select>
        </div>
      </div>
    )
  }
}

export default Select
