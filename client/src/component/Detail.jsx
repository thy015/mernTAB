import React, {useState,useEffect} from "react";
import { useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Navigation from "./Navigation"
import Footer from "./Footer";
import axios from "axios";

export default function Detail() {
  const { _id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const hotelData = async () => {
      try {
        const res = await axios.get(`https://mern-tab-be.vercel.app/detail/${_id}`);
        setHotel(res.data);
        //console.log(response.data)
      } catch (error) {
        console.error('Error fetching hotel data:', error);
      }
    };
    hotelData();
  }, [_id]);
 
  if (!hotel) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Navigation />
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
                <ul className="flex my-auto space-x-40 text-xl fontfont-medium">
                  <li>
                    <a href="#overview" className="text-blue-500 no-underline ">
                      Overview
                    </a>
                  </li>
                  <li>
                    <a
                      href="#location"
                      className="text-gray-600 no-underline hover:text-blue-500"
                    >
                      Location
                    </a>
                  </li>
                  <li>
                    <a
                      href="#reviews"
                      className="text-gray-600 no-underline hover:text-blue-500"
                    >
                      Reviews
                    </a>
                  </li>
                  <li>
                    <a
                      href="#highlights"
                      className="text-gray-600 no-underline hover:text-blue-500"
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
                ₫1,500,000 {/* minPrice */}
              </div>
            </div>
          </div>

          {/*Detail */}
          <div className="flex items-center justify-between bg-white shadow-md w-max-5xl rounded-xl">
            <div className="w-3/6 p-4 mx-4 ">
              <h1 className="text-3xl font-bold">{hotel.companyName} - {hotel.city}</h1> {/*companyName*/}
              <p className="mt-2 text-gray-600">
                {hotel.address}
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
          {/*Hightlights*/}
          <div className="flex flex-col w-3/5 p-4 my-4 bg-white shadow-md rounded-xl">
            <h1 className="mb-4 text-3xl font-bold">Highlights</h1>
            <div className="grid grid-cols-1 gap-24 mx-auto sm:grid-cols-2 lg:grid-cols-4">
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
          <div className="flex flex-col w-3/5 p-4 my-4 bg-white shadow-md rounded-xl">
            <h1 className="mb-4 text-3xl font-bold">Highlights</h1>
            <div className="grid grid-cols-1 gap-20 mx-auto sm:grid-cols-2 lg:grid-cols-4">
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
          <h2 className="text-2xl font-bold">Choose your room</h2>

          <Tabs>
            <TabList>
              <Tab>Premier Room Twin</Tab>
              <Tab>Deluxe Room </Tab>
              <Tab>Deluxe Triple Room </Tab>
              <Tab>Executive Suite </Tab>
            </TabList>

            <TabPanel>
              <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
        </div>
      </body>
      <Footer />
      </div>
  );
}
