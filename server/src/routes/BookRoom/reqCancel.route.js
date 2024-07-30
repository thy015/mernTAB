const express = require('express');
const reqCancelRouter = express.Router();
const reqCancelController=require('./reqCancel.controller');
const { authenCusToken, authenAdminToken } = require('../../services/jwt');
const services=require('../../services/services')
reqCancelRouter.get('/processing',reqCancelController.getReqCancelRoomProcess)
reqCancelRouter.get('/accepted',reqCancelController.getReqCancelRoomAccepted)
reqCancelRouter.get('/rejected',reqCancelController.getReqCancelRoomRejected)

reqCancelRouter.post('/cusSend',authenCusToken,reqCancelController.reqCancelRoom)
reqCancelRouter.post('/adminHandle',authenAdminToken,services.handleCancelRoom)
module.exports=reqCancelRouter
