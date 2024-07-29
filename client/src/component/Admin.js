import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    NavLink,
  } from 'react-router-dom';
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faHotel, faFileInvoice, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import logo from '../image/Component 33.png';
import Footer from './Footer';
import HotelProfileManagement from './HotelProfileManagement';
import InvoiceManagement from './InvoiceManagement';
const Admin = () => {
  return (
    <>
    <div className="flex min-h-screen bg-blue-100">
      <nav className="p-4 text-blue-500 bg-slate-900 w-[400px]">
        <div className="my-6 font-bold text-center">
          <h3 className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-auto h-20" />
            <span>Admin Dashboard</span>
          </h3>
        </div>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `no-underline flex items-center py-2 px-4 rounded mt-2 text-gray-400 ${
              isActive ? 'bg-gray-700 text-white' : 'hover:bg-gray-700'
            }`
          }
        >
          <FontAwesomeIcon icon={faTachometerAlt} className="mr-3" />
          <h4>Dashboard</h4>
        </NavLink>
        <NavLink
          to="/hotel-profiles"
          className={({ isActive }) =>
            `no-underline flex items-center py-2 px-4 rounded mt-2 text-gray-400 ${
              isActive ? 'bg-gray-700 text-white' : 'hover:bg-gray-700'
            }`
          }
        >
          <FontAwesomeIcon icon={faHotel} className="mr-3" />
          <h4>Manage Hotel Profiles</h4>
        </NavLink>
        <NavLink
          to="/invoices"
          className={({ isActive }) =>
            `no-underline flex items-center py-2 px-4 rounded mt-2 text-gray-400 ${
              isActive ? 'bg-gray-700 text-white' : 'hover:bg-gray-700'
            }`
          }
        >
          <FontAwesomeIcon icon={faFileInvoice} className="mr-3" />
          <h4>Manage Invoices</h4>
        </NavLink>
      </nav>
      <div className="flex-1 p-8">
        <Routes>
          <Route path="/hotel-profiles" element={<HotelProfileManagement />} />
          <Route path="/invoices" element={<InvoiceManagement />} />
        </Routes>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Admin;