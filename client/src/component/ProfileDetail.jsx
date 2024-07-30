import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfileDetail = ({ hotelID, onBack }) => {
  const [hotel, setHotel] = useState(null);
  const [newRoom, setNewRoom] = useState({
    roomType: "",
    roomName: "",
    amenities: [],
    roomPrice: "",
    roomImages: [],
  });
  const [newAmenity, setNewAmenity] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchRooms = async (hotelID) => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_BASEURL}/rooms`, {
          params: {
            hotelID,
          },
        });
        return response.data;
      } catch (error) {
        console.error(error);
      }
    };
    

    fetchRooms();
  }, [hotelID, token]);

  if (!hotel) {
    return <p>Đang tải dữ liệu khách sạn...</p>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRoom((prevRoom) => ({
      ...prevRoom,
      [name]: value,
    }));
  };

  const handleAmenityChange = (e) => {
    const { value, checked } = e.target;
    setNewRoom((prevRoom) => {
      const updatedAmenities = checked
        ? [...prevRoom.amenities, value]
        : prevRoom.amenities.filter((amenity) => amenity !== value);
      return {
        ...prevRoom,
        amenities: updatedAmenities,
      };
    });
  };

  const handleAddAmenity = () => {
    setNewRoom((prevRoom) => ({
      ...prevRoom,
      amenities: [...prevRoom.amenities, newAmenity],
    }));
    setNewAmenity("");
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length < 3) {
      alert("Bạn cần chọn ít nhất 3 ảnh.");
      e.target.value = null;
      return;
    }
    if (files.length > 5) {
      alert("Bạn chỉ được chọn tối đa 5 ảnh.");
      e.target.value = null;
      return;
    }
    const fileArray = files.map((file) => URL.createObjectURL(file));
    setNewRoom((prevRoom) => ({
      ...prevRoom,
      roomImages: fileArray,
    }));
  };

  const uploadFile = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", 'images_preset');

    try {
      const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
      const resourceType = 'image';
      const api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      return secure_url;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const handleAddRoom = async () => {
    try {
      const uploadedImages = await Promise.all(
        newRoom.roomImages.map((file) => uploadFile(file))
      );

      const roomData = {
        ...newRoom,
        roomImages: uploadedImages,
      };

      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_BASEURL}/hotelList/createRoom`,
        hotelID,
        roomData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.status === "OK") {
        alert("Thêm phòng thành công!");
        setNewRoom({
          roomType: "",
          roomName: "",
          amenities: [],
          roomPrice: "",
          roomImages: [],
        });
      } else {
        alert("Có lỗi xảy ra khi thêm phòng. Vui lòng thử lại.");
      }
    } catch (error) {
      alert("Có lỗi xảy ra khi thêm phòng. Vui lòng thử lại.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-center text-blue-500">Chi tiết khách sạn</h1>
      <div className="mb-4">
        <label className="block text-gray-700">Tên khách sạn:</label>
        <p className="px-4 py-2 border rounded">{hotel.name}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Số điện thoại khách sạn:</label>
        <p className="px-4 py-2 border rounded">{hotel.phone}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Quốc gia cư trú:</label>
        <p className="px-4 py-2 border rounded">{hotel.country}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Địa chỉ khách sạn:</label>
        <p className="px-4 py-2 border rounded">{hotel.address}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Quy mô chỗ nghỉ (m²):</label>
        <p className="px-4 py-2 border rounded">{hotel.area}</p>
      </div>

      <h2 className="text-center text-blue-500">Thêm loại phòng mới</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Loại phòng:</label>
        <select
          name="roomType"
          value={newRoom.roomType}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded"
        >
          <option value="">Chọn loại phòng</option>
          <option value="Phòng đơn">Phòng đơn</option>
          <option value="Phòng đôi">Phòng đôi</option>
          <option value="Phòng gia đình">Phòng gia đình</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Tên phòng:</label>
        <input
          type="text"
          name="roomName"
          value={newRoom.roomName}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Giá phòng:</label>
        <input
          type="number"
          name="roomPrice"
          value={newRoom.roomPrice}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Tiện nghi:</label>
        <div className="grid grid-cols-3 gap-2">
          {["Wifi", "Điều hòa", "TV", "Tủ lạnh", "Máy sấy tóc", "Ban công"].map((amenity) => (
            <label key={amenity} className="flex items-center">
              <input
                type="checkbox"
                name="amenities"
                value={amenity}
                checked={newRoom.amenities.includes(amenity)}
                onChange={handleAmenityChange}
                className="mr-2"
              />
              {amenity}
            </label>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Hình ảnh:</label>
        <input
          type="file"
          name="roomImages"
          multiple
          onChange={handleImageChange}
          className="w-full px-4 py-2 border rounded"
        />
      </div>
      <button
        type="button"
        onClick={handleAddRoom}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Thêm phòng
      </button>
      <button
        type="button"
        onClick={onBack}
        className="px-4 py-2 bg-gray-500 text-white rounded ml-4"
      >
        Quay lại
      </button>
    </div>
  );
};

export default ProfileDetail;
