import React from "react";
import logo from "../image/Component 33.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Hotel from "./text";

export default function Detail() {
  const tabs = [
    {
      name: "Premier Room Twin",
      content: (
        <div className="grid grid-cols-5 gap-4 p-4 bg-white shadow-md rounded-xl">
          <div className="col-span-2">
            <img
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
              alt="Premier Room Twin"
              className="object-cover w-full h-32 mb-4 rounded"
            />
            <div className="grid grid-cols-3 gap-1">
              <img
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
                alt="Room detail 1"
                className="object-cover w-full h-16 rounded"
              />
              <img
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
                alt="Room detail 2"
                className="object-cover w-full h-16 rounded"
              />
              <img
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
                alt="Room detail 3"
                className="object-cover w-full h-16 rounded"
              />
            </div>
          </div>
          <div className="col-span-2">
            <h2 className="mb-2 text-xl font-bold">Lợi ích</h2>
            <p className="mb-2">Giá của bạn bao gồm:</p>
            <ul className="mb-4 list-disc list-inside">
              <li>Giá siêu thấp!</li>
              <li>Bãi đậu xe miễn phí, wifi, nước uống</li>
              <li>Bữa sáng</li>
            </ul>
            <h2 className="mb-2 text-xl font-bold">Sức chứa</h2>
            <p className="mb-2">2 Người</p>
          </div>
          <div className="flex flex-col items-end justify-between col-span-1">
            <div>
              <p className="mb-1 text-xs text-gray-500">20,400 reviews</p>
              <span className="inline-block px-2 py-1 mb-2 text-green-500 bg-green-200 rounded">
                Excellent
              </span>
            </div>
            <div>
              <p className="text-sm text-gray-500 line-through">₫4,760,000</p>
              <p className="text-sm text-gray-500 line-through">₫3,230,000</p>
              <p className="text-xl font-semibold text-red-500">₫1,500,000</p>
              <button className="px-4 py-2 mt-2 text-white bg-blue-500 rounded">
                Đặt phòng
              </button>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Deluxe Room",
      content: (
        <div className="grid grid-cols-5 gap-4 p-4 bg-white shadow-md rounded-xl">
          <div className="col-span-2">
            <img
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
              alt="Deluxe Room"
              className="object-cover w-full h-32 mb-4 rounded"
            />
            <div className="grid grid-cols-3 gap-1">
              <img
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
                alt="Room detail 1"
                className="object-cover w-full h-16 rounded"
              />
              <img
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
                alt="Room detail 2"
                className="object-cover w-full h-16 rounded"
              />
              <img
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
                alt="Room detail 3"
                className="object-cover w-full h-16 rounded"
              />
            </div>
          </div>
          <div className="col-span-2">
            <h2 className="mb-2 text-xl font-bold">Lợi ích</h2>
            <p className="mb-2">Giá của bạn bao gồm:</p>
            <ul className="mb-4 list-disc list-inside">
              <li>Giá ưu đãi!</li>
              <li>Bãi đậu xe miễn phí, wifi, nước uống</li>
              <li>Bữa sáng</li>
            </ul>
            <h2 className="mb-2 text-xl font-bold">Sức chứa</h2>
            <p className="mb-2">3 Người</p>
          </div>
          <div className="flex flex-col items-end justify-between col-span-1">
            <div>
              <p className="mb-1 text-xs text-gray-500">15,300 reviews</p>
              <span className="inline-block px-2 py-1 mb-2 text-green-500 bg-green-200 rounded">
                Great
              </span>
            </div>
            <div>
              <p className="text-sm text-gray-500 line-through">₫5,200,000</p>
              <p className="text-sm text-gray-500 line-through">₫4,200,000</p>
              <p className="text-xl font-semibold text-red-500">₫2,000,000</p>
              <button className="px-4 py-2 mt-2 text-white bg-blue-500 rounded">
                Đặt phòng
              </button>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Deluxe Triple Room",
      content: (
        <div className="grid grid-cols-5 gap-4 p-4 bg-white shadow-md rounded-xl">
          <div className="col-span-2">
            <img
              src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
              alt="Deluxe Triple Room"
              className="object-cover w-full h-32 mb-4 rounded"
            />
            <div className="grid grid-cols-3 gap-1">
              <img
                src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
                alt="Room detail 1"
                className="object-cover w-full h-16 rounded"
              />
              <img
                src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
                alt="Room detail 2"
                className="object-cover w-full h-16 rounded"
              />
              <img
                src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
                alt="Room detail 3"
                className="object-cover w-full h-16 rounded"
              />
            </div>
          </div>
          <div className="col-span-2">
            <h2 className="mb-2 text-xl font-bold">Lợi ích</h2>
            <p className="mb-2">Giá của bạn bao gồm:</p>
            <ul className="mb-4 list-disc list-inside">
              <li>Giá giảm!</li>
              <li>Bãi đậu xe miễn phí, wifi, nước uống</li>
              <li>Bữa sáng</li>
            </ul>
            <h2 className="mb-2 text-xl font-bold">Sức chứa</h2>
            <p className="mb-2">4 Người</p>
          </div>
          <div className="flex flex-col items-end justify-between col-span-1">
            <div>
              <p className="mb-1 text-xs text-gray-500">12,400 reviews</p>
              <span className="inline-block px-2 py-1 mb-2 text-green-500 bg-green-200 rounded">
                Very Good
              </span>
            </div>
            <div>
              <p className="text-sm text-gray-500 line-through">₫6,000,000</p>
              <p className="text-sm text-gray-500 line-through">₫5,000,000</p>
              <p className="text-xl font-semibold text-red-500">₫2,500,000</p>
              <button className="px-4 py-2 mt-2 text-white bg-blue-500 rounded">
                Đặt phòng
              </button>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Executive Suite",
      content: (
        <div className="grid grid-cols-5 gap-4 p-4 bg-white shadow-md rounded-xl">
          <div className="col-span-2">
            <img
              src="https://images.unsplash.com/photo-1551218808-94e220e084d2"
              alt="Executive Suite"
              className="object-cover w-full h-32 mb-4 rounded"
            />
            <div className="grid grid-cols-3 gap-1">
              <img
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2"
                alt="Room detail 1"
                className="object-cover w-full h-16 rounded"
              />
              <img
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2"
                alt="Room detail 2"
                className="object-cover w-full h-16 rounded"
              />
              <img
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2"
                alt="Room detail 3"
                className="object-cover w-full h-16 rounded"
              />
            </div>
          </div>
          <div className="col-span-2">
            <h2 className="mb-2 text-xl font-bold">Lợi ích</h2>
            <p className="mb-2">Giá của bạn bao gồm:</p>
            <ul className="mb-4 list-disc list-inside">
              <li>Giá cao cấp!</li>
              <li>Bãi đậu xe miễn phí, wifi, nước uống</li>
              <li>Bữa sáng</li>
            </ul>
            <h2 className="mb-2 text-xl font-bold">Sức chứa</h2>
            <p className="mb-2">5 Người</p>
          </div>
          <div className="flex flex-col items-end justify-between col-span-1">
            <div>
              <p className="mb-1 text-xs text-gray-500">9,800 reviews</p>
              <span className="inline-block px-2 py-1 mb-2 text-green-500 bg-green-200 rounded">
                Outstanding
              </span>
            </div>
            <div>
              <p className="text-sm text-gray-500 line-through">₫7,000,000</p>
              <p className="text-sm text-gray-500 line-through">₫6,000,000</p>
              <p className="text-xl font-semibold text-red-500">₫3,000,000</p>
              <button className="px-4 py-2 mt-2 text-white bg-blue-500 rounded">
                Đặt phòng
              </button>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      {/* Navigation */}
      <nav className="sticky top-0 z-10 flex items-center justify-between w-full h-24 px-5 bg-white shadow-md">
        <div className="flex items-center space-x-5">
          <img className="" src={logo} alt="Logo" />
          <h2 className="text-2xl font-semibold text-sky-500">
            <a href="https://www.example.com">Promotion</a>
          </h2>
          <h2 className="text-2xl font-semibold text-sky-500">
            <a href="https://www.example.com">Hotel Collections</a>
          </h2>
          <h2 className="text-2xl font-semibold text-sky-500">
            <a href="https://www.example.com">Become Our Partner</a>
          </h2>
        </div>
        <div className="flex items-center space-x-5">
          <h2 className="text-2xl font-semibold text-sky-500">
            <a href="https://www.example.com">Register</a>
          </h2>
          <h2 className="text-2xl font-semibold text-sky-500">
            <a href="https://www.example.com">Log in</a>
          </h2>
        </div>
      </nav>
      {/* Search bar */}
      <div class="bg-sky-700 p-4 shadow-md">
        <div class="container mx-auto flex justify-between items-center">
          <label class="relative block w-1/5">
            <span class="sr-only">Search</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <input
              class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              name="search"
            />
          </label>
          <div class="flex items-center space-x-2 w-1/5">
            <input type="date" value="2024-08-02" class="border p-2 rounded" />
            <input type="date" value="2024-08-05" class="border p-2 rounded" />
          </div>
          <div class="flex items-center space-x-2 placeholder:text-slate-400 ">
            <input
              type="number"
              min="1"
              max="10"
              class="border p-2 rounded mx-2 w-20 text-center"
              placeholder="2"
            />
          </div>
          <button class="bg-blue-500 text-white p-3 rounded w-1/6 mx-4">
            Search
          </button>
        </div>
      </div>

      <body className="p-4 mx-auto bg-blue-100 ">
        <div class="max-w-7xl mx-auto justify-between items-center mt-5">
          {/*Image */}
          <div className="grid h-full grid-cols-4 gap-2 mx-auto bg-white">
            <div className="flex justify-center col-span-1 row-span-2 space-x-4">
              <img
                src="https://images.unsplash.com/photo-1721265576459-ac6433c540d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
                alt="Large Image"
                className="object-cover w-80 "
              />
            </div>
            <div className="flex items-center justify-center col-span-1 row-span-1">
              <img
                src="https://plus.unsplash.com/premium_photo-1719850361442-dd4203f47fb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D"
                alt="Small Image 1"
                className="object-cover h-32 w-80"
              />
            </div>
            <div className="flex items-center justify-center col-span-1 row-span-1 ">
              <img
                src="https://plus.unsplash.com/premium_photo-1719850361442-dd4203f47fb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D"
                alt="Small Image 1"
                className="object-cover h-32 w-80"
              />
            </div>
            <div className="flex items-center justify-center col-span-1 row-span-1 ">
              <img
                src="https://plus.unsplash.com/premium_photo-1719850361442-dd4203f47fb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D"
                alt="Small Image 1"
                className="object-cover h-32 w-80"
              />
            </div>
            <div className="flex items-center justify-center col-span-1 row-span-1">
              {" "}
              <img
                src="https://plus.unsplash.com/premium_photo-1719850361442-dd4203f47fb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D"
                alt="Small Image 1"
                className="object-cover h-32 w-80"
              />
            </div>
            <div className="flex items-center justify-center col-span-1 row-span-1 ">
              <img
                src="https://plus.unsplash.com/premium_photo-1719850361442-dd4203f47fb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D"
                alt="Small Image 1"
                className="object-cover h-32 w-80"
              />
            </div>
            <div className="flex items-center justify-center col-span-1 row-span-1 ">
              <img
                src="https://plus.unsplash.com/premium_photo-1719850361442-dd4203f47fb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D"
                alt="Small Image 1"
                className="object-cover h-32 w-80"
              />
            </div>
          </div>
          {/*Nav*/}
          <div className="p-4 my-3 bg-white shadow-md rounded-xl">
            <div className="flex items-center justify-between mx-auto max-w-7xl">
              <nav>
                <ul className="flex space-x-4">
                  <li>
                    <a href="#overview" className="text-blue-500">
                      Overview
                    </a>
                  </li>
                  <li>
                    <a
                      href="#location"
                      className="text-gray-600 hover:text-blue-500"
                    >
                      Location
                    </a>
                  </li>
                  <li>
                    <a
                      href="#reviews"
                      className="text-gray-600 hover:text-blue-500"
                    >
                      Reviews
                    </a>
                  </li>
                  <li>
                    <a
                      href="#highlights"
                      className="text-gray-600 hover:text-blue-500"
                    >
                      Highlights
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="flex items-center text-xl font-bold text-red-500">
                <span className="mr-2 text-lg font-medium text-gray-400">
                  from
                </span>
                ₫1,500,000
              </div>
            </div>
          </div>

          {/*Detail */}
          <div className="flex items-center justify-between bg-white shadow-md w-max-5xl rounded-xl">
            <div className="w-3/6 p-4 mx-4 ">
              <h1 className="text-3xl font-bold">New World Saigon Hotel</h1>
              <p className="mt-2 text-gray-600">
                76 Le Lai Street, District 1, Ho Chi Minh City, Vietnam, 700000
              </p>
              <p className="mt-4 t ext-gray-600">
                Get your trip off to a great start with a stay at this property,
                which offers free Wi-Fi in all rooms. Strategically situated in
                District 1, allowing you access and proximity to local
                attractions and sights. Don't leave before paying a visit to the
                famous War Remnants Museum. Rated with 5 stars, this
                high-quality property provides guests with access to restaurant,
                fitness center and spa on-site.
              </p>
            </div>
            <div className="w-1/6 p-4 mx-4">
              <h5 className="text-xl font-bold text-green-500">
                9.0 Excellent
              </h5>
              <span className="text-xs text-blue-400">20,400 reviews</span>
              <div className="w-full mt-4 text-center bg-sky-200 rounded-xl">
                Good,
                <br />
                Nice services
              </div>
            </div>
          </div>

          <div class="grid grid-rows-4 grid-flow-col gap-4 container my-4">
            {/*Hightlights*/}
            <div class="col-span-2 row-span-2  w-[800px] h-[200px] p-4 bg-white shadow-lg  rounded-xl">
              <h1 className="mb-4 text-3xl font-bold">Highlights</h1>
              <div className="grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col items-center">
                  <img
                    src="https://images.unsplash.com/photo-1720983415059-43ec4007cf97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D"
                    alt="Description 1"
                    className="object-cover w-12 h-12 mb-2 rounded-lg"
                  />
                  <p className="text-center">Description 1</p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="https://images.unsplash.com/photo-1720983415059-43ec4007cf97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D"
                    alt="Description 1"
                    className="object-cover w-12 h-12 mb-2 rounded-lg"
                  />
                  <p className="text-center">Description 1</p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="https://images.unsplash.com/photo-1720983415059-43ec4007cf97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D"
                    alt="Description 1"
                    className="object-cover w-12 h-12 mb-2 rounded-lg"
                  />
                  <p className="text-center">Description 1</p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="https://images.unsplash.com/photo-1720983415059-43ec4007cf97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D"
                    alt="Description 1"
                    className="object-cover w-12 h-12 mb-2 rounded-lg"
                  />
                  <p className="text-center">Description 1</p>
                </div>
              </div>
            </div>
            {/*Facilities*/}
            <div class="col-span-2 row-span-2  w-[800px] h-[200px] p-4 bg-white shadow-lg  rounded-xl">
              <h1 className="mb-4 text-3xl font-bold">Facilities</h1>
              <div className="grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center">
                  <p className="text-center">Description 1</p>
                  <p className="text-center">Description 1</p>

                  <p className="text-center">Description 1</p>
                </div>

                <div className="flex flex-col items-center">
                  <p className="text-center">Description 1</p>
                  <p className="text-center">Description 1</p>

                  <p className="text-center">Description 1</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-center">Description 1</p>
                  <p className="text-center">Description 1</p>

                  <p className="text-center">Description 1</p>
                </div>
              </div>
            </div>
            <div class="row-span-4 bg-red-400 w-[450px] items-center flex justify-center shadow-lg  rounded-xl">
              Maps
            </div>
          </div>
          <h2 className="text-2xl font-bold">Choose your room</h2>

          <Hotel tabs={tabs} />
        </div>
      </body>

      {/*Footer */}
      <footer class="bg-blue-50  p-4 h-60">
        <div class="max-w-7xl mx-auto flex flex-wrap justify-between items-center mt-5">
          <div class=" items-center  w-full md:w-auto mb-4 md:mb-0">
            <img src={logo} alt="Logo" />
            <p class="text-lg text-gray-500 my-5">
              We believe brand interaction is key
              <br /> in communication. Real innovations
              <br /> and a positive.
            </p>
          </div>
          <div class="flex flex-wrap w-4/6 md:w-4/6 justify-between">
            <div class="w-full md:w-1/6 mb-4 md:mb-0">
              <h5 class="text-xl font-semibold mb-2">About us</h5>
              <ul class="list-none">
                <li>
                  <a href="#" class="hover:text-sky-300 text-gray-400">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-sky-300 text-gray-400">
                    FAQ’s
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-sky-300 text-gray-400">
                    News
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-sky-300 text-gray-400">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-full md:w-1/6 mb-4 md:mb-0">
              <h5 class="text-xl font-semibold mb-2">Company </h5>
              <ul class="list-none">
                <li>
                  <a href="#" class="hover:text-sky-300 text-gray-400">
                    Core values
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-sky-300 text-gray-400">
                    Partner w/ us
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-sky-300 text-gray-400">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-sky-300 text-gray-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-full md:w-1/6 mb-4 md:mb-0">
              <h5 class="text-xl font-semibold mb-2">Support</h5>
              <ul class="list-none">
                <li>
                  <a href="#" class="hover:text-sky-300 text-gray-400">
                    Support center
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-sky-300 text-gray-400">
                    Feedback
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-sky-300 text-gray-400">
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
              <button class="bg-sky-300 hover:bg-sky-400 hover:text-white active:bg-sky-400 px-6 py-4">
                Get Access
              </button>
            </div>
          </div>
        </div>
        <p className="text-sm text-center bg-blue-50 text-slate-600">
          &copy; 2024 Take a Breath. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
