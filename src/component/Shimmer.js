import React from 'react'

export const Shimmer = () => {
  return Array(15).fill(1).map((ele,i)=>(
    <div className='shimmer' key={i}></div>
  ))
}
