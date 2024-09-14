import React, { useEffect, useState } from 'react'
import StreamVideo from './StreamVideo'
import CommentSection from './CommentSection'

const Livechat = () => {
  const comments = [
    {
      id: 1,
      name: "suresh",
      message: "its a great thing to start"
    },
    {
      id: 2,
      name: "Ramesh",
      message: "hello hwo are you"
    },
    {
      id: 3,
      name: "Naresh",
      message: "this is not at all a gud way"
    }
  ]
const [data,setData] = useState(comments)
useEffect(() => {
 const x=setInterval(()=>{
  fetchData()
 },1000)
 return ()=>{
  clearInterval(x)
 }
}, [])

const fetchData = () =>{
  setData((data)=>{
    return [...data,...comments].splice(0,20)
  })
}


  return (
    <div className='flex'>
      <StreamVideo width={1300} height={600} />
      <CommentSection comments={data}/>
    </div>
  )
}

export default Livechat