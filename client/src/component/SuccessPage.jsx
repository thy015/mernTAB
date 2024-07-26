import React from "react";

export default function SuccessPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-sky-100">
      <div className="p-4 bg-white border rounded shadow-md">
        <h1 className="text-2xl font-semibold text-center">
          Đăng ký thành công!
        </h1>
        <p className="mt-2">
          Cảm ơn bạn đã hoàn tất đăng ký. Chúng tôi sẽ trả kết quả cho bạn sớm
          nhất có thể.
        </p>
      </div>
    </div>
  );
}
