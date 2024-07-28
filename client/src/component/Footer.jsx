import React from "react";
import logo from "../image/Component 33.png";

export default function Footer() {
  return (
    <div>
      {" "}
      <footer className="p-2 mx-auto bg-blue-50 h-fit">
        <div className="flex flex-wrap items-center justify-between mx-auto mt-5 max-w-7xl">
          <div className="items-center w-full mb-4 md:w-auto md:mb-0">
            <img src={logo} alt="Logo" />
            <p class="text-lg text-gray-500 my-5">
              We believe brand interaction is key
              <br /> in communication. Real innovations
              <br /> and a positive.
            </p>
          </div>
          <div className="flex flex-wrap justify-between w-4/6 md:w-4/6">
            <div className="w-full mb-4 md:w-1/6 md:mb-0">
              <h5 className="mb-2 text-xl font-semibold">About us</h5>
              <ul className="p-0 list-none">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 no-underline hover:text-sky-300 "
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="hover:text-sky-300 text-gray-400 no-underline "
                  >
                    FAQ’s
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 no-underline hover:text-sky-300 "
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 no-underline hover:text-sky-300 "
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-full md:w-1/6 mb-4 md:mb-0">
              <h5 class="text-xl font-semibold mb-2">Company </h5>
              <ul class="list-none p-0">
                <li>
                  <a
                    href="#"
                    class="hover:text-sky-300 text-gray-400 no-underline "
                  >
                    Core values
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="hover:text-sky-300 text-gray-400 no-underline "
                  >
                    Partner w/ us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 no-underline hover:text-sky-300 "
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 no-underline hover:text-sky-300 "
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full mb-4 md:w-1/6 md:mb-0">
              <h5 className="mb-2 text-xl font-semibold">Support</h5>
              <ul className="p-0 list-none">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 no-underline hover:text-sky-300 "
                  >
                    Support center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 no-underline hover:text-sky-300 "
                  >
                    Feedback
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="hover:text-sky-300 text-gray-400 no-underline "
                  >
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-full md:w-2/6 mb-4 md:mb-0">
              <h5 class="text-xl font-semibold mb-2">Get in touch</h5>
              <form>
                <label class="block">
                  <input
                    type="email"
                    class="peer border-solid border-teal-400	"
                    placeholder="Enter your email"
                  />
                  <p class="mt-2 invisible peer-invalid:visible text-red-600 text-sm">
                    Please provide a valid email address.
                  </p>
                </label>
              </form>
              <button className="px-4 py-2 bg-sky-300 hover:bg-sky-400 hover:text-white active:bg-sky-400">
                Get Access
              </button>
            </div>
          </div>
        </div>
        <p className="text-xs text-center text-slate-600">
          &copy; 2024 Take a Breath. All rights reserved.
        </p>
      </footer>
    </div>
  );
}