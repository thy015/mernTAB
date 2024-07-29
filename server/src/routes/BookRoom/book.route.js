const express = require('express');
const bookController=require('./bookRoom.controller');
const {authenCusToken } = require('../../services/jwt');
const bookRouter = express.Router();
const services=require('../../services/services')
bookRouter.get('/', bookController.getInvoicesWithReceipts);

bookRouter.post('/bookRoom',authenCusToken, bookController.bookRoom);
bookRouter.post('/completedTran/:id',services.completedTran)
module.exports = bookRouter;
