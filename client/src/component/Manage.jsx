// Layout.js
import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faPlus,
  faChartBar,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../image/Component 33.png";

export default function Layout() {
  return (
    <>
      <div className="flex min-h-screen bg-blue-100">
        {/* Sidebar Navigation */}
        <nav className="p-4 text-blue-500 bg-slate-900 w-[300px]">
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
              `no-underline flex items-center py-2 px-4 rounded mt-2 text-gray-400 ${
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
          <Outlet />
        </div>
      </div>
    </>
  );
}
