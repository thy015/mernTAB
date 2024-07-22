import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function HotelItem(props) {
  const hotel = props.hotelProps;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detailhotel/${hotel._id}`);
  };
  return (
    <div onClick={handleClick} className="flex mb-4 overflow-hidden bg-white rounded shadow-md h-60">
        <div className="flex w-[370px]">
          <img
            src="https://plus.unsplash.com/premium_photo-1720706435477-bb1d79c2224c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D"
            alt="Hotel 1"
            className="object-cover w-full"
          />
          <div className="flex flex-col justify-between w-1/4 ml-2 space-y-1">
            <img
              src="https://images.unsplash.com/photo-1721404832661-658016cde3d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
              alt="Small 1"
              className="object-cover h-1/5"
            />
            <img
              src="https://images.unsplash.com/photo-1721404832661-658016cde3d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
              alt="Small 2"
              className="object-cover h-1/5"
            />
            <img
              src="https://images.unsplash.com/photo-1721404832661-658016cde3d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
              alt="Small 3"
              className="object-cover h-1/5"
            />
            <img
              src="https://images.unsplash.com/photo-1721404832661-658016cde3d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
              alt="Small 4"
              className="object-cover h-1/5"
            />
            <img
              src="https://images.unsplash.com/photo-1721404832661-658016cde3d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
              alt="Small 5"
              className="object-cover h-1/5"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between w-2/4 p-4">
          <div>
            <h2 className="text-xl font-semibold">{hotel.companyName}</h2> {/*companyName */}
            <p className="text-sm text-gray-500">
              {hotel.address}
            </p>{/*Address */}  
            <p className="mt-2">This property offers:</p>
            <ul className="justify-between inline-block">
              <li className="inline-block rounded border border-sky-100 bg-sky-50 px-2 py-0.5 my-2">
                Sales
              </li>
              <li className="inline-block mx-1 rounded border border-sky-100 bg-sky-50 px-2 py-0.5 my-2">
                Marketing
              </li>
              <li className="inline-block rounded border border-sky-100 bg-sky-50 px-2 py-0.5 my-2">
                SEO
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1 h-56 my-2 bg-slate-300"></div>
        <div className="flex flex-col items-end justify-between m-2 text-right">
          <div>
            <span className="block text-xs text-blue-400">
              20,400 reviews
            </span>
            <span className="block px-2 py-1 text-green-500 bg-green-200 rounded">
              Excellent
            </span>
          </div>
          <div>
            <p className="text-sm text-gray-600">
              Per night after taxes and fees
            </p>
            <p className="text-sm text-gray-500 line-through">
              ₫1,750,000
            </p>
            <p className="text-xl font-semibold text-red-500">
              ₫1,500,000
            </p>
          </div>
        </div>
      </div>
  )
}
