const express =require('express')
const DetailRouter=express.Router()
const Hotel = require('../../models/hotel.model')

DetailRouter.get('/:_id', async (req,res)=>{
    try {
        const hotel = await Hotel.Hotel.findById(req.params._id) 
        if (!hotel) {
            return res.status(404).json({ message: 'Hotel not found' })
        }
        res.json(hotel);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
module.exports=DetailRouter