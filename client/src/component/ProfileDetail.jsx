import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Sample data for demonstration purposes
const initialProfileData = {
  hotelName: "Grand Hotel",
  rooms: [
    {
      roomType: "Premier Room Twin",
      roomName: "Grand Suite",
      country: "Vietnam",
      amenities: ["Balcony", "Air conditioning", "Free Wi-Fi"],
      roomPrice: "450,000 VND",
      roomImages: [
        "https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?w=500&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?w=500&auto=format&fit=crop&q=60",
      ],
    },
    {
      roomType: "Deluxe Room",
      roomName: "Ocean View Suite",
      country: "Vietnam",
      amenities: ["Sea view", "Air conditioning", "Free Wi-Fi", "Mini bar"],
      roomPrice: "550,000 VND",
      roomImages: [
        "https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?w=500&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?w=500&auto=format&fit=crop&q=60",
      ],
    },
  ],
  allAmenities: [
    "Balcony",
    "Air conditioning",
    "Free Wi-Fi",
    "Sea view",
    "Mini bar",
    "Breakfast",
    "Gym",
    "Pool",
  ], // Add more amenities if needed
};

const ProfileDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [hotel, setHotel] = useState(initialProfileData);
  const [newRoom, setNewRoom] = useState({
    roomType: "",
    roomName: "",
    country: "",
    amenities: [],
    roomPrice: "",
    roomImages: [],
  });
  const [newAmenity, setNewAmenity] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formErrors, setFormErrors] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [roomToDelete, setRoomToDelete] = useState(null);

  const handleDeleteRoom = (index) => {
    setRoomToDelete(index);
    setShowModal(true);
  };

  const confirmDeleteRoom = () => {
    if (roomToDelete !== null) {
      setHotel((prevHotel) => {
        const updatedRooms = prevHotel.rooms.filter(
          (_, i) => i !== roomToDelete
        );
        if (updatedRooms.length === 0) {
          navigate("/"); // Replace with actual hotel deletion logic
          return { ...prevHotel, rooms: updatedRooms };
        }
        return { ...prevHotel, rooms: updatedRooms };
      });
      setRoomToDelete(null);
    }
    setShowModal(false);
  };

  const cancelDeleteRoom = () => {
    setRoomToDelete(null);
    setShowModal(false);
  };

  const handleAddRoom = () => {
    // Validate the form data
    const errors = [];
    if (
      !newRoom.roomType ||
      !newRoom.roomName ||
      !newRoom.country ||
      !newRoom.roomPrice
    ) {
      errors.push("All fields must be filled.");
    }
    if (newRoom.roomImages.length < 3 || newRoom.roomImages.length > 5) {
      errors.push("Number of images must be between 3 and 5.");
    }
    if (errors.length > 0) {
      setFormErrors(errors);
      return;
    }
    // Add the new room
    setHotel((prevHotel) => ({
      ...prevHotel,
      rooms: [...prevHotel.rooms, newRoom],
    }));
    setNewRoom({
      roomType: "",
      roomName: "",
      country: "",
      amenities: [],
      roomPrice: "",
      roomImages: [],
    });
    setSelectedImages([]);
    setShowForm(false);
    setFormErrors([]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRoom((prevRoom) => ({
      ...prevRoom,
      [name]: value,
    }));
  };

  const handleAmenityChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setNewRoom((prevRoom) => ({
        ...prevRoom,
        amenities: [...prevRoom.amenities, value],
      }));
    } else {
      setNewRoom((prevRoom) => ({
        ...prevRoom,
        amenities: prevRoom.amenities.filter((amenity) => amenity !== value),
      }));
    }
  };

  const handleAddAmenity = () => {
    if (newAmenity && !hotel.allAmenities.includes(newAmenity)) {
      setHotel((prevHotel) => ({
        ...prevHotel,
        allAmenities: [...prevHotel.allAmenities, newAmenity],
      }));
      setNewAmenity("");
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setSelectedImages(imageUrls);
    setNewRoom((prevRoom) => ({
      ...prevRoom,
      roomImages: imageUrls,
    }));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-2xl font-semibold">Thông tin khách sạn</h2>
      <h3 className="mb-4 text-xl font-semibold">{hotel.hotelName}</h3>

      <button
        onClick={() => setShowForm(!showForm)}
        className={`px-4 py-2 mb-4 text-white rounded ${
          showForm ? "bg-red-500" : "bg-green-500"
        }`}
      >
        {showForm ? "Cancel" : "Add new room"}
      </button>

      {showForm && (
        <div className="mb-6">
          <h2 className="mb-4 text-xl font-semibold">Add new room</h2>
          {formErrors.length > 0 && (
            <div className="mb-4 text-red-500">
              {formErrors.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </div>
          )}
          <div className="space-y-4">
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Room Type</label>
              <select
                name="roomType"
                value={newRoom.roomType}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              >
                <option value="">Select a room type</option>
                <option value="Single">Single Room</option>
                <option value="Double">Double Room</option>
                <option value="Deluxe">Deluxe Room</option>
                <option value="Superior">Superior Room</option>
              </select>
            </div>
            <input
              type="text"
              name="roomName"
              value={newRoom.roomName}
              onChange={handleInputChange}
              placeholder="Room Name"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="country"
              value={newRoom.country}
              onChange={handleInputChange}
              placeholder="Country"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="number"
              name="roomPrice"
              value={newRoom.roomPrice}
              onChange={handleInputChange}
              placeholder="Room Price"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <div>
              <h4 className="font-semibold">Amenities</h4>
              <div className="flex flex-wrap gap-2">
                {hotel.allAmenities.map((amenity, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      value={amenity}
                      checked={newRoom.amenities.includes(amenity)}
                      onChange={handleAmenityChange}
                      className="mr-2"
                    />
                    {amenity}
                  </label>
                ))}
              </div>
              <input
                type="text"
                value={newAmenity}
                onChange={(e) => setNewAmenity(e.target.value)}
                placeholder="Add New Amenity"
                className="w-full p-2 mt-2 border border-gray-300 rounded"
              />
              <button
                onClick={handleAddAmenity}
                className="px-4 py-2 mt-2 text-white bg-blue-500 rounded"
              >
                Add Amenity
              </button>
            </div>
            <div>
              <h4 className="font-semibold">Room Images</h4>
              <input
                type="file"
                multiple
                onChange={handleImageChange}
                className="w-full mb-2"
              />
              <div className="flex flex-wrap gap-2">
                {newRoom.roomImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Selected Image ${index + 1}`}
                    className="object-cover w-32 h-32 rounded-lg"
                  />
                ))}
              </div>
            </div>
            <button
              onClick={handleAddRoom}
              className="px-4 py-2 text-white bg-green-500 rounded"
            >
              Add Room
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4">
        {hotel.rooms.map((room, index) => (
          <div
            key={index}
            className="grid grid-cols-6 gap-4 p-4 bg-gray-100 rounded-lg shadow-sm"
          >
            <div className="flex flex-col">
              <h4 className="font-semibold">Room Type</h4>
              <p>{room.roomType}</p>
            </div>
            <div className="flex flex-col">
              <h4 className="font-semibold">Room Name</h4>
              <p>{room.roomName}</p>
            </div>
            <div className="flex flex-col">
              <h4 className="font-semibold">Country</h4>
              <p>{room.country}</p>
            </div>
            <div className="flex flex-col">
              <h4 className="font-semibold">Price</h4>
              <p>{room.roomPrice}</p>
            </div>
            <div className="flex flex-col">
              <h4 className="font-semibold">Amenities</h4>
              <ul className="ml-6 list-disc">
                {room.amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
            </div>
            <div className="col-span-6">
              <h4 className="font-semibold">Room Images</h4>
              <div className="flex flex-wrap gap-2">
                {room.roomImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Room Image ${index + 1}`}
                    className="object-cover w-32 h-32 rounded-lg"
                  />
                ))}
              </div>
            </div>
            <button
              onClick={() => handleDeleteRoom(index)}
              className="col-span-6 px-4 py-2 mt-4 ml-auto text-white bg-red-500 rounded"
            >
              Delete Room
            </button>
          </div>
        ))}
      </div>

      {hotel.rooms.length === 0 && (
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 mt-4 text-white bg-red-500 rounded"
        >
          Delete Hotel
        </button>
      )}

      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 mt-4 text-white bg-blue-500 rounded"
      >
        Back
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Are you sure?</h3>
            <p className="mt-2">Do you really want to delete this room?</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={cancelDeleteRoom}
                className="px-4 py-2 mr-2 text-white bg-gray-500 rounded"
              >
                Cancel
              </button>
              <button
                onClick={confirmDeleteRoom}
                className="px-4 py-2 text-white bg-red-500 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDetail;
