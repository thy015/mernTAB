import React from "react";

const BookingHistory = () => {
  const bookingHistoryData = [
    {
      companyName: "Grand Hotel",
      roomName: "Deluxe room",
      fullName: "John Doe",
      email: "john@example.com",
      phoneNumber: "123-456-7890",
      country: "USA",
      roomType: "Deluxe Suite",
      bedType: "King",
      specialRequests: "Late check-in",
      extras: ["Breakfast", "Airport Shuttle"],
      checkInDate: "2024-08-01",
      checkOutDate: "2024-08-05",
      nights: 4,
      roomPrice: "$200",
      discount: "$20",
      totalPrice: "$180",
    },
    {
      companyName: "Grand Hotel",
      roomName: "Deluxe room",
      fullName: "John Doe",
      email: "john@example.com",
      phoneNumber: "123-456-7890",
      country: "USA",
      roomType: "Deluxe Suite",
      bedType: "King",
      specialRequests: "Late check-in",
      extras: ["Breakfast", "Airport Shuttle"],
      checkInDate: "2024-08-01",
      checkOutDate: "2024-08-05",
      nights: 4,
      roomPrice: "$250",
      discount: "$20",
      totalPrice: "$230",
    },
    // Add more booking records as needed
  ];

  return (
    <div className="p-8 bg-gray-100 ">
      <div className="max-w-6xl p-6 mx-auto bg-white rounded-lg shadow-md ">
        <h1 className="flex items-center justify-center mx-auto mb-4 text-2xl text-sky-500">
          Booking History
        </h1>
        {bookingHistoryData.length === 0 ? (
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
                  <strong>Room name:</strong> {booking.roomName}
                </p>
               
                <p>
                  <strong>Check in - Check out date:</strong> {booking.checkInDate} -{" "}
                  {booking.checkOutDate}
                </p>
                <p>
                  <strong>Nights:</strong> {booking.nights}
                </p>
              </div>
              <div className="relative w-1/3 mb-4">
                <br />
                <p>
                  <strong>Room price:</strong> {booking.roomPrice}
                </p>
                <p>
                  <strong>Discount:</strong> {booking.discount}
                </p>
                <p>
                  <strong>Total price:</strong>{" "}
                  <span className="text-red-500">{booking.totalPrice}</span>
                </p>
                <button
                  className="absolute bottom-0 right-0 px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
               
                >
                  Leave a Comment
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