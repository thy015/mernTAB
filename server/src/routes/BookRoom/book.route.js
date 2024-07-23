const express = require('express');
const bookController=require('./bookRoom.controller');
const { Invoice } = require('../../models/invoice.model');
const bookRouter = express.Router();

bookRouter.get('/', async (req, res) => {
    try {
        const bookRoom = await Invoice.find();
        res.status(200).json(bookRoom);
    } catch (e) {
        res.status(500).json(e);
    }
});

bookRouter.post('/bookRoom', bookController.bookRoom);
module.exports = bookRouter;
