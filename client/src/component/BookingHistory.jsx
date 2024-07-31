import React, { useEffect, useState } from "react";
import axios from "axios";

const BookingHistory = () => {
  const [bookingHistoryData, setBookingHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getToken = () => {
    return localStorage.getItem('authToken'); 
  };

  useEffect(() => {
    const fetchBookingHistory = async () => {
      try {
        const token = getToken();
        if (!token) {
          alert("Please log in");
          return;
        }

        const response = await axios.get(
          'https://mern-tab-be.vercel.app/book/bookingHistory',
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.data) {
          const { paidRooms, hotelNames } = response.data;
          
          // Merge room and hotel data
          const mergedData = paidRooms.map(room => {
            const hotel = hotelNames.find(h => h.hotelID === room.hotelID);
            return { ...room, companyName: hotel ? hotel.companyName : "Unknown" };
          });

          setBookingHistoryData(mergedData);
        } else {
          setBookingHistoryData([]);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching booking history:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBookingHistory();
  }, []);

  return (
    <div className="p-8 bg-gray-100 ">
      <div className="max-w-6xl p-6 mx-auto bg-white rounded-lg shadow-md ">
        <h1 className="flex items-center justify-center mx-auto mb-4 text-2xl text-sky-500">
          Booking History
        </h1>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : bookingHistoryData.length === 0 ? (
          <p>No booking history available.</p>
        ) : (
          bookingHistoryData.map((booking, index) => (
            <div
              key={index}
              className="flex p-4 my-3 bg-blue-100 rounded-md"
            >
              <div className="w-2/3 mb-4">
                <h3 className="mb-2 font-semibold text-sky-600">{booking.companyName}</h3>
                <p>
                  <strong>Room name:</strong> {booking.typeOfRoom}
                </p>
                <p>
                  <strong>Capacity:</strong> {booking.capacity}
                </p>
              </div>
              <div className="relative w-1/3 mb-4">
                <br />
                <p>
                  <strong>Room price:</strong> {booking.money}
                </p>
                <p>
                  <strong>Discount:</strong> {booking.discount}
                </p>
                <p>
                  <strong>Hotel name:</strong> {booking.companyName}
                </p>
                <button
                  className="absolute bottom-0 right-0 px-4 py-2 mt-4 text-white bg-red-500 rounded-md hover:bg-blue-600"
                >
                  Cancel room
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BookingHistory;
