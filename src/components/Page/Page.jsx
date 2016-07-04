import React from 'react'

import styles from './Page.css'

const Page = ({
  content
}) => {
  return (
    <div className={styles.Page}>{content}</div>
  )
}

export default Page
