import React, { useState } from "react";

const HotelProfileManagement = () => {
  const [hotels, setHotels] = useState([
    {
      id: 1,
      name: "Grand Hotel",
      status: "processing",
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
    },
    {
      id: 2,
      name: "Luxury Inn",
      status: "accepted",
      rooms: [
        {
          roomType: "VIP Room",
          roomName: "Luxury Suite",
          country: "Vietnam",
          amenities: ["Balcony", "Air conditioning", "Free Wi-Fi"],
          roomPrice: "1,000,000 VND",
          roomImages: [
            "https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?w=500&auto=format&fit=crop&q=60",
          ],
        },
        {
          roomType: "Standard Room",
          roomName: "Standard Suite",
          country: "Vietnam",
          amenities: ["Air conditioning", "Free Wi-Fi"],
          roomPrice: "300,000 VND",
          roomImages: [
            "https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?w=500&auto=format&fit=crop&q=60",
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Economy Lodge",
      status: "rejected",
      rooms: [
        {
          roomType: "Budget Room",
          roomName: "Budget Suite",
          country: "Vietnam",
          amenities: ["Air conditioning", "Free Wi-Fi"],
          roomPrice: "200,000 VND",
          roomImages: [
            "https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?w=500&auto=format&fit=crop&q=60",
          ],
        },
        {
          roomType: "Standard Room",
          roomName: "Standard Suite",
          country: "Vietnam",
          amenities: ["Air conditioning", "Free Wi-Fi"],
          roomPrice: "300,000 VND",
          roomImages: [
            "https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?w=500&auto=format&fit=crop&q=60",
          ],
        },
      ],
    },
  ]);

  const [selectedHotel, setSelectedHotel] = useState(null);
  const [filter, setFilter] = useState("all");

  const handleHotelClick = (hotel) => {
    setSelectedHotel(hotel);
  };

  const handleStatusChange = (hotelId, newStatus) => {
    setHotels((prevHotels) =>
      prevHotels.map((hotel) =>
        hotel.id === hotelId ? { ...hotel, status: newStatus } : hotel
      )
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "processing":
        return "text-yellow-500";
      case "rejected":
        return "text-red-500";
      case "accepted":
        return "text-green-500";
      default:
        return "";
    }
  };

  const filteredHotels =
    filter === "all" ? hotels : hotels.filter((hotel) => hotel.status === filter);

  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">Manage Hotel Profiles</h2>

      <div className="mb-6">
        <label htmlFor="status-filter" className="block mb-2 font-semibold">
          Filter by Status
        </label>
        <select
          id="status-filter"
          onChange={(e) => setFilter(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="all">All</option>
          <option value="processing">Processing</option>
          <option value="rejected">Rejected</option>
          <option value="accepted">Accepted</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredHotels.map((hotel) => (
          <div
            key={hotel.id}
            className="p-4 bg-white border rounded shadow cursor-pointer hover:shadow-md"
            onClick={() => handleHotelClick(hotel)}
          >
            <strong className="block text-lg">{hotel.name}</strong>
            <p >Status: <span className={getStatusColor(hotel.status)}>{hotel.status} </span> </p>
            {(hotel.status === "processing" || hotel.status === "rejected") && (
              <div className="flex justify-end space-x-5">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStatusChange(hotel.id, "accepted");
                  }}
                  className="p-2 mt-2 text-white bg-blue-500 rounded"
                >
                  Mark accepted
                </button>
                {hotel.status === "processing" && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleStatusChange(hotel.id, "rejected");
                    }}
                    className="p-2 mt-2 text-white bg-red-500 rounded"
                  >
                    Mark rejected
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedHotel && (
        <div className="p-4 mt-6 bg-gray-100 border rounded">
          <h3 className="text-xl font-semibold">Room in {selectedHotel.name}</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {selectedHotel.rooms.map((room, index) => (
              <div key={index} className="p-4 bg-gray-100 border rounded shadow-sm">
                <div className="flex flex-col">
                  <h4 className="font-semibold">Room type</h4>
                  <p>{room.roomType}</p>
                </div>
                <div className="flex flex-col">
                  <h4 className="font-semibold">Room name</h4>
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
                  <h4 className="font-semibold">Room images</h4>
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
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelProfileManagement;