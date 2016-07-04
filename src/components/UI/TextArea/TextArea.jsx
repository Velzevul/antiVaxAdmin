import React from 'react'

import InputLabel from '../InputLabel'
const baseline = 0.750
import styles from './TextArea.css'

class TextArea extends React.Component {
  constructor (props) {
    super(props)

    this.onChange = this.onChange.bind(this)
  }

  onChange () {
    const value = this._element.value
    const {changeCallback} = this.props

    changeCallback(value)
  }

  render () {
    const {label, error, value, placeholder, disabled = false} = this.props
    const {multipliers = {
      padding: {
        vertical: 1,
        horizontal: 2
      }
    }} = this.props

    const style = {
      padding: `${baseline * multipliers.padding.vertical} ${baseline * multipliers.padding.horizontal}`
    }

    return (
      <label className={styles.TextArea}>
        {label
          ? <InputLabel label={label} error={error} />
          : null
        }

        <textarea style={style}
          ref={el => { this._element = el }}
          value={value}
          className={`${styles.TextArea__input} ${error ? styles.TextArea__input_error : null}`}
          disabled={disabled}
          rows={5}
          type="text"
          onChange={this.onChange}
          placeholder={placeholder}></textarea>
      </label>
    )
  }
}

export default TextArea
