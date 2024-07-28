const express = require('express');
const reqCancelRouter = express.Router();
const reqCancelController=require('./reqCancel.controller');
const { authenCusToken, authenAdminToken } = require('../../services/jwt');

reqCancelRouter.post('/cusSend',authenCusToken,reqCancelController.reqCancelRoom)
reqCancelRouter.get('/',reqCancelController.getReqCancelRoomProcess)
reqCancelRouter.post('/adminHandle',authenAdminToken,reqCancelController.handleReqCancelRoom)
module.exports=reqCancelRouter
