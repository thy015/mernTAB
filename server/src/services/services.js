
const Account=require('../models/signUp.model');
const Customer=require('../models/customer.model');
const Hotel=require('../models/hotel.model');

const Room = require('../models/hotel.model').Room;
const Receipt = require('../models/receipt.model');
const RoomT = require('../models/roomTest.model');
const { resolve } = require('path');
const { rejects } = require('assert');

const { generalAccessTokens, refreshAccessTokens } = require('./jwt');
const { search } = require('../routes/BookRoom/book.route');

function signUpOwner(newOwner){
    return new Promise(async (resolve,rejects)=>{
        const{name,passWord,email,birthDate,phoneNum,address,dueDatePCCC,dueDateKD}=newOwner
        try{
            const checkAccountExisted=await Account.findOne({
                email:email
            })
            if(checkAccountExisted!==null){
                resolve({
                    status:'BAD',
                    message:'Đã tồn tại email'
                })
            }
            const createdOwner=await Account.create({
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

function signInOwner(existedOwner){
    return new Promise(async(resolve,rejects)=>{
        const {email,passWord}=existedOwner
        try{
            const foundOwner= await Account.findOne({
                email:email
            })
            if(foundOwner==null){
                resolve({
                    status:'BAD',
                    message: 'You havent registed'
                })
            }
            if(foundOwner.passWord!=passWord){
                resolve({
                    status:'BAD',
                    message:'Wrong password'
                })
            }
            const access_token=await generalAccessTokens({
                id:foundOwner._id,
                isUse:foundOwner.isUse
            })
            const refresh_token=await refreshAccessTokens({
                id:foundOwner._id,
                isUse:foundOwner.isUse
            })

            resolve({
                status:'OK',
                message:'Success log in',
                access_token: access_token,
                refresh_token: refresh_token,
                ownerID: foundOwner._id
            })
        }catch(e){
            rejects(e)
        }
    })
}
function signUpCustomer(newCustomer){
    return new Promise(async(resolve,rejects)=>{
        const{nameCus,phoneNum}=newCustomer
        try{
            const checkCustomerExisted=await Customer.findOne({
                phoneNum:phoneNum
            })
            if(checkCustomerExisted!==null){
                resolve({
                    status:'BAD',
                    message:'Đã tồn tại khách hàng'
                })
            }
            const createCustomer= await Customer.create({
                nameCus,
                phoneNum
            })
            if(createCustomer){
                resolve({
                    status:'OK',
                    message:'Succ',
                    data:createdCustomer
                })
            }
        }catch(e){
            rejects(e)
        }
    })
}
function signInCustomer(existedCustomer){
    return new Promise(async(resolve,rejects)=>{
        const {nameCus,phoneNum}=existedCustomer
        try{
            const foundCustomer=await Customer.findOne({
                phoneNum:phoneNum
            })
            if(foundCustomer==null){
                resolve({
                    status:'BAD',
                    message: 'You havent registed'
                })
            }
            resolve({
                status:'OK',
                message:'Success log in',
            })
        }catch(e){
            rejects(e)
        }
    })
}

//chưa xử lý, room ảo
function bookRoomT(newReceipt, cusID, roomTID) {
    return new Promise(async (resolve, reject) => {
        const { total, paymentMethod } = newReceipt;
        try {
            const customer = await Customer.findById(cusID);
            if (!customer) {
                return reject({
                    status: 'BAD',
                    message: 'Customer not found'
                });
            }

            const room = await RoomT.findById(roomTID);
            if (!room) {
                return reject({
                    status: 'BAD',
                    message: 'Room not found'
                });
            }

            if (!room.isAvailable) {
                return reject({
                    status: 'BAD',
                    message: 'Room is not available'
                });
            }

            const receipt = await Receipt.create({
                cusID,
                roomID: roomTID,
                total,
                //ko truyền status
                paymentMethod,
                createDate: new Date()
            });

            room.isAvailable = false;
            await room.save();

            resolve({
                status: 'OK',
                message: 'Room booked successfully',
                data: receipt
            });
        } catch (e) {
            reject(e);
        }
    });
}
function bookRoom(){
    return new Promise(async(resolve,reject)=>{
        try{
            resolve({})
        }catch(e){
            reject(e)
        }
    })
}
//phải nhập id chủ nhà
function createHotel(newHotel,ownerID){
    return new Promise(async(resolve,rejects)=>{
        const{address,numberOfRooms,taxCode,companyName,nation,facilityName,businessType,scale,city}=newHotel
        try{
            console.log(ownerID)
            const checkExistedOwnerID=await Account.findOne({
                _id:ownerID
            })
            if(!checkExistedOwnerID){
                return rejects({
                    status:'BAD',
                    message:'Owner ID does not exist'
                })
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
                ownerID
            });
            if(createdHotel){
                resolve({
                status: 'OK',
                message: 'Hotel created successfully',
                data: createdHotel
            });
            }
        } catch(e){
            rejects(e)
        }
    })
}
//truyền HotelID và token chủ nhà
const createRoom = async (newRoom, hotelID) => {
    return new Promise(async (resolve, reject) => {
        const { numberOfBeds, typeOfRoom, money,capacity } = newRoom;
        try {
            const createdRoom = await Hotel.Room.create({
                numberOfBeds,
                typeOfRoom,
                money,
                capacity,
                hotelID
            });
            if (createdRoom) {
                resolve({
                    status: 'OK',
                    message: 'Room created successfully',
                    data: createdRoom
                });
            }
        } catch (e) {
            console.error("Error in createRoom service:", e);
            reject(e);
        }
    });
}
//chỉ cần truyền token
const getHotelsByOwner = async (ownerID) => {
    try {
        return await Hotel.Hotel.find({ ownerID });
    } catch (e) {
        console.error("Error in getHotelsByOwner service:", e);
        throw e;
    }
};

const searchHotel=async(searchCriteria)=>{
    const {city, checkInDate, checkOutDate, numberOfPeople}=searchCriteria
    try{
        const hotelCity=await Hotel.Hotel.find({city})

        const availableHotels= await Promise.all(
            hotelCity.map(async(h)=>{
                const hotelRooms = await Hotel.Room.find({
                    hotelID:h._id,
                    capacity:{ $gte: numberOfPeople } //>= số ng dc nhập
                })
                if (hotelRooms.length > 0) {
                    return {
                        ...h._doc,
                        rooms: hotelRooms
                    };
                } else return null;
            }))
        const filteredHotels=availableHotels.filter(hotel=>hotel!==null)

        return {
            status: 'OK',
            message: 'Find Hotel successfully',
            data: filteredHotels
        };
    }
    catch(e){
        console.error("There's no Hotel in your search place:", e);
    }
}



///Phòng giả
function createRoomT(newRoomT){
    return new Promise(async(resolve,rejects)=>{
        const{numberOfBeds,typeOfRoom,money,revenue}=newRoomT
        try{
            
            const createdRoomT = await RoomT.create({
                numberOfBeds,typeOfRoom,money,revenue
            });
            if(createdHotel){
                resolve({
                status: 'OK',
                message: 'Room created successfully',
                data: createdRoomT
            });
            }
        } catch(e){
            rejects(e)
        }
    })

}
module.exports={
    signUpOwner,
    createHotel,
    signInOwner,
    signUpCustomer,
    signInCustomer,
    createRoom,
    getHotelsByOwner,
    bookRoomT,
    createRoomT,
    bookRoom,
    searchHotel
}