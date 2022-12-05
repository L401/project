import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Reviews from '../Pages/Review';
import BookTicket from '../Pages/BookTickets'

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div style={{backgroundColor: 'black', width: '2000px', height: '2000px'}} className='wrapper'>
      <div>
        <h1 style={{color: 'white'}}>Movie Booking System</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
		      <Route path='/Pages/Reviews' element={<Reviews/>} />
          <Route path='/Pages/BookTickets' element={<BookTicket/>} />
        </Routes>
      </BrowserRouter>
    </div>
	
  );
}

export default App;