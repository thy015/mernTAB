const express = require('express');
const bookController=require('./bookRoom.controller');
const bookRouter = express.Router();

bookRouter.get('/', bookController.getInvoicesWithReceipts);

bookRouter.post('/bookRoom', bookController.bookRoom);
module.exports = bookRouter;
