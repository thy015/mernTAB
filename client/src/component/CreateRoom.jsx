import React, { useEffect, useState } from "react";
import axios from "axios";

const CreateRoom = () => {
  const [formData, setFormData] = useState({});
  const [rooms, setRooms] = useState(formData.rooms || []);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const ownerID = localStorage.getItem("ownerID");
  const token = localStorage.getItem("authToken");

  const handleGeneralChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRoomChange = (index, e) => {
    const { name, value, files } = e.target;
    const newRooms = [...rooms];

    if (files) {
      const fileArray = Array.from(files);

      if (fileArray.length < 3) {
        alert("Bạn cần chọn ít nhất 3 ảnh.");
        e.target.value = null;
        return;
      }
      if (fileArray.length > 5) {
        alert("Bạn chỉ được chọn tối đa 5 ảnh.");
        e.target.value = null;
        return;
      }

      newRooms[index] = {
        ...newRooms[index],
        [name]: fileArray,
      };
    } else {
      newRooms[index] = {
        ...newRooms[index],
        [name]: value,
      };
    }

    setRooms(newRooms);
    setFormData((prevData) => ({
      ...prevData,
      rooms: newRooms,
    }));
  };

  const handleAmenitiesChange = (index, e) => {
    const { checked, value } = e.target;
    const newRooms = [...rooms];
    if (checked) {
      newRooms[index].amenities = [...newRooms[index].amenities, value];
    } else {
      newRooms[index].amenities = newRooms[index].amenities.filter(
        (amenity) => amenity !== value
      );
    }
    setRooms(newRooms);
    setFormData((prevData) => ({
      ...prevData,
      rooms: newRooms,
    }));
  };

  const addRoom = () => {
    setRooms((prevRooms) => [
      ...prevRooms,
      {
        roomType: "",
        roomName: "",
        amenities: [],
        roomPrice: "",
        roomImages: [],
      },
    ]);
  };

  const removeRoom = (index) => {
    const newRooms = rooms.filter((_, i) => i !== index);
    setRooms(newRooms);
    setFormData((prevData) => ({
      ...prevData,
      rooms: newRooms,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.hotelName) newErrors.hotelName = "Tên nơi cho thuê là bắt buộc";
    if (!formData.hotelPhone) newErrors.hotelPhone = "Số điện thoại là bắt buộc";
    if (!formData.area) newErrors.area = "Quy mô chỗ nghỉ là bắt buộc";
    if (!formData.hotelAddress) newErrors.hotelAddress = "Địa chỉ khách sạn là bắt buộc";
    if (!formData.country) newErrors.country = "Quốc gia cư trú là bắt buộc";

    rooms.forEach((room, index) => {
      if (!room.roomType) newErrors[`roomType_${index}`] = "Loại phòng là bắt buộc";
      if (!room.roomName) newErrors[`roomName_${index}`] = "Tên phòng là bắt buộc";
      if (!room.roomPrice) newErrors[`roomPrice_${index}`] = "Giá phòng là bắt buộc";
      if (room.roomImages.length === 0) newErrors[`roomImages_${index}`] = "Hình ảnh là bắt buộc";
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        setErrors({});
        setSuccessMessage("");

        // Upload images to Cloudinary
        const roomsWithUploadedImages = await Promise.all(
          rooms.map(async (room) => {
            const uploadedImages = await Promise.all(
              room.roomImages.map((file) => uploadFile(file))
            );
            return { ...room, roomImages: uploadedImages };
          })
        );

        const formDataWithOwner = {
          ...formData,
          ownerID,
          rooms: roomsWithUploadedImages,
        };
        console.log(formDataWithOwner)
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_BASEURL}/hotelList/create`,
          formDataWithOwner,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.status === "OK") {
          setSuccessMessage("Tạo khách sạn thành công!");
          setFormData({});
          setRooms([]);
        } else {
          setErrors({ apiError: "Có lỗi xảy ra khi tạo khách sạn. Vui lòng thử lại." });
        }
      } catch (error) {
        setErrors({ apiError: "Có lỗi xảy ra khi tạo khách sạn. Vui lòng thử lại." });
      }
    }
  };

  return (
    <div className="mx-auto bg-white p-4 shadow-md rounded-lg">
      <h1 className="text-center text-blue-500">Thông tin chỗ nghỉ</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Tên khách sạn:</label>
          <input
            type="text"
            name="hotelName"
            value={formData.hotelName || ""}
            onChange={handleGeneralChange}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.hotelName && <p className="text-red-500">{errors.hotelName}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Số điện thoại khách sạn:</label>
          <input
            type="tel"
            name="hotelPhone"
            value={formData.hotelPhone || ""}
            onChange={handleGeneralChange}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.hotelPhone && <p className="text-red-500">{errors.hotelPhone}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Quốc gia cư trú:</label>
          <input
            type="text"
            name="country"
            value={formData.country || ""}
            onChange={handleGeneralChange}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.country && <p className="text-red-500">{errors.country}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Loại hình chỗ nghỉ:</label>
          <select
            name="accommodationType"
            value={formData.accommodationType || ""}
            onChange={handleGeneralChange}
            className="w-full px-4 py-2 border rounded"
          >
            <option value="Căn hộ">Căn hộ</option>
            <option value="Biệt thự">Biệt thự</option>
            <option value="Toàn bộ nhà riêng">Toàn bộ nhà riêng</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Quy mô chỗ nghỉ (m²):</label>
          <input
            type="number"
            name="area"
            value={formData.area || ""}
            onChange={handleGeneralChange}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.area && <p className="text-red-500">{errors.area}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Địa chỉ khách sạn:</label>
          <input
            type="text"
            name="hotelAddress"
            value={formData.hotelAddress || ""}
            onChange={handleGeneralChange}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.hotelAddress && <p className="text-red-500">{errors.hotelAddress}</p>}
        </div>
        <h2 className="text-center text-blue-500">Thông tin các loại phòng</h2>
        {rooms.map((room, index) => (
          <div key={index} className="mb-6 border p-4 rounded">
            <div className="mb-4">
              <label className="block text-gray-700">Loại phòng:</label>
              <select
                name="roomType"
                value={room.roomType || ""}
                onChange={(e) => handleRoomChange(index, e)}
                className="w-full px-4 py-2 border rounded"
              >
                <option value="">Chọn loại phòng</option>
                <option value="Phòng đơn">Phòng đơn</option>
                <option value="Phòng đôi">Phòng đôi</option>
                <option value="Phòng gia đình">Phòng gia đình</option>
              </select>
              {errors[`roomType_${index}`] && <p className="text-red-500">{errors[`roomType_${index}`]}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Tên phòng:</label>
              <input
                type="text"
                name="roomName"
                value={room.roomName || ""}
                onChange={(e) => handleRoomChange(index, e)}
                className="w-full px-4 py-2 border rounded"
              />
              {errors[`roomName_${index}`] && <p className="text-red-500">{errors[`roomName_${index}`]}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Giá phòng:</label>
              <input
                type="number"
                name="roomPrice"
                value={room.roomPrice || ""}
                onChange={(e) => handleRoomChange(index, e)}
                className="w-full px-4 py-2 border rounded"
              />
              {errors[`roomPrice_${index}`] && <p className="text-red-500">{errors[`roomPrice_${index}`]}</p>}
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
                      checked={room.amenities.includes(amenity)}
                      onChange={(e) => handleAmenitiesChange(index, e)}
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
                onChange={(e) => handleRoomChange(index, e)}
                className="w-full px-4 py-2 border rounded"
              />
              {errors[`roomImages_${index}`] && <p className="text-red-500">{errors[`roomImages_${index}`]}</p>}
            </div>
            <button
              type="button"
              onClick={() => removeRoom(index)}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              Xóa phòng
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addRoom}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Thêm phòng
        </button>
        {errors.apiError && <p className="text-red-500">{errors.apiError}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
          Tạo khách sạn
        </button>
      </form>
    </div>
  );
};

export default CreateRoom;
