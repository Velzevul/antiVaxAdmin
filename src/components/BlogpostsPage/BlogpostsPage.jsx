import React from 'react'

import Sidebar from '../Sidebar'
import Page from '../Page'

const BlogpostsPage = ({
  children
}) => {
  return (
    <Page>
      <Sidebar navItems={sidebarNav} title="Questions" />

      {children}
    </Page>
  )
}

export default BlogpostsPage
