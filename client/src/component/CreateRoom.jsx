import React, { useState } from "react";

const CreateRoom = ({ formData = {}, setFormData }) => {
  const [rooms, setRooms] = useState(formData.rooms || []);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

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
    if (!formData.hotelName)
      newErrors.hotelName = "Tên nơi cho thuê là bắt buộc";
    if (!formData.hotelPhone)
      newErrors.hotelPhone = "Số điện thoại là bắt buộc";
    if (!formData.area) newErrors.area = "Quy mô chỗ nghỉ là bắt buộc";
    if (!formData.hotelAddress)
      newErrors.hotelAddress = "Địa chỉ khách sạn là bắt buộc";
    if (!formData.country) newErrors.country = "Quốc gia cư trú là bắt buộc";

    // Validate rooms
    rooms.forEach((room, index) => {
      if (!room.roomType)
        newErrors[`roomType_${index}`] = "Loại phòng là bắt buộc";
      if (!room.roomName)
        newErrors[`roomName_${index}`] = "Tên phòng là bắt buộc";
      if (!room.roomPrice)
        newErrors[`roomPrice_${index}`] = "Giá phòng là bắt buộc";
      if (room.roomImages.length === 0)
        newErrors[`roomImages_${index}`] = "Hình ảnh là bắt buộc";
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMessage("Tạo thành công!");
      // Reset form if needed
      setFormData({});
      setRooms([]);
    }
  };

  return (
    <div className="mx-auto bg-white p-4 shadow-md rounded-lg">
      <h1 className="text-center text-blue-500">Accommodation Information</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Nhập tên khách sạn:</label>
          <input
            type="text"
            name="hotelName"
            value={formData.hotelName || ""}
            onChange={handleGeneralChange}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.hotelName && (
            <p className="text-red-500">{errors.hotelName}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Nhập SDT khách sạn:</label>
          <input
            type="tel"
            id="phone"
            name="hotelPhone"
            value={formData.hotelPhone || ""}
            onChange={handleGeneralChange}
            className="w-full px-4 py-2 border rounded"
            placeholder="0939012345"
            required
          />
          {errors.hotelPhone && (
            <p className="text-red-500">{errors.hotelPhone}</p>
          )}
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
          <label className="block text-gray-700">Quy mô chỗ nghỉ (m2):</label>
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
          <label className="block text-gray-700">Nhập địa chỉ khách sạn:</label>
          <input
            type="text"
            name="hotelAddress"
            value={formData.hotelAddress || ""}
            onChange={handleGeneralChange}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.hotelAddress && (
            <p className="text-red-500">{errors.hotelAddress}</p>
          )}
        </div>

        {rooms.map((room, index) => (
          <div key={index} className="mb-4">
            <h3 className="mb-2 text-lg font-semibold">Phòng {index + 1}</h3>
            <div className="mb-2">
              <label className="block text-gray-700">Loại phòng:</label>
              <select
                name="roomType"
                value={room.roomType || ""}
                onChange={(e) => handleRoomChange(index, e)}
                className="w-full px-4 py-2 border rounded"
              >
                <option value="">Select a room type</option>
                <option value="Single">Single Room</option>
                <option value="Double">Double Room</option>
                <option value="Deluxe">Deluxe Room</option>
                <option value="Superior">Superior Room</option>
              </select>
              {errors[`roomType_${index}`] && (
                <p className="text-red-500">{errors[`roomType_${index}`]}</p>
              )}
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Tên phòng:</label>
              <input
                type="text"
                name="roomName"
                value={room.roomName || ""}
                onChange={(e) => handleRoomChange(index, e)}
                className="w-full px-4 py-2 border rounded"
              />
              {errors[`roomName_${index}`] && (
                <p className="text-red-500">{errors[`roomName_${index}`]}</p>
              )}
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Tiện nghi:</label>
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value="Wi-Fi miễn phí"
                    checked={room.amenities.includes("Wi-Fi miễn phí")}
                    onChange={(e) => handleAmenitiesChange(index, e)}
                    className="form-checkbox"
                  />
                  <span className="ml-2">Wi-Fi miễn phí</span>
                </label>
                <label className="inline-flex items-center ml-4">
                  <input
                    type="checkbox"
                    value="Điều hòa nhiệt độ"
                    checked={room.amenities.includes("Điều hòa nhiệt độ")}
                    onChange={(e) => handleAmenitiesChange(index, e)}
                    className="form-checkbox"
                  />
                  <span className="ml-2">Điều hòa nhiệt độ</span>
                </label>
                <label className="inline-flex items-center ml-4">
                  <input
                    type="checkbox"
                    value="Bữa sáng miễn phí"
                    checked={room.amenities.includes("Bữa sáng miễn phí")}
                    onChange={(e) => handleAmenitiesChange(index, e)}
                    className="form-checkbox"
                  />
                  <span className="ml-2">Bữa sáng miễn phí</span>
                </label>
              </div>
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Giá phòng:</label>
              <input
                type="text"
                name="roomPrice"
                value={room.roomPrice || ""}
                onChange={(e) => handleRoomChange(index, e)}
                className="w-full px-4 py-2 border rounded"
              />
              {errors[`roomPrice_${index}`] && (
                <p className="text-red-500">{errors[`roomPrice_${index}`]}</p>
              )}
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Hình ảnh:</label>
              <input
                type="file"
                name="roomImages"
                multiple
                accept="image/*"
                onChange={(e) => handleRoomChange(index, e)}
                className="w-full"
              />
              {errors[`roomImages_${index}`] && (
                <p className="text-red-500">{errors[`roomImages_${index}`]}</p>
              )}
            </div>

            <button
              type="button"
              onClick={() => removeRoom(index)}
              className="px-2 py-2 mt-4 ml-auto text-white bg-red-500 rounded"
            >
              Delete Room
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addRoom}
          className="px-4 py-2 my-4 text-white bg-green-500 rounded"
        >
          Add Room
        </button>

        <div className="flex justify-between">
          <button
            type="submit"
            className="px-4 py-2 ml-auto text-white bg-blue-500 rounded"
          >
            Send
          </button>
        </div>
      </form>
      {successMessage && (
        <div className="mt-4 text-center text-green-500">{successMessage}</div>
      )}
    </div>
  );
};

export default CreateRoom;
