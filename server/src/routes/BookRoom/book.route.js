const express = require('express');
const bookController=require('./bookRoom.controller');
const { authenToken } = require('../../services/jwt');
const bookRouter = express.Router();

bookRouter.get('/', bookController.getInvoicesWithReceipts);

bookRouter.post('/bookRoom',authenToken, bookController.bookRoom);
module.exports = bookRouter;
