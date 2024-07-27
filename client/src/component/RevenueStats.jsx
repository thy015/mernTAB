import React, { useState } from "react";

const RevenueStats = () => {
  const [hotels] = useState([
    {
      id: 1,
      name: "Grand Hotel",
      revenue: [
        { month: "January", revenue: "10,000 USD" },
        { month: "February", revenue: "12,000 USD" },
        // Add more months
      ],
      rooms: [
        {
          name: "Room 101",
          revenue: [
            { month: "January", revenue: "2,000 USD" },
            { month: "February", revenue: "2,500 USD" },
            // Add more months
          ],
        },
        {
          name: "Room 102",
          revenue: [
            { month: "January", revenue: "1,500 USD" },
            { month: "February", revenue: "1,800 USD" },
            // Add more months
          ],
        },
        // Add more rooms
      ],
    },
    {
      id: 2,
      name: "Luxury Inn",
      revenue: [
        { month: "January", revenue: "8,000 USD" },
        { month: "February", revenue: "9,500 USD" },
        // Add more months
      ],
      rooms: [
        {
          name: "Premier Room Twin",
          revenue: [
            { month: "January", revenue: "3,000 USD" },
            { month: "February", revenue: "3,200 USD" },
            // Add more months
          ],
        },
        {
          name: "Room 202",
          revenue: [
            { month: "January", revenue: "2,000 USD" },
            { month: "February", revenue: "2,500 USD" },
            // Add more months
          ],
        },
        // Add more rooms
      ],
    },
  ]);

  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleHotelChange = (e) => {
    const hotelId = parseInt(e.target.value, 10);
    setSelectedHotel(hotels.find((hotel) => hotel.id === hotelId));
    setSelectedRoom(null); // Reset selected room when changing hotel
  };

  const handleRoomChange = (e) => {
    const roomName = e.target.value;
    setSelectedRoom(selectedHotel.rooms.find((room) => room.name === roomName));
  };

  const displayRevenueData = (data) => {
    return (
      <ul>
        {data.map((data, index) => (
          <li key={index} className="mb-2">
            <strong>{data.month}:</strong> {data.revenue}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-2xl font-semibold">Revenue Statistics</h2>

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
            <label htmlFor="room-select" className="block mb-2 font-semibold">
              Select Room (Optional)
            </label>
            <select
              id="room-select"
              onChange={handleRoomChange}
              className="w-full p-2 border rounded"
            >
              <option value="">All Rooms</option>
              {selectedHotel.rooms.map((room, index) => (
                <option key={index} value={room.name}>
                  {room.name}
                </option>
              ))}
            </select>
          </div>

          {selectedRoom
            ? displayRevenueData(selectedRoom.revenue)
            : displayRevenueData(selectedHotel.revenue)}
        </>
      )}
    </div>
  );
};

export default RevenueStats;
