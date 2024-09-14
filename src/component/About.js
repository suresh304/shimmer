import React from 'react'
import Slider from './Slider'
import Searchbar from '../Searchbar'
import Accordian from './Accordian'
import StarRaing from './starRaing/StarRaing'
import Barchart from './Barchart/Barchart'

export const About = () => {
  return (
    <div className='flex flex-col p-10 justify-around'>
    <Slider/>
    <Searchbar/>
    <Accordian/>
    <StarRaing
    size={10}
    onChange={()=>{}}
    onClick={()=>{}}
    onHover = {()=>{}}
    />
      <Barchart/>

    </div>
  )
}
