const express = require('express');
const bookController=require('./bookRoom.controller')
const bookRouter = express.Router();

bookRouter.get('/', async (req, res) => {
    try {
        const bookRoom = await Receipt.find();
        res.status(200).json(bookRoom);
    } catch (e) {
        res.status(500).json(e);
    }
});
bookRouter.post('/', bookController.bookRoomT);

module.exports = bookRouter;
