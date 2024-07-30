import React from "react";
import logo from "../image/Component 33.png";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <div className="">
      <nav className="sticky top-0 flex items-center justify-between w-full h-24 px-5 bg-white shadow-md">
        <div className="flex items-center space-x-5">
          <img className="" src={logo} alt="Logo" />
          <h2 className="text-2xl font-semibold ">
            <Link to='/'
              className="text-blue-600 no-underline"
            >
              Promotion
            </Link>
          </h2>
          <h2 className="text-2xl font-semibold ">
            <Link to ='/hotellist'
              className="text-blue-600 no-underline"
            >
              Hotel Collections
            </Link>
          </h2>
          <h2 className="text-2xl font-semibold ">
            <Link to='/registerOwner'
              className="text-blue-600 no-underline"
            >
              Become Our Partner
            </Link>
          </h2>
        </div>
        <div className="flex items-center space-x-5">
          <h2 className="text-2xl font-semibold ">
            <Link to='/signUpCus'
              className="text-blue-600 no-underline"
            >
              Register
            </Link>
          </h2>
          <h2 className="text-2xl font-semibold text-sky-500">
            <Link to='/signInCus'
              className="text-blue-600 no-underline"
            >
              Log in
            </Link>
          </h2>
        </div>
      </nav>
    </div>
  );
}