import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./component/Register";
import SuccessPage from "./component/SuccessPage";
import { Payment } from "./component/Payment";
import SignUp from "./component/SignUp";
import Login from "./component/Login";
import HomePage from "./component/HomePage";
import Navigation from "./component/Navigation";
import Booking from "./component/Booking";
import BookingSummary from "./component/BookingSummary";
import DetailBooking from "./component/DetailBooking";
import Confirmation from "./component/Confirmation";
import FAQ from "./component/FAQ";
import CreateRoom from "./component/CreateRoom";
import RevenueStats from "./component/RevenueStats";
import RoomList from "./component/RoomList";
import Manage from "./component/Manage";

export default function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Routes>
    //       <Route path="/" element={<Register />} />
    //       <Route path="/success" element={<SuccessPage />} />
    //     </Routes>
    //   </div>
    // </Router>
    <div>
      <HomePage />{" "}
    </div>

    // <Router>
    //   <div className="App">
    //     <Routes>

    //       <Route path="/booking" element={<Booking />} />
    //       <Route path="/bookingConfirm" element={<BookingSummary />} />
    //       <Route path="/confirmation" element={<Confirmation />} />
    //     </Routes>
    //   </div>
    // </Router>
  );
}
