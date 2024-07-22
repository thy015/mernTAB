import React, { useState } from "react";

const Step3 = ({ onPrevious, onSubmit, formData }) => {
  const [rooms, setRooms] = useState(formData.rooms || []);
  const [errors, setErrors] = useState({}); 
  const [errors, setErrors] = useState({});

  // const handleGeneralChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ [name]: value });
  // };

  // const handleRoomChange = (index, e) => {
  //   const { name, value, files } = e.target;
  //   const newRooms = [...rooms];

  //   if (files) {
  //     const fileArray = Array.from(files);

  //     if (fileArray.length < 3) {
  //       alert("Bạn cần chọn ít nhất 3 ảnh.");
  //       e.target.value = null;
  //       return;
  //     }
  //     if (fileArray.length > 5) {
  //       alert("Bạn chỉ được chọn tối đa 5 ảnh.");
  //       e.target.value = null; 
  //       return;
  //     }

  //     newRooms[index] = {
  //       ...newRooms[index],
  //       [name]: fileArray,
  //     };
  //   } else {
  //     newRooms[index] = {
  //       ...newRooms[index],
  //       [name]: value,
  //     };
  //   }

  //   setRooms(newRooms);
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     rooms: newRooms,
  //   }));
  // };

  // const handleAmenitiesChange = (index, e) => {
  //   const { checked, value } = e.target;
  //   const newRooms = [...rooms];
  //   if (checked) {
  //     newRooms[index].amenities = [...newRooms[index].amenities, value];
  //   } else {
  //     newRooms[index].amenities = newRooms[index].amenities.filter(
  //       (amenity) => amenity !== value
  //     );
  //   }
  //   setRooms(newRooms);
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     rooms: newRooms,
  //   }));
  // };

  // const addRoom = () => {
  //   setRooms((prevRooms) => [
  //     ...prevRooms,
  //     {
  //       roomType: "",
  //       roomName: "",
  //       country: "",
  //       amenities: [],
  //       roomPrice: "",
  //       hotelImages: [],
  //     },
  //   ]);
  // };

  // const removeRoom = (index) => {
  //   const newRooms = rooms.filter((_, i) => i !== index);
  //   setRooms(newRooms);
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     rooms: newRooms,
  //   }));
  // };
  // const validateForm = () => {
  //   const newErrors = {};
  //   if (!formData.hotelName) newErrors.hotelName = "Tên khách sạn là bắt buộc";
  //   if (!formData.hotelPhone)
  //     newErrors.hotelPhone = "Số điện thoại là bắt buộc";
  //   if (!formData.area) newErrors.area = "Quy mô chỗ nghỉ là bắt buộc";
  //   if (!formData.capacity) newErrors.capacity = "Sức chứa tối đa là bắt buộc";
  //   if (!formData.numberOfBathrooms)
  //     newErrors.numberOfBathrooms = "Số phòng tắm là bắt buộc";
  //   if (!formData.numberOfBedrooms)
  //     newErrors.numberOfBedrooms = "Số phòng ngủ là bắt buộc";
  //   if (!formData.hotelAddress)
  //     newErrors.hotelAddress = "Địa chỉ khách sạn là bắt buộc";

    
  //   rooms.forEach((room, index) => {
  //     if (!room.roomType)
  //       newErrors[`roomType_${index}`] = "Loại phòng là bắt buộc";
  //     if (!room.roomName)
  //       newErrors[`roomName_${index}`] = "Tên phòng là bắt buộc";
  //     if (!room.country)
  //       newErrors[`country_${index}`] = "Quốc gia cư trú là bắt buộc";
  //     if (!room.roomPrice)
  //       newErrors[`roomPrice_${index}`] = "Giá phòng là bắt buộc";
  //     if (room.hotelImages.length === 0)
  //       newErrors[`hotelImages_${index}`] = "Hình ảnh là bắt buộc";
  //   });

  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     window.location.href = "/success"; 
  //   }
  // };
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      window.location.href = "/success";
    }
  };

  return (
    <div>
      <div>
      <h2 className="text-xl font-bold mb-4">Xác nhận thông tin</h2>
      <div className="mb-4">
        <p>Email: {formData.email}</p>
        <p>Số điện thoại: {formData.phone}</p>
        <p>Họ và tên: {formData.fullName}</p>
        <p>Địa chỉ: {formData.address}</p>
        <p>Ngày sinh: {formData.dob}</p>
        <p>Tên doanh nghiệp: {formData.businessName}</p>
        <p>MST Doanh nghiệp: {formData.taxId}</p>
      </div>
      <div className="flex justify-between">
        <button onClick={onPrevious} className="px-4 py-2 bg-gray-300 rounded">
          Quay lại
        </button>
        <button onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">
          Gửi
        </button>
      </div>
    </div>
        {/*Room details*/}
        {rooms.map((room, index) => (
          <div key={index} className="p-4 mb-8 border rounded">
            <h3 className="mb-4 text-lg font-semibold">
              Thông tin phòng {index + 1}
            </h3>
            <div className="mb-4">
              <label className="block text-gray-700">Chọn loại phòng:</label>
              <input
                type="text"
                name="roomType"
                value={room.roomType}
                onChange={(e) => handleRoomChange(index, e)}
                className="w-full px-4 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Loại hình chỗ nghỉ:</label>
              <select
                name="accommodationType"
                value={formData.accommodationType}
                onChange={handleGeneralChange}
                className="w-full px-4 py-2 border rounded"
              >
                <option value="Đơn">Phòng đơn</option>
                <option value="Đôi">Phòng đôi</option>
                <option value="Deluxe">Deluxe</option>
                <option value="Superior">Superior</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Tên phòng:</label>
              <input
                type="text"
                name="roomName"
                value={room.roomName}
                onChange={(e) => handleRoomChange(index, e)}
                className="w-full px-4 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Quốc gia cư trú:</label>
              <input
                type="text"
                name="country"
                value={room.country}
                onChange={(e) => handleRoomChange(index, e)}
                className="w-full px-4 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Tiện nghi cung cấp:</label>
              {/* Tiện ích */}
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  value="Khăn các loại"
                  checked={room.amenities.includes("Khăn các loại")}
                  onChange={(e) => handleAmenitiesChange(index, e)}
                />
                <span className="ml-2">Khăn các loại</span>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  value="Ban công"
                  checked={room.amenities.includes("Ban công")}
                  onChange={(e) => handleAmenitiesChange(index, e)}
                />
                <span className="ml-2">Ban công</span>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  value="Bãi xe"
                  checked={room.amenities.includes("Bãi xe")}
                  onChange={(e) => handleAmenitiesChange(index, e)}
                />
                <span className="ml-2">Bãi xe</span>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  value="Bếp"
                  checked={room.amenities.includes("Bếp")}
                  onChange={(e) => handleAmenitiesChange(index, e)}
                />
                <span className="ml-2">Bếp</span>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Giá phòng:</label>
              <input
                type="text"
                name="roomPrice"
                value={room.roomPrice}
                onChange={(e) => handleRoomChange(index, e)}
                className="w-full px-4 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Thêm ảnh phòng:</label>
              <input
                type="file"
                name="hotelImages"
                multiple
                onChange={(e) => handleRoomChange(index, e)}
                className="w-full px-4 py-2 border rounded"
              />
            </div>
            <button
              type="button"
              onClick={() => removeRoom(index)}
              className="px-4 py-2 text-white bg-red-500 rounded"
            >
              Xóa phòng
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addRoom}
          className="px-4 py-2 text-white bg-green-500 rounded"
        >
          Thêm phòng
        </button>
        <button onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">
          Gửi
        </button>
      </div>
    </div>
  );
};

export default Step3;
