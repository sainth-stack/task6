import React, { Component, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';
import Video from './components/Video';
import axios from 'axios';
import {useEffect} from 'react'
import Button from './components/Button';
import StorageData from './components/storagedata';
function App () {

  
    var startTime=moment().format('DD/MM/YYYY hh:mm:ss')
    var d = new Date();
    var minutes = d.getHours() * 60 + d.getMinutes();




    return (
      
      <Router>


            
    <Routes>
    <Route exact path='/' element={<Button/>}></Route>

    <Route exact path='/video-player' element={< Video startTime={startTime} minutes={minutes} />}></Route>

</Routes>  
 



  </Router>
    );
  
}

export default App;