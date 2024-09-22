const express = require("express");
const ListRouter = express.Router();
const hotelListController = require("./hotelList.controller");
const {Hotel,Room} = require("../../models/hotel.model");
const { authenToken } = require("../../services/jwt");

ListRouter.get("/hotel", async (req, res) => {
  try {
    const createdHotel = await Hotel.find();
    res.status(200).json(createdHotel);
  } catch (e) {
    res.status(500).json(e);
  }
});

ListRouter.get("/hotel/:_id", async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params._id);
    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }
    res.json(hotel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

ListRouter.post("/createHotel", authenToken, hotelListController.createHotel);
ListRouter.get("/criteriaSearch", hotelListController.searchRoom);
// all hotel from owner that logged in
ListRouter.get(
  "/hotelOwner",
  authenToken,
  hotelListController.getHotelsByOwner
);

ListRouter.get("/rooms/hotel/:hotelID", async (req, res) => {
  try {
    const { hotelID } = req.params;

    if (!hotelID) {
      return res.status(400).json({ message: "hotelID is required" });
    }

    const rooms = await Room.find({ hotelID: hotelID });

    if (rooms.length === 0) {
      return res.status(404).json({ message: "No rooms found for this hotel" });
    }

    res.status(200).json(rooms);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

ListRouter.post("/createRoom", authenToken, hotelListController.createRoom);

module.exports = ListRouter;
