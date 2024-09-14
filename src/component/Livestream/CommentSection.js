import React from 'react'
import Comment from './Comment'

const CommentSection = ({ comments }) => {
  return (
    <div className='border flex  rounded-lg flex-col-reverse border-black m-2 w-[400px] h-[600px] overflow-y-auto'>
        <div className='relative'>Live Chat streaming here</div>  
      {comments.map((cmt, i) => <Comment key={i} cmt={cmt} />)}
    </div>
  )
}

export default CommentSection