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
      }
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

    const selectedOption = options.filter(o => o.id === value)[0]
    const inputLabel = selectedOption ? selectedOption.label : 'None'

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
