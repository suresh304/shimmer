import React from 'react'
import '../App.css'

const MemeCard = ({meme}) => {
    const {author,url} = meme
  return (
    <div className='meme_card'>
        <img src={url} alt='meme img' />
        <h3>{author}</h3>
    </div>
  )
}

export default MemeCard