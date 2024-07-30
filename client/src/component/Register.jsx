import React, { useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    birthDate: "",
    phoneNum: "",
    address: "",
    passWord: "",
    dueDateKD: "",
    dueDatePCCC: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        console.log(formData)
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_BASEURL}/signUp/create`,
          formData
        );
        console.log(response.data);
        // window.location.href = "/success";
      } catch (error) {
        console.error("There was an error!", error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
    if (!formData.dueDateKD)
      newErrors.dueDateKD = "Ngày hết hạn của giấy phép kinh doanh là bắt buộc";
    if (!formData.dueDatePCCC)
      newErrors.dueDatePCCC = "Ngày hết hạn của giấy phép PCCC là bắt buộc";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/3 p-4 bg-blue-200">
        <button className="block w-full text-left px-4 py-2 mb-2 bg-gray-300">
          Đăng ký tài khoản Chủ nhà và thông tin doanh nghiệp
        </button>
      </div>
      <div className="w-2/3 p-4 bg-white">
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
        <div className="mb-4">
          <label className="block text-gray-700">Ngày hết hạn của giấy phép kinh doanh</label>
          <input
            type="date"
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
          <label className="block text-gray-700">Ngày hết hạn của giấy phép PCCC</label>
          <input
            type="date"
            name="dueDatePCCC"
            value={formData.dueDatePCCC}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.dueDatePCCC && (
            <p className="text-red-500">{errors.dueDatePCCC}</p>
          )}
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="flex justify-end px-4 py-2 text-white bg-blue-500 rounded"
        >
          Hoàn thành
        </button>
      </div>
    </div>
  );
};

export default Register;
