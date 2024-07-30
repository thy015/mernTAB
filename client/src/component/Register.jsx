import React, { useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { DatePicker, Input, Button, Form, message } from "antd";
import "antd/dist/reset.css";

const Register = () => {
  const [name, setName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [address, setAddress] = useState("");
  const [dueDatePCCC, setDueDatePCCC] = useState("");
  const [dueDateKD, setDueDateKD] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        console.log({
          name,
          passWord,
          email,
          birthDate,
          phoneNum,
          address,
          dueDatePCCC,
          dueDateKD
        });
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_BASEURL}/signUp/create`, {
            name,
            passWord,
            email,
            birthDate,
            phoneNum,
            address,
            dueDatePCCC,
            dueDateKD
          }
        );
        console.log(response.data);
        message.success("Registration successful");
        window.location.href = "/login";
      } catch (error) {
        console.error("There was an error!", error);
        message.error("Registration failed");
      }
    }
  };

  const handleDateChange = (date, dateString, name) => {
    if (name === "dueDateKD") {
      setDueDateKD(dateString);
    } else if (name === "dueDatePCCC") {
      setDueDatePCCC(dateString);
    } else {
      setBirthDate(dateString);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const today = dayjs();
    const eighteenYearsAgo = today.subtract(18, "year");

    if (!email) newErrors.email = "Email là bắt buộc";
    if (!phoneNum) newErrors.phoneNum = "Số điện thoại là bắt buộc";
    if (!name) newErrors.name = "Họ và tên là bắt buộc";
    if (!address) newErrors.address = "Địa chỉ là bắt buộc";
    if (!passWord) newErrors.passWord = "Mật khẩu là bắt buộc";
    if (!birthDate) {
      newErrors.birthDate = "Ngày sinh là bắt buộc";
    } else if (dayjs(birthDate, "DD/MM/YYYY").isAfter(eighteenYearsAgo)) {
      newErrors.birthDate = "Bạn phải từ 18 tuổi trở lên";
    }
    if (!dueDateKD) newErrors.dueDateKD = "Ngày hết hạn của giấy phép kinh doanh là bắt buộc";
    if (!dueDatePCCC) newErrors.dueDatePCCC = "Ngày hết hạn của giấy phép PCCC là bắt buộc";

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
        <Form layout="vertical">
          <Form.Item label="Email" validateStatus={errors.email ? "error" : ""} help={errors.email}>
            <Input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Số điện thoại" validateStatus={errors.phoneNum ? "error" : ""} help={errors.phoneNum}>
            <Input
              name="phoneNum"
              value={phoneNum}
              onChange={(e) => setPhoneNum(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Họ và tên" validateStatus={errors.name ? "error" : ""} help={errors.name}>
            <Input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Địa chỉ" validateStatus={errors.address ? "error" : ""} help={errors.address}>
            <Input
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Mật khẩu" validateStatus={errors.passWord ? "error" : ""} help={errors.passWord}>
            <Input.Password
              name="passWord"
              value={passWord}
              onChange={(e) => setPassWord(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Ngày sinh"
            validateStatus={errors.birthDate ? "error" : ""}
            help={errors.birthDate}
          >
            <DatePicker
              format="DD/MM/YYYY"
              onChange={(date, dateString) => handleDateChange(date, dateString, "birthDate")}
            />
          </Form.Item>
          <Form.Item
            label="Ngày hết hạn của giấy phép kinh doanh"
            validateStatus={errors.dueDateKD ? "error" : ""}
            help={errors.dueDateKD}
          >
            <DatePicker
              format="DD/MM/YYYY"
              onChange={(date, dateString) => handleDateChange(date, dateString, "dueDateKD")}
            />
          </Form.Item>
          <Form.Item
            label="Ngày hết hạn của giấy phép PCCC"
            validateStatus={errors.dueDatePCCC ? "error" : ""}
            help={errors.dueDatePCCC}
          >
            <DatePicker
              format="DD/MM/YYYY"
              onChange={(date, dateString) => handleDateChange(date, dateString, "dueDatePCCC")}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              onClick={handleSubmit}
            >
              Hoàn thành
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
