const express =require('express')
const SignUprouter=express.Router()

SignUprouter.get('/',(req,res)=>{
    res.send('SignUp Page')
})
module.exports=SignUprouter