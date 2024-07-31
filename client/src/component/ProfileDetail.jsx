import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfileDetail = ({ hotelID, onBack }) => {
  const [hotel, setHotel] = useState(null);
  const [roomsData, setRoomsData] = useState([]);
  
  const [numberOfBeds, setNumberOfBeds] = useState("");
  const [typeOfRoom, setTypeOfRoom] = useState("");
  const [money, setMoney] = useState("");
  const [capacity, setCapacity] = useState("");
  const [img, setImg] = useState(null);

  const [newAmenity, setNewAmenity] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_BASEURL}/hotelList/rooms`, {
          params: {
            hotelID,
          },
        });
        console.log(response.data)
        setRoomsData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRooms();
  }, [hotelID]);

  const uploadFile = async () => {
    const data = new FormData();
    data.append("file", img);
    data.append("upload_preset", 'images_preset');

    try {
      let cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
      let resourceType = 'image';
      let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      console.log(secure_url);
      return secure_url;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  const handleAddRoom = async () => {
    try {
      const roomImages = await uploadFile();

      const roomData = {
        numberOfBeds,
        typeOfRoom,
        money,
        capacity,
        roomImages
      };

      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_BASEURL}/hotelList/createRoom`,
        {
          numberOfBeds,
          typeOfRoom,
          money,
          capacity,
          roomImages,
          hotelID
        },
        {
          params: {
            hotelID,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.status === "OK") {
        alert("Thêm phòng thành công!");
        setNumberOfBeds("");
        setTypeOfRoom("");
        setMoney("");
        setCapacity("");
        setImg(null);
      } else {
        alert("Có lỗi xảy ra khi thêm phòng. Vui lòng thử lại.");
      }
    } catch (error) {
      alert("Có lỗi xảy ra khi thêm phòng. Vui lòng thử lại.");
    }
  };

  return (
    <div className="p-4">
      {!roomsData ? (
        <div>
          <h2 className="text-center text-blue-500">Thêm loại phòng mới</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Số lượng giường:</label>
            <input
              type="number"
              value={numberOfBeds}
              onChange={(e) => setNumberOfBeds(e.target.value)}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Loại phòng:</label>
            <select
              value={typeOfRoom}
              onChange={(e) => setTypeOfRoom(e.target.value)}
              className="w-full px-4 py-2 border rounded"
            >
              <option value="">Chọn loại phòng</option>
              <option value="Phòng đơn">Phòng đơn</option>
              <option value="Phòng đôi">Phòng đôi</option>
              <option value="Phòng gia đình">Phòng gia đình</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Giá phòng:</label>
            <input
              type="number"
              value={money}
              onChange={(e) => setMoney(e.target.value)}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Sức chứa:</label>
            <input
              type="number"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Hình ảnh:</label>
            <input
              type="file"
              onChange={(e) => setImg(e.target.files[0])}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <button
            type="button"
            onClick={handleAddRoom}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Thêm phòng
          </button>
          <button
            type="button"
            onClick={onBack}
            className="px-4 py-2 bg-gray-500 text-white rounded ml-4"
          >
            Quay lại
          </button>
        </div>
      ) : (
        <>
        <h2 className="text-center text-blue-500">Thêm loại phòng mới</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Số lượng giường:</label>
            <input
              type="number"
              value={numberOfBeds}
              onChange={(e) => setNumberOfBeds(e.target.value)}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Loại phòng:</label>
            <select
              value={typeOfRoom}
              onChange={(e) => setTypeOfRoom(e.target.value)}
              className="w-full px-4 py-2 border rounded"
            >
              <option value="">Chọn loại phòng</option>
              <option value="Phòng đơn">Phòng đơn</option>
              <option value="Phòng đôi">Phòng đôi</option>
              <option value="Phòng gia đình">Phòng gia đình</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Giá phòng:</label>
            <input
              type="number"
              value={money}
              onChange={(e) => setMoney(e.target.value)}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Sức chứa:</label>
            <input
              type="number"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Hình ảnh:</label>
            <input
              type="file"
              onChange={(e) => setImg(e.target.files[0])}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <button
            type="button"
            onClick={handleAddRoom}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Thêm phòng
          </button>
          <button
            type="button"
            onClick={onBack}
            className="px-4 py-2 bg-gray-500 text-white rounded ml-4"
          >
            Quay lại
          </button>
          <h1 className="text-center text-blue-500">Chi tiết khách sạn</h1>
          {roomsData.map(room => {
            return ( <>
              <div className="grid grid-cols-5 gap-4 p-4 bg-white shadow-md rounded-xl">
               <div className="col-span-2">
                    <img
                      src={room.roomImages}
                      className="object-cover w-full h-32 mb-4 rounded"
                    />
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

                    </div>
                  </div> </div>
                  
            </>
            )
          }
            
          )}

          
        </>
      )}
    </div>
  );
};

export default ProfileDetail;
