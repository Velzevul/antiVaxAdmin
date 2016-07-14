import React from 'react'

import Comment from '../Comment'
import {Block} from '../Layouts'
import Title from '../Title'

const Comments = ({
  items,
  onDeleteComment,
  onDeleteReply
}) => {
  const comments = items.map(i =>
    <Comment key={i._id} item={i} onDeleteComment={onDeleteComment} onDeleteReply={onDeleteReply} />
  )
  return (
    <div>
      <Block>
        <Title label="Comments" />
      </Block>

      {comments}
    </div>
  )
}

export default Comments
