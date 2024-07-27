import React, { useState } from "react";

const RoomList = () => {
  const [hotels] = useState([
    {
      id: 1,
      name: "Grand Hotel",
      rooms: [
        {
          name: "Room 101",
          roomType: "Deluxe",
          status: "Occupied",
          tenant: "John Doe",
          checkInDate: "2024-07-01",
          checkOutDate: "2024-07-10",
        },
        {
          name: "Room 102",
          roomType: "Standard",
          status: "Available",
        },
        // Add more rooms
      ],
    },
    {
      id: 2,
      name: "Luxury Inn",
      rooms: [
        {
          name: "Premier Room Twin",
          roomType: "VIP",
          status: "Occupied",
          tenant: "Jane Smith",
          checkInDate: "2024-07-05",
          checkOutDate: "2024-07-15",
        },
        {
          name: "Room 202",
          roomType: "Standard",
          status: "Available",
        },
        // Add more rooms
      ],
    },
  ]);

  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedRoomType, setSelectedRoomType] = useState("");

  const handleHotelChange = (e) => {
    const hotelId = parseInt(e.target.value, 10);
    setSelectedHotel(hotels.find((hotel) => hotel.id === hotelId));
    setSelectedRoom(null); // Reset selected room when changing hotel
    setSelectedRoomType(""); // Reset room type filter when changing hotel
  };

  const handleRoomTypeChange = (e) => {
    setSelectedRoomType(e.target.value);
  };

  const handleRoomClick = (room) => {
    if (room.status === "Occupied") {
      setSelectedRoom(room);
    }
  };

  const filteredRooms = selectedHotel
    ? selectedHotel.rooms.filter(
        (room) => !selectedRoomType || room.roomType === selectedRoomType
      )
    : [];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 font-semibold">Room List</h2>

      <div className="mb-6">
        <label htmlFor="hotel-select" className="block mb-2 font-semibold">
          Select Hotel
        </label>
        <select
          id="hotel-select"
          onChange={handleHotelChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select a hotel</option>
          {hotels.map((hotel) => (
            <option key={hotel.id} value={hotel.id}>
              {hotel.name}
            </option>
          ))}
        </select>
      </div>

      {selectedHotel && (
        <>
          <div className="mb-6">
            <label
              htmlFor="room-type-select"
              className="block mb-2 font-semibold"
            >
              Filter by Room Type
            </label>
            <select
              id="room-type-select"
              value={selectedRoomType}
              onChange={handleRoomTypeChange}
              className="w-full p-2 border rounded"
            >
              <option value="">All Room Types</option>
              {[
                ...new Set(selectedHotel.rooms.map((room) => room.roomType)),
              ].map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {filteredRooms.map((room, index) => (
              <div
                key={index}
                onClick={() => handleRoomClick(room)}
                className={`p-4 border rounded cursor-pointer ${
                  room.status === "Occupied" ? "bg-red-100" : "bg-green-100"
                }`}
              >
                <strong className="block text-lg">{room.name}</strong>
                <p>Status: {room.status}</p>
                <p>Type: {room.roomType}</p>
                {room.status === "Occupied" && (
                  <p className="mt-2 text-gray-700">Tenant: {room.tenant}</p>
                )}
              </div>
            ))}
          </div>

          {selectedRoom && (
            <div className="p-4 mt-6 bg-gray-100 border rounded">
              <h3 className="text-xl font-semibold">Room Details</h3>
              <p>
                <strong>Room:</strong> {selectedRoom.name}
              </p>
              <p>
                <strong>Status:</strong> {selectedRoom.status}
              </p>
              <p>
                <strong>Type:</strong> {selectedRoom.roomType}
              </p>
              <p>
                <strong>Tenant:</strong> {selectedRoom.tenant}
              </p>
              {selectedRoom.checkInDate && selectedRoom.checkOutDate && (
                <>
                  <p>
                    <strong>Check-In Date:</strong>{" "}
                    {new Date(selectedRoom.checkInDate).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>Check-Out Date:</strong>{" "}
                    {new Date(selectedRoom.checkOutDate).toLocaleDateString()}
                  </p>
                </>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default RoomList;
