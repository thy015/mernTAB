import React, { useState, useEffect } from "react";
import axios from "axios";

const TabDetail = ({ hotelId, tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.type);
  const [roomsData, setRoomsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoomsData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_BASEURL}/hotellist/rooms`, {
          params: {
            hotelID: hotelId,
          },
        });
        setRoomsData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    if (hotelId) {
      fetchRoomsData();
    }
  }, [hotelId]);

  // const handleBookRoom = async (room) => {
  //   try {
  //     const roomId = room.id;  // Assuming room.id is the room's ID
  //     const totalMoney = room.money;  // Total money
  //     const description = `Dịch vụ đặt phòng ${room.name}`;

  //     const response = await axios.post(
  //       "https://voucher-server-alpha.vercel.app/api/vouchers/createPartNerRequest",
  //       {
  //         OrderID: roomId,
  //         PartnerID: "60c9c5d9c5f9c40015f6f7b6",
  //         ServiceName: "Đặt phòng khách sạn",
  //         TotalMoney: totalMoney,
  //         CustomerCode: "KH01",
  //         Description: description,
  //         LinkHome: "https://cnpm-fe-thanh-b1c064a3f59c.herokuapp.com/MainHome",
  //         LinkReturnSuccess: `https://mern-tab-be.vercel.app/book/completedTran/${roomId}`,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     const voucherData = await resVoucher.json();
  //     console.log("Phản hồi từ server tạo yêu cầu đối tác:", voucherData);

  //     if (resVoucher.ok) {
  //       window.location.href = `https://checkout-page-54281a5e23aa.herokuapp.com/?OrderID=${buyTicketBus._id}`;
  //     } else {
  //       alert(voucherData.error || "Đã xảy ra lỗi khi truyền dữ liệu");
  //     }
  //   } catch (error) {
  //     console.error("Lỗi khi truyền dữ liệu:", error);
  //     alert("Không thể truyền dữ liệu");
  //   }
  // };


  const activeTabData = tabs.find((tab) => tab.type === activeTab);

  return (
    <div className="container p-4 mx-auto">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.type}
            onClick={() => setActiveTab(tab.type)}
            className={`px-4 py-2 font-semibold text-gray-800 focus:outline-none transition-opacity duration-300 ${
              activeTab === tab.type ? "border-b-2 border-blue-500" : ""
            }`}
          >
            {tab.type}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {activeTabData && (
          <div className="p-4 bg-blue-100 rounded">
            {roomsData.map((room) => (
              <div key={room.name} className="mb-6">
                <div className="grid grid-cols-5 gap-4 p-4 bg-white shadow-md rounded-xl">
                  <div className="col-span-2">
                    <h2 className="text-2xl font-bold text-blue-500 ">
                      {room.name}
                    </h2>
                    <img
                      src={room.imgSrc}
                      className="object-cover w-full h-32 mb-4 rounded"
                    />
                    <div className="grid grid-cols-3 gap-1">
                      {/* {room.details.images.map((src, index) => (
                        <img
                          key={index}
                          src={src}
                          alt={`Room detail ${index + 1}`}
                          className="object-cover w-full h-16 rounded"
                        />
                      ))} */}
                    </div>
                  </div>
                  <div className="col-span-1">
                    <h2 className="my-2 text-lg font-bold text-gray-600">
                    Loại phòng: 
                    </h2>
                    <ul className="mb-4 list-none">
                    {room.typeOfRoom}
                    </ul>
                  </div>
                  <div className="col-span-1">
                    <h2 className="my-2 text-lg font-bold text-gray-600">
                      Sức chứa
                    </h2>
                    <p className="mb-2">{room.capacity}</p>
                  </div>
                  <div className="col-span-1">
                    <h2 className="my-2 text-lg font-bold text-gray-600">
                      Số giường
                    </h2>
                    <p className="mb-2">{room.numberOfBeds}</p>
                  </div>
                  <div className="flex flex-col items-end float-right">
                    <div>
      
                      <span className="inline-block px-2 py-1 mb-2 text-green-500 bg-green-200 rounded float-right">
                        Tổng tiền: {room.money}
                      </span>
                    </div>
                    <div>
                      <button className="px-4 py-2 mt-2 text-white bg-blue-500 rounded float-right">
                        Đặt phòng
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TabDetail;
