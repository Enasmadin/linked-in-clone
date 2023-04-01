import React from 'react'
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Login from './components/Login';
import {  connect } from 'react-redux';

import Home from './components/Home';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import { getUserAuth } from './redux/actions';
import RequairAuth from './components/RequairAuth';


function App(props) {
  useEffect(()=>{
   props.getUserAuths();
  },[])
  return (
    
    <div className='app'>
      <Router>
        <Routes>
        <Route path='/'  element={<Login/>}/>

        <Route path='/home'  element=
        {

        <RequairAuth>
        <Navbar/>
        <Home/>
       </RequairAuth>
       
      }/>
        </Routes>
      </Router>
        
    </div>

  )
}
const mapStateToProps=(state)=>{
  return{}
 
}
const mapDispatchToProps=(dispatch)=>{
  return{
      getUserAuths:()=>dispatch(getUserAuth())
      
  }
}


export default connect( mapStateToProps,mapDispatchToProps)(App);

