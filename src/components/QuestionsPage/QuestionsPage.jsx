import React from 'react'
import {connect} from 'react-redux'

import {Spinner, Badge} from '../UI'
import Page from '../Page'
import Sidebar from '../Sidebar'
import QuestionsFrequent from '../QuestionsFrequent'
import QuestionsInbox from '../QuestionsInbox'
import {setLocation} from '../../store/locationActions'

class QuestionsPage extends React.Component {
  constructor (props) {
    super(props)

    this.navigate = this.navigate.bind(this)
  }

  navigate (item) {
    const {dispatch} = this.props

    dispatch(setLocation(1, item.id))
  }

  render () {
    const {isFetching, inboxCount, location} = this.props

    if (isFetching) {
      return (
        <Spinner />
      )
    } else {
      const sidebarItems = [
        {
          id: 'inbox',
          content: <div>Inbox<Badge n={inboxCount} /></div>
        },
        {
          id: 'frequent',
          content: <div>Frequent</div>
        }
      ]

      let content = null

      switch (location[1]) {
        case 'frequent':
          content = <QuestionsFrequent />
          break
        case 'inbox':
        default:
          content = <QuestionsInbox />
      }

      return (
        <Page>
          <Sidebar items={sidebarItems}
            active={location[1]}
            onClick={this.navigate} />

          {content}
        </Page>
      )
    }
  }
}

export default connect(
  state => {
    return {
      isFetching: state.questions.isFetching,
      location: state.location,
      inboxCount: state.questions.items.length
    }
  }
)(QuestionsPage)
