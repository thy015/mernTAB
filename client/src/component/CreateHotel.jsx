import React, { useState } from "react";
import axios from "axios";

const CreateHotel = () => {
  const [formData, setFormData] = useState({});
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

  const validateForm = () => {
    const newErrors = {};
    if (!formData.hotelName) newErrors.hotelName = "Tên nơi cho thuê là bắt buộc";
    if (!formData.hotelPhone) newErrors.hotelPhone = "Số điện thoại là bắt buộc";
    if (!formData.area) newErrors.area = "Quy mô chỗ nghỉ là bắt buộc";
    if (!formData.hotelAddress) newErrors.hotelAddress = "Địa chỉ khách sạn là bắt buộc";
    if (!formData.country) newErrors.country = "Quốc gia cư trú là bắt buộc";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        setErrors({});
        setSuccessMessage("");

        const formDataWithOwner = {
          ...formData,
          ownerID,
        };

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
        {errors.apiError && <p className="text-red-500">{errors.apiError}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
          Tạo khách sạn
        </button>
      </form>
    </div>
  );
};

export default CreateHotel;
