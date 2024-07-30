import React, { useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import BookingSummary from "./BookingSummary";

export default function Booking() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    country: "",
    roomType: "",
    bedType: "",
    specialRequests: "",
    extras: [],
    checkInDate: "2024-08-02",
    checkOutDate: "2024-08-03",
    nights: 1,
    roomPrice: "450,000 VND",
    discount: "",
    totalPrice: "450,000 VND",
    paymentMethod: "",
  });

  const [showSummary, setShowSummary] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        extras: checked
          ? [...prevData.extras, value]
          : prevData.extras.filter((extra) => extra !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone number is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.paymentMethod)
      newErrors.paymentMethod = "Payment method is required";
    return newErrors;
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setShowSummary(true);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <Navigation />

      {showSummary ? (
        <BookingSummary
          bookingDetails={formData}
          onEdit={() => setShowSummary(false)}
        />
      ) : (
        <form onSubmit={handleNextStep}>
          <div className="min-h-screen p-8 bg-blue-100">
            <div className="p-6 mx-auto bg-white rounded-lg shadow-md max-w-7xl">
              <h1 className="flex items-center justify-center mx-auto mb-4 text-sky-500">
                Booking Detail
              </h1>
              <div className="grid grid-cols-2 gap-4">
                {/* Left*/}
                <div className="col-span-1 space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="mb-4 font-semibold text-sky-500">
                      Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h5 className="block mb-1 font-semibold">Full name</h5>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border rounded-lg ${
                            errors.fullName ? "border-red-500" : ""
                          }`}
                          placeholder="Your name"
                        />
                        {errors.fullName && (
                          <p className="text-sm text-red-500">
                            {errors.fullName}
                          </p>
                        )}
                      </div>
                      <div>
                        <h5 className="block mb-1 font-semibold">Email</h5>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border rounded-lg ${
                            errors.email ? "border-red-500" : ""
                          }`}
                          placeholder="example@gmail.com"
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500">{errors.email}</p>
                        )}
                      </div>
                      <div className="flex flex-row col-span-2 space-x-2">
                        <div className="flex-1">
                          <h5 className="block mb-1 font-semibold">
                            Phone number
                          </h5>
                          <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded-lg ${
                              errors.phoneNumber ? "border-red-500" : ""
                            }`}
                            placeholder="+84 123 456 789"
                          />
                          {errors.phoneNumber && (
                            <p className="text-sm text-red-500">
                              {errors.phoneNumber}
                            </p>
                          )}
                        </div>
                        <div className="flex-1">
                          <h5 className="block mb-1 font-semibold">
                            Select your country
                          </h5>
                          <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded-lg ${
                              errors.country ? "border-red-500" : ""
                            }`}
                          >
                            <option value="">Select your country</option>
                            <option value="VietNam">Vietnam</option>
                            <option value="Canada">Canada</option>
                            <option value="Switzerland">Switzerland</option>
                          </select>
                          {errors.country && (
                            <p className="text-sm text-red-500">
                              {errors.country}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Special Order */}
                  <div className="p-4 border rounded-lg">
                    <h3 className="mb-4 font-semibold text-sky-500">
                      Special Order
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h5 className="block mb-1 font-semibold">Room type</h5>
                        <select
                          name="roomType"
                          value={formData.roomType}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-lg"
                        >
                          <option value="">Room Type</option>
                          <option value="premier">Premier Room Twin</option>
                        </select>
                      </div>
                      <div>
                        <h5 className="block mb-1 font-semibold">Bed type</h5>
                        <select
                          name="bedType"
                          value={formData.bedType}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-lg"
                        >
                          <option>Single</option>
                          <option>Double</option>
                        </select>
                      </div>
                      <div>
                        <h5 className="block mb-1 font-semibold">
                          Something special...?
                        </h5>
                        <textarea
                          name="specialRequests"
                          value={formData.specialRequests}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-lg"
                          rows="4"
                        ></textarea>
                      </div>
                      <div className="flex space-x-4">
                        <div>
                          <label className="inline-flex items-center">
                            <input
                              type="checkbox"
                              name="extras"
                              value="Balcony"
                              checked={formData.extras.includes("Balcony")}
                              onChange={handleChange}
                              className="form-checkbox"
                            />
                            <span className="ml-2">Balcony</span>
                          </label>
                        </div>
                        <div>
                          <label className="inline-flex items-center">
                            <input
                              type="checkbox"
                              name="extras"
                              value="Air conditioning"
                              checked={formData.extras.includes(
                                "Air conditioning"
                              )}
                              onChange={handleChange}
                              className="form-checkbox"
                            />
                            <span className="ml-2">Air conditioning</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Payment Method */}
                  <div className="p-4 border rounded-lg">
                    <h3 className="mb-4 font-semibold text-sky-500">
                      Payment Method
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="Google Pay"
                            checked={formData.paymentMethod === "Google Pay"}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded-lg form-radio ${
                              errors.country ? "border-red-500" : ""
                            }`}
                          />
                          <span className="ml-2">Google Pay</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="Apple Pay"
                            checked={formData.paymentMethod === "Apple Pay"}
                            onChange={handleChange}
                            className="form-radio"
                          />
                          <span className="ml-2">Apple Pay</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="Visa"
                            checked={formData.paymentMethod === "Visa"}
                            onChange={handleChange}
                            className="form-radio"
                          />
                          <span className="ml-2">Visa</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="col-span-1 space-y-4">
                  {/* Hotel Info */}
                  <div className="relative p-4 border rounded-lg">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/2">
                        <div className="absolute left-0 px-2 py-1 text-white bg-red-500 rounded-md -top-4">
                          75% DISCOUNT!
                        </div>
                        <img
                          src="https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw4N3x8ZW58MHx8fHx8"
                          alt="iBis Saigon Airport"
                          className="object-cover w-full h-32 mb-4 rounded-lg md:mb-0 md:h-auto"
                        />
                      </div>
                      <div className="md:w-1/2 md:pl-4">
                        <h2 className="mb-4 text-lg font-semibold">
                          iBis Saigon Airport
                        </h2>
                        <p>
                          76 Le Lai Street, District 1, Ho Chi Minh City,
                          Vietnam, 700000
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Room Info */}
                  <div className="relative p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-semibold">
                        2 Aug 2024 - 3 Aug 2024
                      </h2>
                      <h2 className="text-xl font-semibold">x1 night</h2>
                    </div>
                    <div className="flex flex-col md:flex-row">
                      <img
                        src="https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw4N3x8ZW58MHx8fHx8"
                        alt="Premier Room Twin"
                        className="object-cover w-full h-32 mb-4 rounded-lg md:mb-0 md:h-auto md:w-1/2"
                      />
                      <div className="md:w-1/2 md:pl-4">
                        <p>1x Premier Room Twin</p>
                        <p>2 Adults</p>
                        <h5 className="font-semibold"> Your price includes:</h5>
                        <ul className="mb-4 list-disc list-inside">
                          <li>Extra low price!</li>
                          <li>Breakfast</li>
                          <li>Free Wi-fi</li>
                        </ul>
                        <div className="space-y-1">
                          <p className="">Promo code: </p>
                          <input
                            className="p-3 border-2 rounded-md "
                            type="text"
                            name="promo"
                            placeholder="Enter your promo code"
                          />

                          <p className="text-xl font-semibold text-red-500">
                            Price: 450,000 VND
                          </p>
                          <p className="text-sm">
                            Included in price: Tax 8%, Service charge 5%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-right">
                <button
                  type="submit"
                  className="px-6 py-2 text-white bg-blue-500 rounded-lg"
                >
                  Next step
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
      <Footer />
    </div>
  );
}