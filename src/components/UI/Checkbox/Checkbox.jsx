import React from 'react'

const baseline = 0.750
import styles from './Checkbox.css'

class Checkbox extends React.Component {
  render () {
    const {
      checked,
      onChange,
      label = false,
      labelParams = {
        width: 8,
        padding: 2
      },
      disabled = false
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
        <div style={labelStyle} className={`${styles.Checkbox__label}`}>{label}</div>
      )
    }

    return (
      <label className={styles.Checkbox}>
        {labelEl}
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
