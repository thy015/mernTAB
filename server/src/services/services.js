const Account = require("../models/signUp.model");
const Hotel = require("../models/hotel.model");
const dotenv = require("dotenv");
dotenv.config();
const axios = require("axios");
const {
  generalAccessTokens,
  refreshAccessTokens,
  paymentToken,
} = require("./jwt");
const { Invoice, Receipt } = require("../models/invoice.model");
const { reqCancel, refundMoney } = require("../models/reqCancel.model");

const Video = require('../models/Video')

const jwt=require('jsonwebtoken')


const { default: mongoose } = require('mongoose');

async function signUpOwner(newOwner){
    return new Promise(async (resolve,rejects)=>{
        const{name,passWord,email,birthDate,phoneNum,address,dueDatePCCC,dueDateKD}=newOwner
        try{
            const checkAccountExisted=await Account.Account.findOne({
                email:email
            })
            const isAdmin=await Account.Admin.findOne({
                email:email
            })
            if(checkAccountExisted!==null || isAdmin!=null){
                rejects({
                    status:'BAD',
                    message:'Email existed'
                })
            }
            const createdOwner=await Account.Account.create({
                name,
                passWord,
                email,
                birthDate,
                phoneNum,
                address,
                dueDatePCCC,
                dueDateKD
            })
            if(createdOwner){
                resolve({
                    status:'OK',
                    message:'Succ',
                    data:createdOwner
                })
            }
        } catch(e){
            rejects(e)
        }
    })

}
//chung của owner và admin
async function signInOwner(existedOwner) {
  return new Promise(async (resolve, reject) => {
    const { email, passWord } = existedOwner;
    try {
      const foundOwner = await Account.Account.findOne({ email: email });

      if (foundOwner) {
        if (foundOwner.passWord !== passWord) {
          return resolve({
            status: "BAD",
            message: "Wrong password",
          });
        }
        const access_token = await generalAccessTokens({
          id: foundOwner._id,
          isUse: foundOwner.isUse,
        });
        const refresh_token = await refreshAccessTokens({
          id: foundOwner._id,
          isUse: foundOwner.isUse,
        });

        return resolve({
          status: "OK",
          message: "Success log in",
          access_token: access_token,
          // refresh_token: refresh_token,
          ownerID: foundOwner._id,
          //owner đi vào trang chủ
          redirect: "/",
        });
      } else {
        const foundAdmin = await Account.Admin.findOne({
          email: email,
          passWord: passWord,
        });

        if (foundAdmin) {
          const access_token = await generalAccessTokens({
            id: foundAdmin._id,
            isUse: foundAdmin.isUse,
          });

          return resolve({
            status: "OK",
            message: "Admin logged in",
            access_token,
            //admin đi vào dashboard admin
            redirect: "/Admin",
          });
          //ko tìm thấy admin
        } else {
          return reject({
            status: 404,
            message: "You haven’t registered yet",
          });
        }
      }
    } catch (e) {
      reject(e);
    }
  });
}
// đăng ký luôn bên app t3
async function signUpCustomer(newCustomer) {
  return new Promise(async (resolve, reject) => {
    const { firstName, password, email, dob, phoneNumber, username, lastName } =
      newCustomer;
    try {
      const response = await axios.post(
        `https://api.htilssu.com/api/v1/auth/register`,
        {
          username: username,
          firstName: firstName,
          lastName: lastName,
          password: password,
          email: email,
          dob: dob,
          phoneNumber: phoneNumber,
        }
      );
      if (response.status === 200 || response.status === 201) {
        resolve({
          status: "OK",
          message: "Successfully created customer",
          data: response,
        });
      } else {
        reject({
          status: "BAD",
          message: "Third-party service auth failed",
        });
      }
    } catch (e) {
      console.error("Error during sign-up:", e);
      reject(e);
    }
  });
}
//đẩy qua bên khác
async function signInCustomer(existedCustomer) {
  return new Promise(async (resolve, rejects) => {
    const { username, password } = existedCustomer;
    try {
      //bên fe post thẳng vào luồng này của be
      const response = await axios.post(
        "https://api.htilssu.com/api/v1/auth/login",
        {
          username: username,
          password: password,
        }
      );
      if (response.status === 200) {
        const access_token = await generalAccessTokens({
          id: response.data.user.id,
          isUse: "customer",
        });
        resolve({
          status: "OK",
          message: "Successfully signed in as cus",
          userID: response.data.user.id,
          access_token: access_token,
        });
      } else {
        resolve({
          status: "BAD",
          message: "Third-party service auth failed",
        });
      }
    } catch (e) {
      console.log(e);
      rejects(e);
    }
  });
}

//truyền qua token của cus tạo từ signInCus, roomID nhập tay
async function bookRoom(newInvoice, cusID, roomID) {
  return new Promise(async (resolve, reject) => {
    const { paymentMethod } = newInvoice;
    try {
      //chuyển cusID trong schema thành string
      console.log(`Customer ID extracted from token: ${cusID}`);
      //ko có phòng, đă dc book
      const foundRoom = await Hotel.Room.findById(roomID);
      if (!foundRoom) {
        return reject({
          status: "BAD",
          message: "Room not found",
        });
      }

      if (!foundRoom.isAvailable) {
        return reject({
          status: "BAD",
          message: "Room is booked",
        });
      }
      const roomPrice = foundRoom.money;
      const total = roomPrice + roomPrice * 0.08; //vat
      //tạo biên lai
      const invoice = await Invoice.create({
        cusID,
        roomID,
        total,
        paymentMethod,
      });

      const payment_token = await paymentToken({
        invoiceID: invoice._id,
        cusID,
        total,
      });
      const nameOfService = `Đặt phòng`;
      //đẩy qua bên t3 để sử dụng voucher,bên fe post thẳng vào luồng này của be
      //Tổng tiền, id biên lai, id cus, token tồn tại trong 20m
      // const voucherResponse=await axios.post('/appvoucher',{
      //     token:payment_token,
      //     invoiceID: invoice._id,
      //     total,
      //     cusID,
      //     nameOfService
      // })

      // if(voucherResponse.status===200){

      invoice.isPaid = true;
      await invoice.save();

      foundRoom.isAvailable = false; //đổi trạng thái phòng thủ công(chưa theo ngày)
      await foundRoom.save();

      const receipt = await createReceipt(invoice._id);

      resolve({
        status: "OK",
        message: "Room booked successfully",
        data: { invoice, receipt },
      });
      // }
      // else {
      //     await Invoice.findByIdAndDelete(invoice._id)
      //     reject({
      //         status: 'BAD',
      //         message: 'Payment failed, please try again',
      //     })
      // }
    } catch (e) {
      console.error("Error in bookRoom:", e);
      if (e.status == "BAD" || e.status == 400) {
        await Invoice.findOneAndDelete(newInvoice._id);
      }
      reject({
        status: "BAD",
        message: "Internal server error",
      });
    }
  });
}
//xuất biên lai đi kèm với hàm trên
async function createReceipt(invoiceID) {
  try {
    const receipt = await Receipt.create({
      invoiceID,
      createDate: new Date(),
    });
    return receipt;
  } catch (e) {
    console.error("Error in createReceipt:", e);
  }
}
//cus yêu cầu được hủy phòng, gửi đến admin. Dùng token cus, id hóa đơn
async function reqCancelRoom(receiptID, cusID) {
  return new Promise(async (resolve, reject) => {
    try {
      const foundReceipt = await Receipt.findOne({
        _id: receiptID,
      });
      if (!foundReceipt) {
        reject({
          status: "BAD",
          message: "Cant find receipt - promise",
        });
      }
      const newReqCancelRoom = await reqCancel.create({
        dateReq: new Date(),
        cusID: cusID,
        receiptID: receiptID,
      });
      resolve({
        status: "OK",
        message: "Request cancel room sent to admin",
        data: newReqCancelRoom,
      });
    } catch (e) {
      console.error("Error in reqCancelRoom - promise:", e);
      reject(e + `rejects in promise`);
    }
  });
}
//trên fe cho click đồng ý => accept =true
//admin handle hủy phòng. ok => đổi trạng thái req, post qua app khác để hoàn tiền
//ko accept => đổi trạng thái req, trả về cho user

//T comment lại chứ cái này t không biết conflict j 
// async function handleCancelRoom(reqCancelID, adminID, accept) {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const foundReqCancel = await reqCancel.findOne({
//         _id: reqCancelID,
//       });
//       if (!foundReqCancel) {
//         reject({
//           status: "BAD",
//           message: `There's no reqCancel`,
//         });
//       }
//       const cusID=foundReqCancel.cusID
//       if (accept) {
//         try {
//             foundReqCancel.isAccept = "accepted";
//             foundReqCancel.adminID = adminID;
//             foundReqCancel.dateAccept = new Date();
//             await foundReqCancel.save();

// <<<<<<< main
//         }catch(e){
//             console.error('Error in handleCancelRoom - promise:', e);
//         }
//     })
// }
// //truyền token
//     function createHotel(newHotel,ownerID){
//         return new Promise(async(resolve,rejects)=>{
//             const{address,numberOfRooms,taxCode,companyName,nation,facilityName,businessType,scale,city,minPrice,imgUrl}=newHotel
//             try{
//                 console.log(ownerID)
//                 const checkExistedOwnerID=await Account.Account.findOne({
//                     _id:ownerID
//                 })
//                 if(!checkExistedOwnerID){
//                     return rejects({
//                         status:'BAD',
//                         message:'Owner ID does not exist'
//                     })
//                 }
//                 const createdHotel = await Hotel.Hotel.create({
//                     address,
//                     numberOfRooms,
//                     taxCode,
//                     companyName,
//                     nation,
//                     facilityName,
//                     businessType,
//                     scale,
//                     city,
//                     minPrice,
//                     imgUrl,
//                     ownerID
//                 });
//                 if(createdHotel){
//                     resolve({
//                     status: 'OK',
//                     message: 'Hotel created successfully',
//                     data: createdHotel
// =======
//             const refundResponse = await axios.post("/appThanhToan", {
//                 orderID: foundReqCancel.receiptID,
//             });
//             if (refundResponse.status === 200 || refundResponse.status === 201) {
//                 const newRefund = await refundMoney.create({
//                 dateRefund: new Date(),
//                 amountRefund: foundReqCancel.amount,
//                 cusID: cusID,
// >>>>>>> main
//                 });

//                 await newRefund.save();

//                 return resolve({
//                 status: "OK",
//                 message: "Refund for customer and change status",
//                 data: newRefund,
//                 });
//                 } else {
//                     //# 2 status trên
//                     return reject({
//                     status: "BAD",
//                     message: "Refund processing failed",
//                     });
//                 }
//         } catch (e) {
//           console.error("Error in processing refund:", e);
//         }
//         if (accept==false) {
//             try{
//                 foundReqCancel.isAccept = "rejected"
//                 foundReqCancel.adminID = adminID;
//                 await foundReqCancel.save();
    
//                 return resolve({
//                     status: "OK",
//                     message: "Not refund money to cus",
//                     data: foundReqCancel,
//                   });
//             }catch(e){
//                 console.error("Error in processing refund where accept==false:", e);
//             }
//         }
//       }
//     } catch (e) {
//       console.error("Error in handleCancelRoom - promise:", e);
//     }
//   });
// }
//truyền token
function createHotel(newHotel, ownerID) {
  return new Promise(async (resolve, rejects) => {
    const {
      address,
      numberOfRooms,
      taxCode,
      companyName,
      nation,
      facilityName,
      businessType,
      scale,
      city,
    } = newHotel;
    try {
      console.log(ownerID);
      const checkExistedOwnerID = await Account.Account.findOne({
        _id: ownerID,
      });
      if (!checkExistedOwnerID) {
        return rejects({
          status: "BAD",
          message: "Owner ID does not exist",
        });
      }
      const createdHotel = await Hotel.Hotel.create({
        address,
        numberOfRooms,
        taxCode,
        companyName,
        nation,
        facilityName,
        businessType,
        scale,
        city,
        ownerID,
      });
      if (createdHotel) {
        resolve({
          status: "OK",
          message: "Hotel created successfully",
          data: createdHotel,
        });
      }
    } catch (e) {
      rejects(e);
    }
  });
}

//truyền HotelID và token chủ nhà
const createRoom = async (newRoom, hotelID) => {
  return new Promise(async (resolve, reject) => {
    const { numberOfBeds, typeOfRoom, money, capacity } = newRoom;
    try {
      const createdRoom = await Hotel.Room.create({
        numberOfBeds,
        typeOfRoom,
        money,
        capacity,
        hotelID,
      });
      if (createdRoom) {
        const hotel = await Hotel.findById(hotelID);
        if (hotel) {
          if (hotel.minPrice === 0 || hotel.minPrice > money) {
            hotel.minPrice = money;
            await hotel.save();
          }
        }
        resolve({
          status: "OK",
          message: "Room created successfully",
          data: createdRoom,
        });
      }
    } catch (e) {
      console.error("Error in createRoom service:", e);
      reject(e);
    }
  });
};
//chỉ cần truyền token
const getHotelsByOwner = async (ownerID) => {
  try {
    return await Hotel.Hotel.find({ ownerID });
  } catch (e) {
    console.error("Error in getHotelsByOwner service:", e);
    throw e;
  }
};

const searchHotel = async (searchCriteria) => {
  const { city, checkInDate, checkOutDate, numberOfPeople } = searchCriteria;
  try {
    const hotelCity = await Hotel.Hotel.find({ city });

    const availableHotels = await Promise.all(
      hotelCity.map(async (h) => {
        const hotelRooms = await Hotel.Room.find({
          hotelID: h._id,
          capacity: { $gte: numberOfPeople }, //>= số ng dc nhập
        });
        if (hotelRooms.length > 0) {
          return {
            ...h._doc,
            rooms: hotelRooms,
          };
        } else return null;
      })
    );
    const filteredHotels = availableHotels.filter((hotel) => hotel !== null);


    return {
      status: "OK",
      message: "Find Hotel successfully",
      data: filteredHotels,
    };
  } catch (e) {
    console.error("There's no Hotel in your search place:", e);
  }
};

module.exports = {
  signUpOwner,
  createHotel,
  signInOwner,
  signUpCustomer,
  signInCustomer,
  createRoom,
  getHotelsByOwner,
  bookRoom,
  searchHotel,
  reqCancelRoom,
  // handleCancelRoom,
};

