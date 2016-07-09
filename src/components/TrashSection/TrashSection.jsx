import React from 'react'

import Section from '../Section'

const TrashSection = ({
  children
}) => {
  const navItems = [
    {
      id: 'trash/questions',
      label: 'Questions'
    },
    {
      id: 'trash/frequent',
      label: 'Frequent questions'
    },
    {
      id: 'trash/blogposts',
      label: 'Blogposts'
    },
    {
      id: 'trash/content',
      label: 'Content'
    }
  ]

  return (
    <Section title="Trash" navItems={navItems} children={children} />
  )
}

export default TrashSection
