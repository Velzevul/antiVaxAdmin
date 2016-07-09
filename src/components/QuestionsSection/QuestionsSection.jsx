import React from 'react'

import Section from '../Section'

const QuestionsSection = ({
  children
}) => {
  const navItems = [
    {
      id: 'questions/inbox',
      label: 'Inbox'
    },
    {
      id: 'questions/frequent',
      label: 'Frequent'
    }
  ]

  return (
    <Section title="Questions" navItems={navItems} children={children} />
  )
}

export default QuestionsSection
