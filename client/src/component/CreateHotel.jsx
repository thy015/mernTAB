import React, { useState } from "react";
import axios from "axios";
import { Button } from "antd";
import { Link } from "react-router-dom";
const CreateHotel = () => {
  const [companyName, setCompanyName] = useState("");
  const [hotelPhone, setHotelPhone] = useState("");
  const [nation, setNation] = useState("");
  const [city, setCity] = useState("");
  const [scale, setScale] = useState("");
  const [address, setAddress] = useState("");
  const [facilityName, setFacilityName] = useState("");
  const [taxCode, setTaxCode] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [hotelImg, setHotelImg] = useState(null);

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const ownerID = localStorage.getItem("ownerID");
  const token = localStorage.getItem("authToken");

  const validateForm = () => {
    const newErrors = {};
    if (!companyName) newErrors.companyName = "Tên khách sạn là bắt buộc";
    if (!hotelPhone) newErrors.hotelPhone = "Số điện thoại là bắt buộc";
    if (!nation) newErrors.nation = "Quốc gia cư trú là bắt buộc";
    if (!city) newErrors.city = "Thành phố là bắt buộc";
    if (!scale) newErrors.scale = "Quy mô chỗ nghỉ là bắt buộc";
    if (!address) newErrors.address = "Địa chỉ khách sạn là bắt buộc";
    if (!facilityName) newErrors.facilityName = "Tên doanh nghiệp là bắt buộc";
    if (!taxCode) newErrors.taxCode = "Mã số thuế là bắt buộc";
    if (!businessType) newErrors.businessType = "Loại hình kinh doanh là bắt buộc";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Up file lên Cloudinary
  const uploadFile = async () => {
    const data = new FormData();
    data.append("file", hotelImg);
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

  const handleImageChange = async (e) => {
    
    try {
      const uploadedImage = await uploadFile('image')

      setHotelImg(uploadedImage);
    } catch (error) {
      setErrors({ apiError: "Có lỗi xảy ra khi tải ảnh lên. Vui lòng thử lại." });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        setErrors({});
        setSuccessMessage("");


        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_BASEURL}/hotelList/create`,
          {
            companyName,
            hotelPhone,
            nation,
            city,
            scale,
            address,
            facilityName,
            taxCode,
            businessType,
            hotelImg,
            ownerID,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.status === "OK") {
          setSuccessMessage("Tạo khách sạn thành công!");
          setCompanyName("");
          setHotelPhone("");
          setNation("");
          setCity("");
          setScale("");
          setAddress("");
          setFacilityName("");
          setTaxCode("");
          setBusinessType("");
          setHotelImg("");
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
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.companyName && <p className="text-red-500">{errors.companyName}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Số điện thoại khách sạn:</label>
          <input
            type="tel"
            name="hotelPhone"
            value={hotelPhone}
            onChange={(e) => setHotelPhone(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.hotelPhone && <p className="text-red-500">{errors.hotelPhone}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Quốc gia cư trú:</label>
          <input
            type="text"
            name="nation"
            value={nation}
            onChange={(e) => setNation(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.nation && <p className="text-red-500">{errors.nation}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Thành phố:</label>
          <input
            type="text"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.city && <p className="text-red-500">{errors.city}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Quy mô chỗ nghỉ (m²):</label>
          <input
            type="number"
            name="scale"
            value={scale}
            onChange={(e) => setScale(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.scale && <p className="text-red-500">{errors.scale}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Địa chỉ khách sạn:</label>
          <input
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.address && <p className="text-red-500">{errors.address}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Tên Doanh Nghiệp Kinh Doanh Khách Sạn:</label>
          <input
            type="text"
            name="facilityName"
            value={facilityName}
            onChange={(e) => setFacilityName(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.facilityName && <p className="text-red-500">{errors.facilityName}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Mã số thuế:</label>
          <input
            type="text"
            name="taxCode"
            value={taxCode}
            onChange={(e) => setTaxCode(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.taxCode && <p className="text-red-500">{errors.taxCode}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Loại hình Kinh doanh:</label>
          <input
            type="text"
            name="businessType"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.businessType && <p className="text-red-500">{errors.businessType}</p>}
        </div>
        <form onSubmit={handleImageChange}>
                <br />
                <div>
                    <label htmlFor="img">Image:</label>
                    <br />
                    <input 
                        type="file" 
                        id="img" 
                        onChange={(e) => setHotelImg(e.target.file)} 
                    />
                </div>
                <br />
                <button type='submit'>Upload</button>
            </form>
        {errors.apiError && <p className="text-red-500">{errors.apiError}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
          Tạo khách sạn
        </button>
      </form>
      <Link to='https://client-voucher-b243d0019775.herokuapp.com/CreateVoucherPartner?service=1000000005'>
      <Button type="primary" className="mt-8">Tạo voucher</Button>
      </Link>
    </div>
  );
};

export default CreateHotel;
