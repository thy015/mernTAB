// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// export default function HotelOwner(props) {
//   const hotel = props.hotelProps;
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate(`/detailhotel/${hotel._id}`);
//   };
//   return (
//     <div
//             key={hotel._id}
//             onClick={() => setSelectedProfile(profile)}
//             className="block p-4 no-underline bg-gray-100 rounded-lg shadow-sm cursor-pointer hover:bg-gray-200"
//           >
//             <div className="mb-4">
//               <img
//                 src={profile.coverImage}
//                 alt="Cover"
//                 className="object-cover w-full h-64 rounded-lg"
//               />
//             </div>

//             <div className="space-y-2">
//               <div className="text-xl font-bold">{profile.hotelName}</div>
//               <p className="text-gray-600">
//                 Ngày giờ tạo: {formatDate(profile.creationDate)}
//               </p>
//               <p className="text-gray-600">Số phòng: {profile.numberOfRooms}</p>
//               <p
//                 className={`text-sm font-semibold ${
//                   profile.status === "Processing"
//                     ? "text-yellow-500"
//                     : profile.status === "Completed"
//                     ? "text-green-500"
//                     : "text-red-500"
//                 }`}
//               >
//                 Trạng thái hồ sơ: {profile.status}
//               </p>
//             </div>
//           </div>
//   )
// }
