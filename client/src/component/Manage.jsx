import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faPlus,
  faChartBar,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import CreateRoom from "./CreateRoom";
import Dashboard from "./Dashboard";
import RevenueStats from "./RevenueStats";
import RoomList from "./RoomList";
import ProfileDetail from "./ProfileDetail";
import logo from "../image/Component 33.png";
import SuccessPage from "./SuccessPage";
import Footer from "./Footer";

export default function Manage() {
  const [formData, setFormData] = useState({
    hotelName: "",
    hotelPhone: "",
    accommodationType: "Căn hộ",
    area: "",
    capacity: "",
    numberOfBathrooms: "",
    numberOfBedrooms: "",
    hotelAddress: "",
    country: "",
    rooms: [],
  });

  return (
    <>
      <div className="flex min-h-screen bg-blue-100">
        <nav className="p-4 text-blue-500 bg-slate-900 w-[400px]">
          <div className="my-6 font-bold text-center">
            <h3 className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="w-auto h-20" />
              <span>Owner Dashboard</span>
            </h3>
          </div>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `no-underline flex items-center py-2 px-4 rounded mt-2 text-gray-400 ${
                isActive ? "bg-gray-700 text-white" : "hover:bg-gray-700"
              }`
            }
          >
            <FontAwesomeIcon icon={faTachometerAlt} className="mr-3" />
            <h4>Dashboard</h4>
          </NavLink>
          <NavLink
            to="/create-room"
            className={({ isActive }) =>
              `no-underline flex items-center py-2 px-4 rounded mt-2 text-gray-400 text-center ${
                isActive ? "bg-gray-700 text-white" : "hover:bg-gray-700"
              }`
            }
          >
            <FontAwesomeIcon icon={faPlus} className="mr-3" />
            <h4>Create Hotel</h4>
          </NavLink>
          <NavLink
            to="/revenue-stats"
            className={({ isActive }) =>
              `no-underline flex items-center py-2 px-4 rounded mt-2 text-gray-400 ${
                isActive ? "bg-gray-700 text-white" : "hover:bg-gray-700"
              }`
            }
          >
            <FontAwesomeIcon icon={faChartBar} className="mr-3" />
            <h4>Revenue Stats</h4>
          </NavLink>

          <NavLink
            to="/room-list"
            className={({ isActive }) =>
              `no-underline flex items-center py-2 px-4 rounded mt-2 text-gray-400 ${
                isActive ? "bg-gray-700 text-white" : "hover:bg-gray-700"
              }`
            }
          >
            <FontAwesomeIcon icon={faList} className="mr-3" />
            <h4>Room List</h4>
          </NavLink>
        </nav>
        <div className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/create-room"
              element={
                <CreateRoom formData={formData} setFormData={setFormData} />
              }
            />
            <Route path="/revenue-stats" element={<RevenueStats />} />
            <Route path="/room-list" element={<RoomList />} />
            <Route path="/profile/:id" element={<ProfileDetail />} />
            <Route path="/success" element={<SuccessPage />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}