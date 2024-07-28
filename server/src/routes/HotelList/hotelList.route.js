const express =require('express')
const ListRouter=express.Router()
const hotelListController=require('./hotelList.controller')
const Hotel = require('../../models/hotel.model')
const { authenToken } = require('../../services/jwt')

ListRouter.get('/',async(req,res)=>{
    try{
        const createdHotel=await Hotel.Hotel.find()
        res.status(200).json(createdHotel)
    }catch(e){
        res.status(500).json(e)
    }
})
//danh sách ksan có sẵn ko cần kiếm
ListRouter.post('/create',authenToken,hotelListController.createHotel)

//danh sách ksan phải tìm mới có
ListRouter.get('/search', hotelListController.searchHotel)
//danh sách khách sạn của 1 chủ nhà xác định bằng lần đăng nhập
ListRouter.get('/owner',authenToken,hotelListController.getHotelsByOwner)

//room
ListRouter.get('/room',async(req,res)=>{
    try{
        const createdRoom=await Hotel.Room.find()
        res.status(200).json(createdRoom)
    }catch(e){
        res.status(500).json(e)
    }
})
ListRouter.post('/createRoom',authenToken,hotelListController.createRoom)
module.exports=ListRouter