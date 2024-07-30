import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!firstName || !lastName || !email || !dob || !phoneNumber || !password) {
      setError("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_BASEURL}/signUpCus/create`, {
        firstName,
        lastName,
        email,
        dob,
        phoneNumber,
        password,
      });

      if (response.data.success) {
        setSuccess("Đăng ký thành công! Vui lòng kiểm tra email để xác nhận.");
        setFirstName("");
        setLastName("");
        setEmail("");
        setDob("");
        setPhoneNumber("");
        setPassword("");
        window.location.href = "/login_cus";
      } else {
        setError(response.data.message || "Đăng ký thất bại. Vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Error during sign up:", error);
      setError("Có lỗi xảy ra trong quá trình đăng ký. Vui lòng thử lại.");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-center bg-cover "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1441260038675-7329ab4cc264?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3w4N3x8ZW58MHx8fHx8')",
      }}
    >
      <div className="w-full max-w-md p-6 mx-auto bg-white rounded-md shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-center">Đăng Ký</h2>
        {error && <p className="mb-4 text-center text-red-500">{error}</p>}
        {success && <p className="mb-4 text-center text-green-500">{success}</p>}
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label className="flex space-x-4 mb-2">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 w-1/2">
                Tên
              </span>
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 w-1/2">
                Họ
              </span>
            </label>
            <div className="flex space-x-4">
              <input
                placeholder="Tên"
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                required
              />
              <input
                placeholder="Họ"
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Email
              </span>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-3 py-2 mt-1 bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
                placeholder="you@example.com"
                required
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block mb-2">
              <span className="block text-sm font-medium text-slate-700">
                Ngày tháng năm sinh
              </span>
            </label>
            <input
              type="date"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md shadow-sm"
              required
            />
            <label className="block mb-2">
              <span className="block text-sm font-medium text-slate-700">
                Số điện thoại
              </span>
            </label>
            <input
              placeholder="Số điện thoại"
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Mật khẩu
              </span>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-3 py-2 mt-1 bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
                placeholder="Mật khẩu của bạn"
                required
              />
            </label>
          </div>
          <button
            type="submit"
            className="w-1/2 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Đăng Ký
          </button>
          <p className="mt-4 text-sm text-center text-gray-600">
            Bạn đã có tài khoản?
            <a href="/login" className="text-blue-500 hover:underline">
              Đăng nhập
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
