import React, { useState } from 'react'
import comments from '../MockData/comments.json'

const Comment = () => {
  
  const [commentsData] = useState(comments)

  


  return (
    <div className='w-[90%] h-[800px] bg-slate-400 mx-auto my-4 overflow-scroll'>
      {commentsData.map((comment) => <SingleComment comment={comment} />)}

    </div>
  )
}

export default Comment


const SingleComment = ({comment} ) => {
  const [singleCommentData,setSingleCommentData] = useState(comment)
  const [reply , setReply] = useState(false)

  console.log(comment)
  const replyHandler = (e) =>{
    if(e.code === "Enter"){
      setSingleCommentData({...singleCommentData,replies:[...singleCommentData.replies,{author:"coder",content:e.target.value,replies:[]}]})
e.target.value = ""
setReply(r=>!r)
    }

  }

  return (
    <div className=' bg-slate-200 mx-3 py-1  rounded-md px-2  my-2 border-l-2 border-black'>
      <h1 className='font-extrabold text-xl'>{singleCommentData.author}</h1>
      <h1 className='text-slate-600'>{singleCommentData.content}</h1>
      <div >
      <div onClick={()=>setReply(prev=>!prev)}>{'\u21A9'}reply</div>
      {reply&&<input className='border-black border-b-2 outline-none bg-slate-300 ' onKeyUp={(e)=>replyHandler(e)}/>}
      </div>
      <div className=''>
        {singleCommentData?.replies.map((cmnt,ind)=><SingleComment comment={cmnt}/>)}
      </div>
    </div>
  )

}