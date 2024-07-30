import React, { useState } from "react";
import axios from "axios";
 
const CreateHotel = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    hotelPhone: "",
    nation: "",
    city: "",
    scale: "",
    hotelAddress: "",
    facilityName: "",
    taxCode: "",
    businessType : "",
    hotelImg: []
  });
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
    if (!formData.companyName) newErrors.companyName = "Tên khách sạn là bắt buộc";
    if (!formData.hotelPhone) newErrors.hotelPhone = "Số điện thoại là bắt buộc";
    if (!formData.nation) newErrors.nation = "Quốc gia cư trú là bắt buộc";
    if (!formData.city) newErrors.city = "Thành phố là bắt buộc";
    if (!formData.scale) newErrors.scale = "Quy mô chỗ nghỉ là bắt buộc";
    if (!formData.hotelAddress) newErrors.hotelAddress = "Địa chỉ khách sạn là bắt buộc";
    if (!formData.facilityName) newErrors.facilityName = "Tên doanh nghiệp là bắt buộc";
    if (!formData.taxCode) newErrors.taxCode = "Mã số thuế là bắt buộc";
    if (!formData.businessType) newErrors.businessType = "Loại hình kinh doanh là bắt buộc";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

    //Up file lên cloudinary
    const uploadFile = async (file) => {
      const data = new FormData();
      data.append("file", file );
      data.append("upload_preset",'images_preset')

      try {
          let cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
          let resourceType = 'image'
          let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

          const res = await axios.post(api, data);
          const { secure_url } = res.data;
          console.log(secure_url);
          return secure_url;
      } catch (error) {
          console.error(error);
          throw error;
      }
  }
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
    setFormData((prevdata) => ({
      ...prevdata,
      hotelImg: fileArray,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        setErrors({});
        setSuccessMessage("");

        const uploadedImages = await Promise.all(
          formData.hotelImg.map((file) => uploadFile(file))
        );

        const formDataWithOwner = {
          ...formData, 
          hotelImg : uploadedImages,
          ownerID,
        };
        console.log(formDataWithOwner)
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_BASEURL}/hotelList/create`,
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
            name="companyName"
            value={formData.companyName || ""}
            onChange={handleGeneralChange}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.companyName && <p className="text-red-500">{errors.companyName}</p>}
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
            name="nation"
            value={formData.nation || ""}
            onChange={handleGeneralChange}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.nation && <p className="text-red-500">{errors.nation}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Thành phố:</label>
          <input
            type="text"
            name="city"
            value={formData.city || ""}
            onChange={handleGeneralChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        {errors.city && <p className="text-red-500">{errors.city}</p>}
        <div className="mb-4">
          <label className="block text-gray-700">Quy mô chỗ nghỉ (m²):</label>
          <input
            type="number"
            name="scale"
            value={formData.scale || ""}
            onChange={handleGeneralChange}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.scale && <p className="text-red-500">{errors.scale}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Địa chỉ khách sạn:</label>
          <input
            type="text"
            name="address"
            value={formData.address || ""}
            onChange={handleGeneralChange}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.address && <p className="text-red-500">{errors.address}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Tên Doanh Nghiệp Kinh Doanh Khách Sạn:</label>
          <input
            type="text"
            name="facilityName"
            value={formData.facilityName || ""}
            onChange={handleGeneralChange}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.facilityName && <p className="text-red-500">{errors.facilityName}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Mã số thuế</label>
          <input
            type="text"
            name="taxCode"
            value={formData.taxCode || ""}
            onChange={handleGeneralChange}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.taxCode && <p className="text-red-500">{errors.taxCode}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Loại hình Kinh doanh:</label>
          <input
            type="text"
            name="businessType"
            value={formData.businessType || ""}
            onChange={handleGeneralChange}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.businessType && <p className="text-red-500">{errors.businessType}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Hình ảnh khách sạn:</label>
          <input
            type="file" 
            id="img"
            multiple
            onChange={handleImageChange}
            className="w-full px-4 py-2 border rounded"
          />
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
