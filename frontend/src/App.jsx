import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/common/Home';
import Login from './Pages/common/Login';
import Signup from './Pages/common/signup';
import UserHome from './Pages/Users/UserHome';
import BookingFlight from './Pages/Users/BookingFlight';
import SeatSelection from './Pages/Users/SeatSelecton';
import MyBookings from './Pages/Users/MyBooking';
import UserProfile from './Pages/Users/UserProfile';
import Dashboard from './Pages/Admin/Dashboard';
import ManageFlights from './Pages/Admin/ManageFlights';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<UserHome/>}/>
        <Route path='/booking' element={<BookingFlight/>}/>
        <Route path='/seat-selection' element={<SeatSelection/>}/>
        <Route path='/my-booking' element={<MyBookings/>}/>
        <Route path='/profile' element={<UserProfile/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/admin/flights' element={<ManageFlights/>}/>
      </Routes>
    </Router>
  )
}

export default App
