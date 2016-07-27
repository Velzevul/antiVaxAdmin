export const blogposts = {
  id: 'blogposts',
  label: 'Blogposts'
}

export const faqs = {
  id: 'faqs',
  label: 'FAQs'
}

export const sections = [
  {
    id: 'about-vaccines',
    label: 'About Vaccines'
  },
  {
    id: 'vaccine-safety',
    label: 'Vaccine Safety'
  },
  {
    id: 'vaccination-schedule',
    label: 'Vaccination Schedule'
  },
  {
    id: 'about-project',
    label: 'About Project'
  },
  {
    id: 'additional-information',
    label: 'Additional Information'
  }
]

export const attachments = [
  {
    id: 'diseases',
    label: 'Diseases'
  },
  {
    id: 'vaccines',
    label: 'Vaccines'
  },
  {
    id: 'ingredients',
    label: 'Ingredients'
  },
  {
    id: 'schedule',
    label: 'Vaccination Schedule'
  }
]

export const isSection = (id) => {
  return sections.map(s => s.id).indexOf(id) !== -1
}

export const isBlogpost = (id) => {
  return id === blogposts.id
}

export const isAttachment = (id) => {
  return attachments.map(c => c.id).indexOf(id) !== -1
}

export const isFaq = (id) => {
  return id === faqs.id
}

export const getCurrentSection = (id) => {
  return [
    ...sections,
    ...attachments,
    blogposts,
    faqs
  ].filter(s => s.id === id)[0]
}
