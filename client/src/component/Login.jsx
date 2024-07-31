import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email || !passWord) {
      setError("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_BASEURL}/signUp/signIn`, { email, passWord });
      if (response.data.status === "OK") {
        setSuccess("Đăng nhập thành công!");
        localStorage.setItem("ownerID", response.data.ownerID);
        localStorage.setItem("authToken", response.data.access_token); 
        console.log(response.data.access_token)// Lưu token vào localStorage
        window.location.href = "/manage";
      } else {
        setError("Email hoặc mật khẩu không chính xác.");
      }
    } catch (error) {
      setError("Có lỗi xảy ra. Vui lòng thử lại.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441260038675-7329ab4cc264?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3w4N3x8ZW58MHx8fHx8')" }}>
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-center">Đăng Nhập</h2>
        {error && <p className="mb-4 text-center text-red-500">{error}</p>}
        {success && <p className="mb-4 text-center text-green-500">{success}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700">
              Email
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-3 py-2 mt-1 bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
                placeholder="you@example.com"
                required
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700">
              Mật khẩu
              <input
                type="password"
                value={passWord}
                onChange={(e) => setPassWord(e.target.value)}
                className="block w-full px-3 py-2 mt-1 bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
                placeholder="Mật khẩu của bạn"
                required
              />
            </label>
          </div>
          <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Đăng Nhập</button>
          <p className="mt-4 text-sm text-center text-gray-600">
            Bạn chưa có tài khoản?
            <a href="/signup" className="text-blue-500 hover:underline">Đăng ký</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
