import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faPlus, faChartBar, faList } from "@fortawesome/free-solid-svg-icons";
import HotelProfileManagement from "./HotelProfileManagement";
import InvoiceManagement from "./InvoiceManagement";
import logo from "../image/Component 33.png";
import Footer from "./Footer";

export default function Admin() {
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    const authToken = localStorage.getItem("authToken");
    console.log(isAdmin)
    console.log(authToken)
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "HotelProfileManagement":
        return <HotelProfileManagement />;
      case "InvoiceManagement":
        return <InvoiceManagement />;
      default:
        return <HotelProfileManagement />;
    }
  };

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
          
          <div
            onClick={() => setActiveTab("HotelProfileManagement")}
            className={`no-underline flex items-center py-2 px-4 rounded mt-2 text-gray-400 cursor-pointer ${activeTab === "CreateRoom" ? "bg-gray-700 text-white" : "hover:bg-gray-700"}`}
          >
            <FontAwesomeIcon icon={faPlus} className="mr-3" />
            <h4>HotelProfileManagement</h4>
          </div>
          <div
            onClick={() => setActiveTab("InvoiceManagement")}
            className={`no-underline flex items-center py-2 px-4 rounded mt-2 text-gray-400 cursor-pointer ${activeTab === "RevenueStats" ? "bg-gray-700 text-white" : "hover:bg-gray-700"}`}
          >
            <FontAwesomeIcon icon={faChartBar} className="mr-3" />
            <h4>InvoiceManagement</h4>
          </div>

        </nav>
        <main className="flex-1 p-6 bg-white">{renderContent()}</main>
      </div>
      <Footer />
    </>
  );
}
