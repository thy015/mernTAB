import React, { useState, useEffect } from "react";
import ProfileDetail from "./ProfileDetail";
import axios from "axios";

const Dashboard = ({ ownerID }) => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [hotelListState, setHotelListState] = useState([]);

  // Format creation date
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    const getHotelList = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_BASEURL}/hotellist/${ownerID}`
        );
        setHotelListState(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    if (ownerID) {
      getHotelList();
    }
  }, [ownerID]);

  const handleBackToList = () => {
    setSelectedProfile(null);
  };

  if (selectedProfile) {
    return (
      <ProfileDetail profile={selectedProfile} onBack={handleBackToList} />
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-2xl font-semibold">Quản lý hồ sơ</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {hotelListState.map((profile) => (
          <div
            key={profile._id}
            onClick={() => setSelectedProfile(profile)}
            className="block p-4 no-underline bg-gray-100 rounded-lg shadow-sm cursor-pointer hover:bg-gray-200"
          >
            <div className="mb-4">
              <img
                src={profile.coverImage}
                alt="Cover"
                className="object-cover w-full h-64 rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <div className="text-xl font-bold">{profile.hotelName}</div>
              <p className="text-gray-600">
                 Ngày giờ tạo: {/*{formatDate(profile.creationDate)} */}
              </p>
              <p className="text-gray-600">Số phòng: {profile.numberOfRooms}</p>
              <p
                className={`text-sm font-semibold ${
                  profile.status === "Processing"
                    ? "text-yellow-500"
                    : profile.status === "Completed"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                Trạng thái hồ sơ: "Database chưa có"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
