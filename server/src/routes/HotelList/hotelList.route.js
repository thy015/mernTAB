const express = require('express');
const ListRouter = express.Router();
const hotelListController = require('./hotelList.controller');
const Hotel = require('../../models/hotel.model');
const { authenToken } = require('../../services/jwt');

ListRouter.get('/', async (req, res) => {
  try {
    const createdHotel = await Hotel.Hotel.find();
    res.status(200).json(createdHotel);
  } catch (e) {
    res.status(500).json(e);
  }
});

ListRouter.post('/create', authenToken, hotelListController.createHotel);
ListRouter.get('/search', hotelListController.searchHotel);
ListRouter.get('/owner', authenToken, hotelListController.getHotelsByOwner);

ListRouter.get('/rooms', async (req, res) => { 
  try {
    const { hotelID } = req.query;
    if (!hotelID) {
      return res.status(400).json({ message: "hotelID is required" });
    }
    
    const rooms = await Hotel.Room.find({ hotel: hotelID });
  } catch (e) {
    res.status(500).json(e);
  }
});


ListRouter.post('/createRoom', authenToken, hotelListController.createRoom);

module.exports = ListRouter;
