import React from 'react'
import {connect} from 'react-redux'

import {fetchBlogposts} from '../../store/blogpostsActions'
import Directory from '../Directory'
import BlogpostsDirectoryEntry from '../BlogpostsDirectoryEntry'
import {Button} from '../UI'
import Loading from '../Loading'

class BlogpostsDirectory extends React.Component {
  componentWillMount () {
    const {dispatch} = this.props

    dispatch(fetchBlogposts())
  }

  render () {
    const {children, isFetching, items} = this.props

    if (isFetching) {
      return <Loading />
    } else {
      const blogposts = items.map(i =>
        <BlogpostsDirectoryEntry key={i.data._id} item={i} />
      )

      const actions = (
        <div>
          <Button
            to="/blogposts/new"
            theme="accent1">Create new</Button>
        </div>
      )

      return (
        <Directory title="Blogposts" items={blogposts} actions={actions} children={children} />
      )
    }
  }
}

export default connect(
  state => {
    return {
      isFetching: state.blogposts.isFetching,
      items: state.blogposts.items
    }
  }
)(BlogpostsDirectory)
