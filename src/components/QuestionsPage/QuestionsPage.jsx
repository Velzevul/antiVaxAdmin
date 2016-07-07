import React from 'react'

import Sidebar from '../Sidebar'
import Page from '../Page'

const QuestionsPage = ({
  children
}) => {
  const sidebarNav = [
    {
      url: 'questions/inbox',
      label: 'Inbox'
    },
    {
      url: 'questions/frequent',
      label: 'Frequent'
    }
  ]

  return (
    <Page sidebar>
      <Sidebar navItems={sidebarNav} title="Questions" />

      {children}
    </Page>
  )
}

export default QuestionsPage
