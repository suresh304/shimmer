import './App.css';
import React, { Suspense, useState } from 'react';
import { useEffect } from 'react';
import MemeCard from './component/MemeCard';
import { Shimmer } from './component/Shimmer';
import Header from './component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './component/About';
import Home from './component/Home';
import Courses from './component/Courses';
import { Profile } from './component/Profile';
import PrivateRoute from './component/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import Course from './component/Course';
import ReactJs from './component/courses/ReactJs';
import Angular from './component/courses/Angular';
import Nodejs from './component/courses/Nodejs';
import Golang from './component/courses/Golang';
import Javascript from './component/courses/Javascript';
import './index.css'
import { REACT_CONCEPTS } from './constants/constants';
import Coding from './component/courses/Coding';
import Fetch_API_Data from './component/React/Fetch_API_Data';
import State_management from './component/React/State_management';
import { lazy } from 'react';
for (let index = 0; index < 5; index++) {
  console.log("MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM")
  
}

const updatedREACT_CONCEPTS = REACT_CONCEPTS.map((ele) => ({
  ...ele,
  path: lazy(() => import(`./component/React/${ele.path}`))
}));


function App() {

 
  
  return (
    <>
      <BrowserRouter>
      <Suspense fallback={<div>Loading</div>}>
      <AuthProvider>
        <Header />
        <div className=''>

        <Routes>
          <Route element={<About />} path='about' />
          <Route element={<Profile />} path='profile' />
          <Route element={<Home />} path='/' />
          <Route element={<Home />} path='/Home' />
          <Route element={<Courses/>} exact path='courses'>
            <Route element = {<ReactJs/>} path='ReactJs'>
            </Route>
            <Route element = {<Angular/>} path='Angular'/>
            <Route element = {<Nodejs/>} path='Nodejs'/>
            <Route element = {<Golang/>} path='Golang'/>
            <Route element = {<Javascript/>} path='Javascript'/>
            <Route element = {<Coding/>} path='Coding'/>
          </Route>
        </Routes>
        </div>
      </AuthProvider>
      </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
