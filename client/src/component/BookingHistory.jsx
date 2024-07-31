import React, { useEffect, useState } from "react";
import axios from "axios";

const BookingHistory = () => {
  const [bookingHistoryData, setBookingHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getToken = () => {
    return localStorage.getItem("authToken");
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
          "https://mern-tab-be.vercel.app/book/bookingHistory",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data) {
          const { paidRooms = [], receiptIDs = [] } = response.data; // Provide default value
          console.log(paidRooms);
          // Combine paidRooms and receiptIDs based on some matching logic
          const bookingData = paidRooms.map((room, index) => ({
            ...room,
            receiptID: receiptIDs[index]?._id // Assuming order matches, adjust as necessary
          }));
          setBookingHistoryData(bookingData);
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

  const handleCancelRoom = async (receiptID, cusID) => {
    try {
      console.log(`Attempting to cancel room with receiptID: ${receiptID}, cusID: ${cusID}`);
      const response = await axios.post(
        'https://mern-tab-be.vercel.app/reqCancel/cusSend',
        { receiptID, cusID },
        {
          headers: {
            'Authorization': `Bearer ${getToken()}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log("Cancel room response:", response.data);
      if (response.data.status === "OK") {
        alert("Request to cancel room sent to admin.");
      } else {
        alert(response.data.message || "An error occurred while sending the cancel room request.");
      }
    } catch (error) {
      console.error("Error in handleCancelRoom:", error);
      alert("An error occurred while connecting to the server.");
    }
  };

  return (
    <div className="p-8 bg-gray-100">
      <div className="max-w-6xl p-6 mx-auto bg-white rounded-lg shadow-md">
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
            <div key={index} className="flex p-4 my-3 bg-blue-100 rounded-md">
              <div className="w-2/3 mb-4">
                <h3 className="mb-2 font-semibold text-sky-600">
                  {booking.companyName}
                </h3>
                <p>
                  <strong>Type of room:</strong> {booking.typeOfRoom}
                </p>
                <p>
                  <strong>Capacity:</strong> {booking.capacity}
                </p>
              </div>
              <div className="relative w-1/3 mb-4">
                <br />
                <p>
                  <strong>Number of beds:</strong> {booking.numberOfBeds}
                </p>
                <p>
                  <strong>Total price:</strong> {booking.money} vnd
                </p>
                <button
                  className="absolute bottom-0 right-0 px-4 py-2 mt-4 text-white bg-red-500 rounded-md hover:bg-blue-600"
                  onClick={() => handleCancelRoom(booking.receiptID, booking.cusID)}
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
