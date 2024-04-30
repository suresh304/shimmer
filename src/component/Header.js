import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import SignIn from './Signin'
import '../styles/Header.css'
const Header = () => {
  const navbarOptions = ["Home", "About", "Courses", "Profile"]

  return (
    <div className='header z-auto'>


      {navbarOptions.map((opt, i) => <div><NavLink to={opt} className={({ isActive }) => (isActive ? 'active' : 'inactive')} >{opt}</NavLink></div>)}

      <SignIn />
    </div>
  )
}

export default Header