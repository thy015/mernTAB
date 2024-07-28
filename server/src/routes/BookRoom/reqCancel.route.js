const express = require('express');
const reqCancelRouter = express.Router();
const reqCancelController=require('./reqCancel.controller');
const { authenCusToken } = require('../../services/jwt');

reqCancelRouter.post('/cusSend',authenCusToken,reqCancelController.reqCancelRoom)
reqCancelRouter.get('/',reqCancelController.getReqCancelRoomProcess)
module.exports=reqCancelRouter
