import './App.css';
import React, { Suspense } from 'react';
import Header from './component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './component/About';
import Home from './component/Home';
import Courses from './component/Courses';
import { Profile } from './component/Profile';
import PrivateRoute from './component/PrivateRoute';
import {AuthProvider} from './context/AuthProvider';
import ReactJs from './component/courses/ReactJs';
import Angular from './component/courses/Angular';
import Nodejs from './component/courses/Nodejs';
import Golang from './component/courses/Golang';
import Javascript from './component/courses/Javascript';
import './index.css'
import Coding from './component/courses/Coding';
import Comment from './component/Comment';
import { useEffect } from 'react';
import Livechat from './component/Livestream/Livechat';
import Barchart from './component/Barchart/Barchart';
import Game from './component/country-capital/Game';
import GridSelect from './component/Gridselect/GridSelect';
import SelectableGrid from './component/gridselection/SelectableGrid';
import Loader from './component/Loaderr/Loader';
import StarRaing from './component/starRaing/StarRaing';
import Accordian from './component/Accordian';
import Slider from './component/Slider';
import InfiniteScroll from './InfiniteScroll';
import Searchbar from './Searchbar';




function App() {

  useEffect(() => {
    
  }, [])
  

 
  
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
          <Route element={<Livechat/>} path='/Live' />
          <Route element={<PrivateRoute><Courses/></PrivateRoute>} exact path='courses'>
            <Route element = {<ReactJs/>} path='ReactJs'>
            </Route>
            <Route element={<Comment/>} path='Comments' />
            <Route element = {<Barchart/>} path='barchart'/>
            <Route element = {<Game/>} path='countrycapital'/>
            <Route element = {<Livechat/>} path='livestream'/>
            <Route element = {<SelectableGrid/>} path='gridselect'/>
            <Route element = {<StarRaing/>} path='starrating'/>
            <Route element = {<Accordian/>} path='accordian'/>
            <Route element = {<Slider/>} path='slider'/>
            <Route element = {<InfiniteScroll/>} path='infiniteScroll'/>
            <Route element = {<Searchbar/>} path='searchbar'/>
            <Route element = {<Loader/>} path='loader'/>

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
