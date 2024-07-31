import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function InvoiceManagement() {
  const [reqCancelRoom, setReqCancelRoom] = useState([]);

  const [filter, setFilter] = useState("all");

  const handleStatusChange = async (hotelId, newStatus) => {
    try {
      await axios.patch(`${process.env.REACT_APP_BACKEND_BASEURL}/reqCancel/${hotelId}`, {
        isAccept: newStatus
      });
      setReqCancelRoom((prevRooms) =>
        prevRooms.map((room) =>
          room._id === hotelId ? { ...room, isAccept: newStatus } : room
        )
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    const getReqCancelInvoice = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_BASEURL}/reqCancel/processing`);
        console.log(res.data.data)
        setReqCancelRoom(res.data.data);
      } catch (e) {
        console.error(e.message);
      }
    }
    getReqCancelInvoice();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "processing":
        return "text-yellow-500";
      case "rejected":
        return "text-red-500";
      case "accepted":
        return "text-green-500";
      default:
        return "";
    }
  };

  const filteredReq =
    filter === "all" ? reqCancelRoom : reqCancelRoom.filter((reqCancel) => reqCancel.isAccept === filter);


    const handleAccept = async (reqCancel) =>{
        //
        const authToken = localStorage.getItem("authToken");
        try{
            const reqCancelID = reqCancel._id
            const receiptID = authToken 
            const orderID = reqCancel.orderID
            const res = await axios.post(`${process.env.REACT_APP_BACKEND_BASEURL}/admin/accept/${reqCancelID}`,
                {
                    receiptID,
                    orderID,
                    reqCancelID
                },
                {
                    headers: {
                      Authorization: `Bearer ${authToken}`,
                    },
                }
            )
            console.log(res.data)
        }catch(e){
            console.log(e.message)
        }
    }
  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">Manage Hotel Profiles</h2>

      <div className="mb-6">
        <label htmlFor="status-filter" className="block mb-2 font-semibold">
          Filter by Status
        </label>
        <select
          id="status-filter"
          onChange={(e) => setFilter(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="all">All</option>
          <option value="processing">Processing</option>
          <option value="rejected">Rejected</option>
          <option value="accepted">Accepted</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredReq.map(reqCancel => (
          <div
            key={reqCancel._id}
            className="p-4 bg-white border rounded shadow cursor-pointer hover:shadow-md"
          >
            <strong className="block text-lg">{reqCancel.receiptID}</strong>
            <p>
              Status: <span className={getStatusColor(reqCancel.isAccept)}>{reqCancel.isAccept} </span>
            </p>
            {(reqCancel.isAccept === "processing" || reqCancel.isAccept === "rejected") && (
              <div className="flex justify-end space-x-5">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAccept(reqCancel);
                  }}
                  className="p-2 mt-2 text-white bg-blue-500 rounded"
                >
                  Mark accepted
                </button>
                {reqCancel.isAccept === "processing" && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleStatusChange(reqCancel._id, "rejected");
                    }}
                    className="p-2 mt-2 text-white bg-red-500 rounded"
                  >
                    Mark rejected
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
