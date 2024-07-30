
import './App.css';
import HotelList from './component/HotelList';
import Detail from './component/Detail';
import React from 'react';
import Register from './component/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Manage from './component/Manage';
import Login from './component/Login';
import HomePage from './component/HomePage'
import TabDetail from './component/TabDetail';
export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/hotellist' element={<HotelList/>}/>
          <Route path='/detailhotel/:_id' element={<Detail/>}/>
          <Route path='/registerOwner' element={<Register/>}/>
          <Route path='/manage' element={<Manage/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/tab' element={<TabDetail hotelId={"6699bedd39e854acc06adee9"}/>}/>
        </Routes>
      </Router>
    </div>
  );  
}
