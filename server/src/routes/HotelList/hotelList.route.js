const express =require('express')
const ListRouter=express.Router()
const hotelListController=require('./hotelList.controller')
const Hotel = require('../../models/hotel.model')
ListRouter.get('/',async(req,res)=>{
    try{
        const createdHotel=await Hotel.Hotel.find()
        res.status(200).json(createdHotel)
    }catch(e){
        res.status(500).json(e)
    }
})

ListRouter.post('/',hotelListController.createHotel)
module.exports=ListRouter