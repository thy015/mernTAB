import React, { useState } from "react";
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

  const [activeTab, setActiveTab] = useState("Dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <Dashboard />;
      case "CreateRoom":
        return <CreateRoom formData={formData} setFormData={setFormData} />;
      case "RevenueStats":
        return <RevenueStats />;
      case "RoomList":
        return <RoomList />;
      default:
        return <Dashboard />;
    }
  };

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
          <div
            onClick={() => setActiveTab("Dashboard")}
            className={`no-underline flex items-center py-2 px-4 rounded mt-2 text-gray-400 cursor-pointer ${
              activeTab === "Dashboard" ? "bg-gray-700 text-white" : "hover:bg-gray-700"
            }`}
          >
            <FontAwesomeIcon icon={faTachometerAlt} className="mr-3" />
            <h4>Dashboard</h4>
          </div>
          <div
            onClick={() => setActiveTab("CreateRoom")}
            className={`no-underline flex items-center py-2 px-4 rounded mt-2 text-gray-400 cursor-pointer ${
              activeTab === "CreateRoom" ? "bg-gray-700 text-white" : "hover:bg-gray-700"
            }`}
          >
            <FontAwesomeIcon icon={faPlus} className="mr-3" />
            <h4>Create Hotel</h4>
          </div>
          <div
            onClick={() => setActiveTab("RevenueStats")}
            className={`no-underline flex items-center py-2 px-4 rounded mt-2 text-gray-400 cursor-pointer ${
              activeTab === "RevenueStats" ? "bg-gray-700 text-white" : "hover:bg-gray-700"
            }`}
          >
            <FontAwesomeIcon icon={faChartBar} className="mr-3" />
            <h4>Revenue Stats</h4>
          </div>
          <div
            onClick={() => setActiveTab("RoomList")}
            className={`no-underline flex items-center py-2 px-4 rounded mt-2 text-gray-400 cursor-pointer ${
              activeTab === "RoomList" ? "bg-gray-700 text-white" : "hover:bg-gray-700"
            }`}
          >
            <FontAwesomeIcon icon={faList} className="mr-3" />
            <h4>Room List</h4>
          </div>
        </nav>
        <div className="flex-1 p-8">
          {renderContent()}
        </div>
      </div>
      <Footer />
    </>
  );
}
