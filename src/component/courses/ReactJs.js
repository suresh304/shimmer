import React from 'react'
import Accordian from '../Accordian'
import { Box, Divider } from '@mui/material'
import Topic from '../Topic'
import { REACT_CONCEPTS } from '../../constants/constants'
import { Outlet } from 'react-router-dom'

const ReactJs = () => {
  console.log(REACT_CONCEPTS.length)
  return (
    <div className=' flex h-svh'>

      <div className='w-1/4 m-2 bg-slate-500'>
        {REACT_CONCEPTS.map((topic, i) => <Topic {...topic} />)}
      </div>
      <Divider orientation="vertical" flexItem />
      <div className='text-white bg-slate-300 w-full'>
        <center>

         hello this is sample
        </center>
      </div>

    </div>
  )
}

export default ReactJs

