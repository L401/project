import React, { useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import { Nav } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Reviews from '../Pages/AvatarReview';
import BookTicket from '../Pages/BookTickets'
import CCForm from '../Pages/CCForm';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div style={{backgroundColor: '#404040', width: '1920px', height: '920px'}} className='wrapper'>
      <div>
        <Navbar bg="#404040">
        <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipartcraft.com%2Fimages%2Ftexas-tech-logo-clip-art-7.png&f=1&nofb=1&ipt=313196dfce193458ddcd6eb445ae00644965ae5f58e5d06d96ee0658555c76cc&ipo=images' height='75' width='75'></img> 
          <text style={{color: 'white', fontSize: 40, paddingRight: '1050px'}}>Movie Booking System</text>
          <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          </form>
          <form>
            <Button variant="secondary">Search</Button>
          </form>
        </Navbar>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
		      <Route path='/Pages/AvatarReview' element={<Reviews/>} />
          <Route path='/Pages/IncredibleReview' element={<Reviews/>} />
          <Route path='/Pages/BookTickets' element={<BookTicket/>} />
          <Route path='/Pages/CCForm' element={<CCForm/>} />
        </Routes>
      </BrowserRouter>
    </div>
	
  );
}

export default App;