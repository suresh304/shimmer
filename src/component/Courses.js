import React from 'react'
import '../styles/course.css'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import Angular from './courses/Angular'
import ReactJs from './courses/ReactJs'
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






