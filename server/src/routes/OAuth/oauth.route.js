const express=require('express')
const router=express.Router()
const {verifyOAuthToken}=require('./oauth.controller')
const {readToken} =require('../../middleware/jwt')

router.post('/verify',readToken,verifyOAuthToken)
router.get('/delete-cookie',(req,res)=>{
    res.clearCookie('authToken')
    res.send('Cookie has been deleted')
})
module.exports=router