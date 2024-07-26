// src/components/Step2.js
import React, { useState } from "react";

const Step2 = ({ onPrevious, formData, setFormData, onComplete }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.businessName)
      newErrors.businessName = "Tên doanh nghiệp là bắt buộc";
    if (!formData.taxId) newErrors.taxId = "MST Doanh nghiệp là bắt buộc";
    if (!formData.businessAddress)
      newErrors.businessAddress = "Địa chỉ kinh doanh là bắt buộc";
    if (!formData.businessLicenseExpiry)
      newErrors.businessLicenseExpiry =
        "Ngày hết hạn của giấy phép kinh doanh là bắt buộc";
    if (!formData.fireSafetyLicenseExpiry)
      newErrors.fireSafetyLicenseExpiry =
        "Ngày hết hạn của giấy phép PCCC là bắt buộc";
    if (!formData.businessCertificate)
      newErrors.businessCertificate =
        "Giấy chứng nhận đăng ký doanh nghiệp là bắt buộc";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onComplete();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700">Tên doanh nghiệp</label>
        <input
          type="text"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        {errors.businessName && (
          <p className="text-red-500">{errors.businessName}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">MST Doanh nghiệp</label>
        <input
          type="number"
          name="taxId"
          value={formData.taxId}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        {errors.taxId && <p className="text-red-500">{errors.taxId}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Địa chỉ kinh doanh</label>
        <input
          type="text"
          name="businessAddress"
          value={formData.businessAddress}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        {errors.businessAddress && (
          <p className="text-red-500">{errors.businessAddress}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">
          Ngày hết hạn của giấy phép kinh doanh
        </label>
        <input
          type="month"
          name="businessLicenseExpiry"
          value={formData.businessLicenseExpiry}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        {errors.businessLicenseExpiry && (
          <p className="text-red-500">{errors.businessLicenseExpiry}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">
          Ngày hết hạn của giấy phép PCCC
        </label>
        <input
          type="month"
          name="fireSafetyLicenseExpiry"
          value={formData.fireSafetyLicenseExpiry}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        {errors.fireSafetyLicenseExpiry && (
          <p className="text-red-500">{errors.fireSafetyLicenseExpiry}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">
          Giấy chứng nhận đăng ký doanh nghiệp
        </label>
        <input
          type="file"
          name="businessCertificate"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        {errors.businessCertificate && (
          <p className="text-red-500">{errors.businessCertificate}</p>
        )}
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onPrevious}
          className="px-4 py-2 text-black bg-gray-300 rounded"
        >
          Quay lại
        </button>
        <button
          type="submit"
          className="justify-end px-4 py-2 text-white bg-blue-500 rounded"
        >
          Hoàn tất
        </button>
      </div>
    </form>
  );
};

export default Step2;
