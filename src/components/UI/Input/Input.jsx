import React from 'react'

const baseline = 0.750
import styles from './Input.css'

class Input extends React.Component {
  render () {
    const {
      value,
      onChange,
      label = null,
      labelParams = {
        width: 8,
        padding: 2
      },
      placeholder = '',
      prefix = null,
      type = 'text',
      disabled = false,
      error = null
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
        <div style={labelStyle} className={`${styles.Input__label}`}>{label}</div>
      )
    }

    let errorEl = ''
    if (error) {
      errorEl = (
        <div className={styles.Input__error}>{error}</div>
      )
    }

    let prefixEl = ''
    if (prefix) {
      prefixEl = (
        <div className={styles.Input__prefix}>{prefix}</div>
      )
    }

    return (
      <label className={`${styles.Input} ${error ? styles.Input_error : ''}`}>
        {labelEl}
        {prefixEl}
        <input className={styles.Input__input}
          type={type}
          ref={el => { this._element = el }}
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          onChange={() => onChange(this._element.value)} />
        {errorEl}
      </label>
    )
  }
}

export default Input
