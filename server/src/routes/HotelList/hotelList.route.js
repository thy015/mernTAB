const express = require("express");
const ListRouter = express.Router();
const hotelListController = require("./hotelList.controller");
const {Hotel,Room} = require("../../models/hotel.model");

ListRouter.get("/hotel", async (req, res) => {
  try {
    const createdHotel = await Hotel.find();
    return res.status(200).json(createdHotel);
  } catch (e) {
    return res.status(500).json(e);
  }
});

ListRouter.get("/hotel/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }
    return res.json(hotel);
  } catch (error) {
    return res.status(500).json({ message: error.message }); 
  }
});


ListRouter.get("/hotel/:id/room", async (req, res) => {
  try {
    const hotelID = req.params.id;
    if (!hotelID) {
      return res.status(400).json({ message: "hotelID is required" });
    }
    const rooms = await Room.find({hotelID:hotelID});
    return res.status(200).json(rooms);
  } catch (e) {
    return res.status(500).json(e);
  }
});

ListRouter.get("/room", async (req, res) => {
  try {
    const { hotelID } = req.query;
    if (!hotelID) {
      return res.status(400).json({ message: "hotelID is required" });
    }

    const rooms = await Room.find({ hotelID: hotelID });
    return res.status(200).json(rooms); 
  } catch (e) {
    return res.status(500).json(e); 
  }
});

// search hotel
ListRouter.post('/query',hotelListController.queryHotel)
ListRouter.post("/createHotel", hotelListController.createHotel);
ListRouter.post("/updateHotel/:id", hotelListController.updateHotels);
// all hotel from owner that logged in
ListRouter.get(
  "/hotelOwner",
  hotelListController.getHotelsByOwner
);

ListRouter.post("/createRoom", hotelListController.createRoom);

module.exports = ListRouter;
