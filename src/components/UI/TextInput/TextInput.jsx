import React from 'react'

import InputLabel from '../InputLabel'
const baseline = 0.750
import styles from './TextInput.css'

class TextInput extends React.Component {
  constructor (props) {
    super(props)

    this.changeCallback = this.changeCallback.bind(this)
  }

  changeCallback () {
    const value = this._element.value
    const {onChange} = this.props

    onChange(value)
  }

  render () {
    const {label, error, value, placeholder, type, disabled = false} = this.props
    const {multipliers = {
      padding: {
        vertical: 1,
        horizontal: 2
      }
    }} = this.props

    const style = {
      padding: `${baseline * multipliers.padding.vertical}rem ${baseline * multipliers.padding.horizontal}rem`
    }

    return (
      <label className={styles.TextInput}>
        {label
          ? <InputLabel label={label} error={error} />
          : null
        }

        <input style={style}
          ref={el => { this._element = el }}
          type={type}
          value={value}
          className={`${styles.TextInput__input} ${error ? styles.TextInput__input_error : null}`}
          disabled={disabled}
          onChange={this.changeCallback}
          placeholder={placeholder} />
      </label>
    )
  }
}

export default TextInput
