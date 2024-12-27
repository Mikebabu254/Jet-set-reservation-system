import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/common/Home';
import Login from './Pages/common/Login';
import Signup from './Pages/common/signup';
import UserHome from './Pages/Users/UserHome';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<UserHome/>}/>
      </Routes>
    </Router>
  )
}

export default App
