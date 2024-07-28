import React, { useState } from 'react';

export const Payment = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    country: 'Vietnam',
  });
  const [roomType, setRoomType] = useState('');
  const [bedType, setBedType] = useState('');
  const [selectedCard, setSelectedCard] = useState('');

  const steps = [
    { id: 1, title: '1' },
    { id: 2, title: '2' },
    { id: 3, title: '3' },
  ];

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    const countryCodes = {
      'Vietnam': '+84',
      'USA': '+1',
      'UK': '+44',
    };
    setFormValues({
      ...formValues,
      country: selectedCountry,
      phoneNumber: countryCodes[selectedCountry] || '+84',
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleRoomTypeChange = (event) => {
    setRoomType(event.target.value);
  };

  const handleBedTypeChange = (event) => {
    setBedType(event.target.value);
  };

  const handleCardSelect = (cardType) => {
    setSelectedCard(cardType);
  };

  const handleNext = () => {
    if (currentStep === 1) {
      const { fullName, email, phoneNumber } = formValues;
      if (fullName && email && phoneNumber) {
        setCurrentStep(currentStep + 1);
      }
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const isNextEnabled = () => {
    if (currentStep === 1) {
      const { fullName, email, phoneNumber } = formValues;
      return fullName && email && phoneNumber;
    }
    if (currentStep === 2) {
      return true;
    }
    return false;
  };

  return (
    <div className="p-6">
      {/* Steps Panel */}
      <div className="relative flex justify-center items-center">
        <div className="flex items-center space-x-4">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex flex-col items-center">
              <button
                className={`inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm font-semibold shadow-inner
                  ${currentStep >= step.id
                    ? 'bg-gray-700 text-white shadow-white/10 hover:bg-gray-600 focus:outline-none'
                    : 'bg-white text-gray-700 shadow-gray-300 hover:bg-gray-100 focus:outline-none'
                }`}
                onClick={() => setCurrentStep(step.id)}
                disabled={currentStep < step.id}
              >
                {step.title}
              </button>
              {/* Line connecting the steps */}
              {index < steps.length - 1 && (
                <div
                  className={`absolute h-1 ${currentStep > step.id ? 'bg-gray-700' : 'bg-gray-300'} transition-colors`}
                  style={{
                    width: '2rem', // Adjust this width as needed
                    top: '50%',
                    left: '100%',
                    marginLeft: '0.5rem',
                    transform: 'translateY(-50%)',
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="border border-gray-300 rounded p-4 bg-gray-100 mt-6">
        {currentStep === 1 && (
          <div>
            {/* Form Information Section */}
            <div className="flex space-x-6 mb-6">
              <div className="w-1/2">
                <h2 className="text-xl font-bold mb-4">Information</h2>
                <input
                  type="text"
                  name="fullName"
                  value={formValues.fullName}
                  onChange={handleInputChange}
                  className="block w-full mb-2 p-2 border border-gray-300 rounded"
                  placeholder="Full Name"
                />
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  className="block w-full mb-2 p-2 border border-gray-300 rounded"
                  placeholder="Email"
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formValues.phoneNumber}
                  onChange={handleInputChange}
                  className="block w-full mb-2 p-2 border border-gray-300 rounded"
                  placeholder={`Phone Number (${formValues.country})`}
                />
                <select
                  className="block w-full mb-2 p-2 border border-gray-300 rounded"
                  onChange={handleCountryChange}
                  value={formValues.country}
                >
                  <option value="Vietnam">Vietnam</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  {/* Add more countries as needed */}
                </select>
              </div>

              {/* Image and Info Section */}
              <div className="w-1/2">
                <div className="bg-white p-4 rounded shadow-md">
                  <img
                    src="https://a0.muscache.com/im/pictures/d6ce61b5-87e5-4f45-b54d-42f2f7ef9a55.jpg"
                    alt="Property"
                    className="w-full h-auto rounded"
                  />
                  <div className="mt-4">
                    <p className="font-bold">Name</p>
                    <p>Address</p>
                    <p>Rate</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Order Section */}
            <div className="flex space-x-6">
              <div className="w-1/2">
                <h2 className="text-xl font-bold mb-4">Special Order</h2>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1">Room Type</label>
                  <select
                    className="block w-full p-2 border border-gray-300 rounded"
                    value={roomType}
                    onChange={handleRoomTypeChange}
                  >
                    <option value="">Room Type</option>
                    <option value="Balcony">Balcony</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1">Bed Type</label>
                  <select
                    className="block w-full p-2 border border-gray-300 rounded"
                    value={bedType}
                    onChange={handleBedTypeChange}
                  >
                    <option value="">Bed Type</option>
                    <option value="Double Bed">Double Bed</option>
                    <option value="Single Bed">Single Bed</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                <textarea
                  className="block w-full mb-4 p-2 border border-gray-300 rounded"
                  placeholder="Something Special Request Others"
                  rows="4"
                />
              </div>

              {/* Image and Info Section */}
              <div className="w-1/2">
                <div className="bg-white p-4 rounded shadow-md">
                  <img
                    src="https://a0.muscache.com/im/pictures/81dca5d6-5a86-49bc-8eca-4a8610a07d27.jpg"
                    alt="Property"
                    className="w-full h-auto rounded"
                  />
                  <div className="mt-4">
                    <p className="font-bold">Date</p>
                    <p>Information Room</p>
                    <p>Quantity Customer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pay Method Section */}
            <div className="mt-6">
              <h2 className="text-xl font-bold mb-4">Pay Method</h2>
              <div className="flex space-x-4">
                <div
                  className={`flex flex-col items-center p-4 border rounded-lg shadow-md transition-transform transform ${
                    selectedCard === 'visa' ? 'scale-105' : ''
                  } hover:shadow-lg`}
                >
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="visa"
                      checked={selectedCard === 'visa'}
                      onChange={() => handleCardSelect('visa')}
                      className="mr-2"
                    />
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/870/870900.png"
                      alt="Visa"
                      className="w-16 h-16"
                    />
                  </label>
                  <p className="mt-2">Visa</p>
                </div>
                <div
                  className={`flex flex-col items-center p-4 border rounded-lg shadow-md transition-transform transform ${
                    selectedCard === 'mastercard' ? 'scale-105' : ''
                  } hover:shadow-lg`}
                >
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="mastercard"
                      checked={selectedCard === 'mastercard'}
                      onChange={() => handleCardSelect('mastercard')}
                      className="mr-2"
                    />
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/61/61136.png"
                      alt="Mastercard"
                      className="w-16 h-16"
                    />
                  </label>
                  <p className="mt-2">MasterCard</p>
                </div>
                <div
                  className={`flex flex-col items-center p-4 border rounded-lg shadow-md transition-transform transform ${
                    selectedCard === 'paypal' ? 'scale-105' : ''
                  } hover:shadow-lg`}
                >
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={selectedCard === 'paypal'}
                      onChange={() => handleCardSelect('paypal')}
                      className="mr-2"
                    />
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/174/174861.png"
                      alt="PayPal"
                      className="w-16 h-16"
                    />
                  </label>
                  <p className="mt-2">PayPal</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            {/* Step 2 Content */}
            <h2 className="text-xl font-bold mb-4">Review Your Details</h2>
            <div className="mb-4">
              <h3 className="font-bold">Information:</h3>
              <p><strong>Full Name:</strong> {formValues.fullName}</p>
              <p><strong>Email:</strong> {formValues.email}</p>
              <p><strong>Phone Number:</strong> {formValues.phoneNumber}</p>
              <p><strong>Country:</strong> {formValues.country}</p>
            </div>
            <div className="mb-4">
              <h3 className="font-bold">Special Order:</h3>
              <p><strong>Room Type:</strong> {roomType}</p>
              <p><strong>Bed Type:</strong> {bedType}</p>
            </div>
            <div className="mb-4">
              <h3 className="font-bold">Pay Method:</h3>
              <p>{selectedCard.charAt(0).toUpperCase() + selectedCard.slice(1)}</p>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            {/* Final Confirmation or Payment */}
            <h2 className="text-xl mb-4">Thank you for booking with us!</h2>
            <h2>We look forward to welcoming you and hope you have a wonderful stay. <br></br>If you have any questions or need to make changes to your booking, please feel free to contact us at tabbooking@com</h2>
 
            <h1 className="text-2xl font-bold">Have a great day!</h1>
            <img
              src="https://www.wordstream.com/wp-content/uploads/2022/07/thank-you-for-your-purchase-message-1.png"
              alt="Thank You"
              className="w-250 h-250"
            />
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          {currentStep > 1 && (
            <button
              onClick={handlePrevious}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded"
            >
              Previous
            </button>
          )}
          {currentStep < steps.length && (
            <button
              onClick={handleNext}
              disabled={!isNextEnabled()}
              className={`px-4 py-2 ${isNextEnabled() ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600 cursor-not-allowed'} rounded`}
            >
              {currentStep === steps.length - 1 ? 'Confirm' : 'Next'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
