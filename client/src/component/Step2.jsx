// src/components/Step2.js
import React from "react";

const Step2 = ({ onNext, onPrevious, formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
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
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">MST Doanh nghiệp</label>
        <input
          placeholder="0123456789"
          type="number"
          name="taxId"
          value={formData.taxId}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
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
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">
          Giấy chứng nhận đăng ký doanh nghiệp
        </label>
        <input
          type="file"
          name="businessCertificate"
          value={formData.businessCertificate}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
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
          Tiếp tục
        </button>
      </div>
    </form>
  );
};

export default Step2;
