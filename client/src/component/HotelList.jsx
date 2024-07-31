import React, { useState,useEffect } from "react";
import logo from "../component/logo.png";
import axios from "axios";
import HotelItem from "./HotelItem";
import Navigation from "./Navigation";
const HotelList = () =>  {
  const [value, setValue] = useState(1750000);
  const [max, setMax] = useState(1000000);

  {/*get API */}
  const [hotelListState, setHotelListState] = useState([])
  useEffect(()=>{
      const getHotelList = async () =>{
          try{
              const res =await axios.get(
                  `${process.env.REACT_APP_BACKEND_BASEURL}/hotelList`
              )
              //console.log(res.data) 
              setHotelListState(res.data) 
          }catch(error){
              console.log(error.messege)
          }
      }   
      getHotelList()
  },[])
  

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleMaxChange = (e) => {
    setMax(e.target.value);
  };
  return (
    <div className="mx-auto ">
      {/* Navigation */}  
      <Navigation/>

      <body class="bg-blue-100	mx-auto">
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
              <input type="date" class="border p-2 rounded" />
              <input type="date" class="border p-2 rounded" />
            </div>
            <div class="flex items-center space-x-2 placeholder:text-slate-400 ">
              <input
                type="number"
                min="1"
                max="10"
                class="border p-2 rounded mx-2 w-40 text-center"
                placeholder="2"
              />
            </div>
            <button class="bg-blue-500 text-white p-3 rounded w-1/6 mx-4">
              Search
            </button>
          </div>
        </div>
        {/* Budget*/}
        <div class="container mx-auto mt-4 flex">
          <div class="w-1/4 p-4 h-1/2 bg-white shadow-md rounded-md">
            <div className="mb-4">
              <h2 className="text-lg font-semibold">Your budget</h2>
              <input
                type="range"
                min="0"
                max={max}
                value={value}
                onChange={handleValueChange}
                className="w-full mt-2"
              />
              <div className="flex justify-between text-sm">
                <span>Min 0₫</span>
                <span>Max {value.toLocaleString()}₫</span>
              </div>
            </div>
            {/* Rate */}
            <div class="mb-4">
              <h2 class="text-lg font-semibold">Star rating</h2>
              <ul class="mt-2 space-y-2">
                <li>
                  <input type="checkbox" name="star" id="star5" />
                  <label className="text-amber-400" for="star5">
                    ★★★★★
                  </label>
                </li>
                <li>
                  <input type="checkbox" name="star" id="star4" />{" "}
                  <label className="text-amber-400" for="star4">
                    ★★★★
                  </label>
                </li>
                <li>
                  <input type="checkbox" name="star" id="star3" />{" "}
                  <label className="text-amber-400" for="star3">
                    ★★★
                  </label>
                </li>
              </ul>
            </div>
            {/* facility */}
            <div class="mb-4">
              <h2 class="text-lg font-semibold">Room amenities</h2>
              <ul class="mt-2 space-y-2">
                <li>
                  <input type="checkbox" id="tv" /> <label for="tv">TV</label>
                </li>
                <li>
                  <input type="checkbox" id="refrigerator" />{" "}
                  <label for="refrigerator">Refrigerator </label>
                </li>
                <li>
                  <input type="checkbox" id="privatepool" />{" "}
                  <label for="privatepool">Private pool</label>
                </li>
                <li>
                  <input type="checkbox" id="airconditioning" />{" "}
                  <label for="airconditioning">Air conditioning</label>
                </li>
                <li>
                  <input type="checkbox" id="bathtub" />{" "}
                  <label for="bathtub">Bathtub</label>
                </li>
              </ul>
            </div>
          </div>

          <div class="w-3/4 p-4">
            {/*Sort*/}
            <div className="flex justify-between mb-4 bg-white rounded shadow-md">
              <button className="w-1/4 mx-2 font-semibold text-blue-500 rounded border-slate-300 hover:border-slate-400 ">
                Best match
              </button>
              <button className="w-1/4 p-4 mx-2 rounded hover:bg-sky-500 hover:text-white hover:ring-sky-500">
                Lowest price first
              </button>
              <button className="w-1/4 p-4 mx-2 rounded hover:bg-sky-500 hover:text-white hover:ring-sky-500">
                Distance
              </button>
              <button className="w-1/4 p-4 ml-2 rounded hover:bg-sky-500 hover:text-white hover:ring-sky-500">
                Hot Deals!
              </button>
            </div>
            {/*hotel*/}
            {hotelListState.map( hotel =>{
              return <HotelItem hotelProps={hotel}/>
            })}
            
          </div>
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
          <div class="flex flex-wrap w-full md:w-4/6">
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
                  <input type="email" class="peer " placeholder="Enter your " />
                  <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
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
export default HotelList;
