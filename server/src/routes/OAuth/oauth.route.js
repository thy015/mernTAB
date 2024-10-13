const express=require('express')
const router=express.Router()
const oauthController=require('./oauth.controller')
const {checkToken}=require('../../middleware/jwt')

router.post('/verify',checkToken,oauthController.verifyOAuthToken)

module.exports=router