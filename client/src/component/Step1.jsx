import React, { useState } from "react";
import dayjs from "dayjs";

const Step1 = ({ onNext, formData, setFormData }) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    const today = dayjs();
    const eighteenYearsAgo = today.subtract(18, "year");

    if (!formData.email) newErrors.email = "Email là bắt buộc";
    if (!formData.phoneNum) newErrors.phoneNum = "Số điện thoại là bắt buộc";
    if (!formData.name) newErrors.name = "Họ và tên là bắt buộc";
    if (!formData.address) newErrors.address = "Địa chỉ là bắt buộc";
    if (!formData.passWord) newErrors.passWord = "Mật khẩu là bắt buộc";
    if (!formData.birthDate) {
      newErrors.birthDate = "Ngày sinh là bắt buộc";
    } else if (dayjs(formData.birthDate).isAfter(eighteenYearsAgo)) {
      newErrors.birthDate = "Bạn phải từ 18 tuổi trở lên";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Số điện thoại</label>
        <input
          type="text"
          name="phoneNum"
          value={formData.phoneNum}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        {errors.phoneNum && <p className="text-red-500">{errors.phoneNum}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Họ và tên</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Địa chỉ</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        {errors.address && <p className="text-red-500">{errors.address}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Mật khẩu</label>
        <input
          type="password"
          name="passWord"
          value={formData.passWord}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        {errors.passWord && <p className="text-red-500">{errors.passWord}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Ngày sinh</label>
        <input
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        {errors.birthDate && <p className="text-red-500">{errors.birthDate}</p>}
      </div>
      <button
        type="submit"
        className="flex justify-end px-4 py-2 text-white bg-blue-500 rounded"
      >
        Tiếp tục
      </button>
    </form>
  );
};

export default Step1;
