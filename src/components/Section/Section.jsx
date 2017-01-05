import React from 'react'
import {connect} from 'react-redux'

import ArticlesList from '../ArticlesList'
import CustomPageHome from '../CustomPageHome'
import CustomPageAbout from '../CustomPageAbout'

const Section = ({
  section,
  parent,
  location,
  params,
  children
}) => {
  switch (section.data.sectionType) {
    case 'articles':
    case 'blogposts':
      return (
        <ArticlesList section={section}
          parent={parent}
          params={params}
          location={location}
          children={children} />
      )
    case 'custom':
      switch (section.data.customId) {
        case 'home':
          return (
            <CustomPageHome />
          )
        case 'about':
          return (
            <CustomPageAbout />
          )
        default:
          console.error(`unexpected custom page ${section.data.customId}`)
      }
      break
    default:
      console.error(`unexpected section type ${section.data.sectionType}`)
  }
}

export default connect(
  (state, ownProps) => {
    const {params} = ownProps
    const section = state.sections.items.find(s => s.data._id === params.sectionId)
    const parent = state.sections.items.find(s => s.data._id === section.data.parent)

    return {
      section,
      parent
    }
  }
)(Section)
