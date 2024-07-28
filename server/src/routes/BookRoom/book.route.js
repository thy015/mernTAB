const express = require('express');
const bookController=require('./bookRoom.controller');
const {authenCusToken } = require('../../services/jwt');
const bookRouter = express.Router();

bookRouter.get('/', bookController.getInvoicesWithReceipts);

bookRouter.post('/bookRoom',authenCusToken, bookController.bookRoom);
module.exports = bookRouter;
