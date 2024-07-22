import React from "react";
import logo from "../image/Component 33.png";

export default function Navigation() {
  return (
    <div className="">
      <nav className="sticky top-0 flex items-center justify-between w-full h-24 px-5 bg-white shadow-md">
        <div className="flex items-center space-x-5">
          <img className="" src={logo} alt="Logo" />
          <h2 className="text-2xl font-semibold ">
            <a
              className="text-blue-600 no-underline"
              href="https://www.example.com"
            >
              Promotion
            </a>
          </h2>
          <h2 className="text-2xl font-semibold ">
            <a
              className="text-blue-600 no-underline"
              href="https://www.example.com"
            >
              Hotel Collections
            </a>
          </h2>
          <h2 className="text-2xl font-semibold ">
            <a
              className="text-blue-600 no-underline"
              href="https://www.example.com"
            >
              Become Our Partner
            </a>
          </h2>
        </div>
        <div className="flex items-center space-x-5">
          <h2 className="text-2xl font-semibold ">
            <a
              className="text-blue-600 no-underline"
              href="https://www.example.com"
            >
              Register
            </a>
          </h2>
          <h2 className="text-2xl font-semibold text-sky-500">
            <a
              className="text-blue-600 no-underline"
              href="https://www.example.com"
            >
              Log in
            </a>
          </h2>
        </div>
      </nav>
    </div>
  );
}
