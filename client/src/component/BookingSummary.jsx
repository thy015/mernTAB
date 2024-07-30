import React from "react";

const BookingSummary = ({ bookingDetails, onEdit }) => {
  const handleConfirmBooking = (e) => {
    e.preventDefault();
    window.location.assign("/confirmation");
  };
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl p-6 mx-auto bg-white rounded-lg shadow-md">
        <h1 className="flex items-center justify-center mx-auto mb-4 text-sky-500">
          Booking Summary
        </h1>{" "}
        <div className="mb-4">
          <h3 className="mb-4 font-semibold text-sky-500">
            Customer Information
          </h3>
          <p>
            <strong>Full name:</strong> {bookingDetails.fullName}
          </p>
          <p>
            <strong>Email:</strong> {bookingDetails.email}
          </p>
          <p>
            <strong>Phone number:</strong> {bookingDetails.phoneNumber}
          </p>
          <p>
            <strong>Country:</strong> {bookingDetails.country}
          </p>
        </div>
        <div className="mb-4">
          <h3 className="mb-4 font-semibold text-sky-500">Room Details</h3>
          <p>
            <strong>Room type:</strong> {bookingDetails.roomType}
          </p>
          <p>
            <strong>Bed type:</strong> {bookingDetails.bedType}
          </p>
          <p>
            <strong>Special requests:</strong> {bookingDetails.specialRequests}
          </p>
          <p>
            <strong>Extras:</strong> {bookingDetails.extras.join(", ")}
          </p>
        </div>
        <div className="mb-4">
          <h3 className="mb-4 font-semibold text-sky-500">Stay Information</h3>
          <p>
            <strong>Check-in date:</strong> {bookingDetails.checkInDate}
          </p>
          <p>
            <strong>Check-out date:</strong> {bookingDetails.checkOutDate}
          </p>
          <p>
            <strong>Nights:</strong> {bookingDetails.nights}
          </p>
        </div>
        <div className="mb-4">
          <h3 className="mb-4 font-semibold text-sky-500">Price Summary</h3>
          <p>
            <strong>Room price:</strong> {bookingDetails.roomPrice}
          </p>
          <p>
            <strong>Discount:</strong> {bookingDetails.discount}
          </p>
          <p>
            <strong>Total price:</strong>{" "}
            <span className="text-red-500">{bookingDetails.totalPrice}</span>
          </p>
          <p>
            <strong>Payment method:</strong> {bookingDetails.paymentMethod}
          </p>
        </div>
        <div className="flex justify-between mt-6">
          <button
            className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600"
            onClick={onEdit}
          >
            Edit Booking
          </button>
          <button
            onClick={handleConfirmBooking}
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;