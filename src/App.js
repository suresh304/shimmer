import './App.css';
import React, { Suspense } from 'react';
import Header from './component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './component/About';
import Home from './component/Home';
import Courses from './component/Courses';
import { Profile } from './component/Profile';
import PrivateRoute from './component/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import ReactJs from './component/courses/ReactJs';
import Angular from './component/courses/Angular';
import Nodejs from './component/courses/Nodejs';
import Golang from './component/courses/Golang';
import Javascript from './component/courses/Javascript';
import './index.css'
import Coding from './component/courses/Coding';
import Comment from './component/Comment';




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
          <Route element={<Comment/>} path='/Comment' />
          
          <Route element={<PrivateRoute><Courses/></PrivateRoute>} exact path='courses'>
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
