
import './App.css';
import HotelList from './component/HotelList';
import Detail from './component/Detail';
import React from 'react';
import Register from './component/Register';
import { Route, Routes } from 'react-router-dom'


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/hotellist' element={<HotelList/>}/>
        <Route path='/detailhotel/:_id' element={<Detail/>}/>
        <Route path='/registerOwner' element={<Register/>}/>
      </Routes>
    </div>
  );  
}
