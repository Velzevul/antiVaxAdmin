import React from 'react'

import styles from './Input.css'

class Input extends React.Component {
  render () {
    const {value, onChange, label = null, placeholder = '',
      prefix = null, type = 'text', disabled = false,
      error = null} = this.props

    let labelEl = ''
    if (label) {
      labelEl = (
        <div className={styles.Input__label}>{label}</div>
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
        <input type={type}
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
