
import './App.css';
import HotelList from './component/HotelList';
import Detail from './component/Detail';
import React from 'react';
import Register from './component/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Manage from './component/Manage';
import Login from './component/Login';
import HomePage from './component/HomePage'
import Confirmation from './component/Confirmation';
import Booking from './component/Booking';
import LoginCus from './component/LogInCus';
import SignUp from './component/SignUp';
import Admin from './component/Admin';
export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/homepage' element={<HomePage/>} />
          <Route path='/hotellist' element={<HotelList/>}/>
          <Route path='/detailhotel/:_id' element={<Detail/>}/>
          <Route path='/registerOwner' element={<Register/>}/>
          <Route path='/manage' element={<Manage/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/booking' element={<Booking/>} />
          <Route path='/confirmation' element={<Confirmation/>} />
          <Route path='/logInCus' element={<LoginCus/>}/>
          <Route path='/signUpCus' element={<SignUp/>}/>
          <Route path='/admin' element={<Admin/>}/>
        </Routes>
      </Router>
    </div>
  );  
}
