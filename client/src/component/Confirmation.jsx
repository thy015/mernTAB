import React from "react";

export default function Confirmation() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-blue-100">
      <div className="max-w-md p-6 text-center bg-white rounded-lg shadow-md">
        <h1 className="mb-4 text-2xl font-semibold">
          Thank you for booking with us!
        </h1>
        <p className="mb-4">
          We look forward to welcoming you and hope you have a wonderful stay.
        </p>
        <p className="mb-4">
          If you have any questions or need to make changes to your booking,
          please feel free to contact us at{" "}
          <p className="font-bold">tabbooking@gmail.com</p>
        </p>
        <p className="mb-4">Have a great day!</p>
        <p className="font-semibold">Thank You</p>
      </div>
    </div>
  );
}
