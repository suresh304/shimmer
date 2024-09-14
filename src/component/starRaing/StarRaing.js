import React, { useState } from 'react'

const StarRaing = ({ size = 5, rate=1 }) => {
  const [rating, setRating] = useState(rate)
  const [hoverRating,setHoverRating] = useState(rating)
  const handleMouseEnter = (e, i) => {
    console.log(i)
    setHoverRating(i + 1)
    

  }
  const handleMouseLeave = ()=>{
    setHoverRating(rating)

  }
  const selectRating = (i) =>{
    setRating(i+1)
  }

  return (
    <div className='flex flex-col items-center'>
      <div>
      {Array(size).fill("").map((_, i) => <span key={i}>
         <i className={`fa fa-star text-4xl p-1 ${(i+1>hoverRating) ? 'text-slate-300' : 'text-yellow-300'}`} onMouseEnter={(e) => handleMouseEnter(e, i)} onMouseLeave={handleMouseLeave} onClick={()=>selectRating(i)}/>
         </span>)}
         </div>
         <div>Rating_{rating}/{size}</div>
    </div>
    
  )
}

export default StarRaing