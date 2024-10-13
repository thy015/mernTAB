const express = require('express');
const reqCancelRouter = express.Router();
const reqCancelController=require('./cancelReq.controller');


reqCancelRouter.get('/processing',reqCancelController.getReqCancelRoomProcess)
reqCancelRouter.get('/accepted',reqCancelController.getReqCancelRoomAccepted)
reqCancelRouter.get('/rejected',reqCancelController.getReqCancelRoomRejected)

reqCancelRouter.post('/cusSend',reqCancelController.reqCancelRoom)
//reqCancelRouter.post('/admin/accept/:reqCancelID',authenAdminToken,reqCancelController.handleCancelRoomAccept)
//reqCancelRouter.post('/admin/reject/:reqCancelID',authenAdminToken,reqCancelController.handleCancelRoomReject)
reqCancelRouter.post('/admin/accept/:reqCancelID',reqCancelController.handleCancelRoomAccept)
reqCancelRouter.post('/admin/reject/:reqCancelID',reqCancelController.handleCancelRoomReject)
module.exports=reqCancelRouter
