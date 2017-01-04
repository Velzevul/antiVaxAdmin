import React from 'react'

import styles from './Input.css'

class Input extends React.Component {
  render () {
    const {
      value,
      onChange,
      label = null,
      labelWidth = 8,
      placeholder = '',
      type = 'text',
      disabled = false,
      error = null
    } = this.props

    let errorEl = ''
    if (error) {
      errorEl = (
        <div className={styles.Input__error}>{error}</div>
      )
    }

    return (
      <label className={`${styles.Input} ${error ? styles.Input_error : ''}`}>
        {label
          ? <div style={{width: `${labelWidth}rem`}} className={styles.Input__label}>{label}</div>
          : ''
        }

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
