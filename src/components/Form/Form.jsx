import React from 'react'

import styles from './Form.css'

const Form = ({
  children
}) => {
  return (
    <div className={styles.Form}>
      {children}
    </div>
  )
}

const FormHeader = ({
  children
}) => {
  return (
    <div className={styles.Form__header}>
      {children}
    </div>
  )
}

const FormBody = ({
  children
}) => {
  return (
    <div className={styles.Form__body}>
      {children}
    </div>
  )
}

const FormFooter = ({
  children
}) => {
  return (
    <div className={styles.Form__footer}>
      {children}
    </div>
  )
}

export {Form, FormHeader, FormBody, FormFooter}
