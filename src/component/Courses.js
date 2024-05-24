import React from 'react'
import '../styles/course.css'
import {  Outlet } from 'react-router-dom'
import SidebarCourses from './SidebarCourses'

const Courses = () => {
  return (
    <div className='flex '>
      <SidebarCourses />
      <div className='w-full'>
        <Outlet />
      </div>
    </div>
  )
}

export default Courses






