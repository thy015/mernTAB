import React, { useState } from "react";

const Step2 = ({ onPrevious, formData, setFormData, onComplete }) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };


  const validateForm = () => {
    const newErrors = {};
    if (!formData.businessName)
      newErrors.businessName = "Tên doanh nghiệp là bắt buộc";
    if (!formData.taxId) newErrors.taxId = "MST Doanh nghiệp là bắt buộc";
    if (!formData.businessAddress)
      newErrors.businessAddress = "Địa chỉ kinh doanh là bắt buộc";
    if (!formData.dueDateKD)
      newErrors.dueDateKD = "Ngày hết hạn của giấy phép kinh doanh là bắt buộc";
    if (!formData.dueDatePCCC)
      newErrors.dueDatePCCC = "Ngày hết hạn của giấy phép PCCC là bắt buộc";

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
          name="dueDateKD"
          value={formData.dueDateKD}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        {errors.dueDateKD && (
          <p className="text-red-500">{errors.dueDateKD}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">
          Ngày hết hạn của giấy phép PCCC
        </label>
        <input
          type="month"
          name="dueDatePCCC"
          value={formData.dueDatePCCC}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        {errors.dueDatePCCC && (
          <p className="text-red-500">{errors.dueDatePCCC}</p>
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
