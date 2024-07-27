
import './App.css';
import HotelList from './component/HotelList';
import Detail from './component/Detail';
import React from 'react';
import Register from './component/Register';
import Upload  from './component/Upload';
import {SecureUpload} from './component/SecureUpload'
import { Route, Routes } from 'react-router-dom'
import CreateRoom from './component/CreateRoom';
import Dashboard from './component/Dashboard';
import Manage from './component/Manage';
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/hotellist' element={<HotelList/>}/>
        <Route path='/detailhotel/:_id' element={<Detail/>}/>
        <Route path='/registerOwner' element={<Register/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/secure_upload' element={<SecureUpload/>}/>
        <Route path='/createHotel' element={<CreateRoom/>}/>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/manage' element={<Manage/>}/>
      </Routes>
    </div>
  );  
}
