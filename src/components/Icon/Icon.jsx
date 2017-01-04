import React from 'react'

import styles from './Icon.css'

const Icon = ({
  type
}) => {
  let classNames = [styles.Icon]

  switch (type) {
    case 'envelope':
      classNames.push(styles.Icon_envelope)
      break
    case 'folder':
      classNames.push(styles.Icon_folder)
      break
    case 'file-code':
      classNames.push(styles.Icon_fileCode)
      break
    case 'file-text':
      classNames.push(styles.Icon_fileText)
      break
    case 'file-text-draft':
      classNames.push(styles.Icon_fileTextDraft)
      break
    case 'file-blogpost':
      classNames.push(styles.Icon_fileBlogpost)
      break
    case 'file-blogpost-draft':
      classNames.push(styles.Icon_fileBlogpostDraft)
      break
    case 'user':
      classNames.push(styles.Icon_user)
      break
    case 'user-admin':
      classNames.push(styles.Icon_userAdmin)
      break
    case 'user-disabled':
      classNames.push(styles.Icon_userDisabled)
      break
    case 'plus':
      classNames.push(styles.Icon_plus)
      break
  }

  return (
    <div className={classNames.join(' ')} />
  )
}

export default Icon
