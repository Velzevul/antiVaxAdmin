import React from 'react'

import styles from './ItemForm.css'

const ItemForm = ({
  children
}) => {
  return (
    <div className={styles.ItemForm}>{children}</div>
  )
}

const ItemFormHeader = ({
  children
}) => {
  return (
    <div className={styles.ItemForm__header}>{children}</div>
  )
}

const ItemFormBody = ({
  children
}) => {
  return (
    <div className={styles.ItemForm__body}>{children}</div>
  )
}

export {ItemForm, ItemFormHeader, ItemFormBody}
