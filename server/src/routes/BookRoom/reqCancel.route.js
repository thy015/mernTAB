const express = require('express');
const reqCancelRouter = express.Router();
const reqCancelController=require('./reqCancel.controller');
const { authenCusToken, authenAdminToken } = require('../../services/jwt');

reqCancelRouter.get('/processing',reqCancelController.getReqCancelRoomProcess)
reqCancelRouter.get('/accepted',reqCancelController.getReqCancelRoomAccepted)
reqCancelRouter.get('/rejected',reqCancelController.getReqCancelRoomRejected)

reqCancelRouter.post('/cusSend',authenCusToken,reqCancelController.reqCancelRoom)
reqCancelRouter.post('/adminHandle',authenAdminToken,reqCancelController.handleReqCancelRoom)
module.exports=reqCancelRouter
