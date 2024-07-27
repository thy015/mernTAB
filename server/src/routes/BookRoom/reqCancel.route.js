const express = require('express');
const router = express.Router();
const reqCancelController=require('./reqCancel.controller');
const { authenToken } = require('../../services/jwt');

router.post('/cusSend',authenToken,reqCancelController.reqCancelRoom)
router.get('/',reqCancelController.getReqCancelRoomProcess)
