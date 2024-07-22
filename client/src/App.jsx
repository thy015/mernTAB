import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./component/Register";
import SuccessPage from "./component/SuccessPage";
import { Payment } from "./component/Payment";
import SignUp from "./component/SignUp";
import Detail from "./component/Detail";
import Login from "./component/Login";
import HomePage from "./component/HomePage";
import Navigation from "./component/Navigation";
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
      <Detail />
    </div>
  );
}
