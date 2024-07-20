const express = require('express');
const roomTestController = require('./bookRoom.controller');
const roomTestRouter = express.Router();
const RoomT = require('../../models/roomTest.model')

roomTestRouter.get('/', async (req, res) => {
    try {
        const rooms = await RoomT.find();
        res.status(200).json(rooms);
    } catch (e) {
        res.status(500).json(e);
    }
});
roomTestRouter.post('/', roomTestController.createRoomT);

module.exports = roomTestRouter;
