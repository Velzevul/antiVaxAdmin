import React from 'react'

import styles from './Page.css'

const Page = ({
  children,
  sidebar = false
}) => {
  return (
    <div className={`${styles.Page} ${sidebar ? styles.Page_sidebar : ''}`}>
      {children}
    </div>
  )
}

export default Page
