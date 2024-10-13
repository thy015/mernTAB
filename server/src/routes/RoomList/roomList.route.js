const express = require("express");
const ListRouter = express.Router();
const Hotel = require("../../models/hotel.model");


ListRouter.get("/rooms", async (req, res) => {
  try {
    const rooms = await Hotel.Room.find();
    return res.status(200).json(rooms);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
});

ListRouter.get("/rooms/:_id", async (req, res) => {
  try {
    const hotel = await Hotel.Room.findById(req.params._id);
    if (!hotel) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.json(hotel);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
ListRouter.get("/hotels/:hotelId/rooms", async (req, res) => {
  try {
      const rooms = await Hotel.Room.find({ hotelID: req.params.hotelId });
      return res.status(200).json(rooms);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
});

module.exports = ListRouter;
