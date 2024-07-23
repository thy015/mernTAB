const express =require('express')
const HomeRouter=express.Router()
const path=require('path')

HomeRouter.get('/',(req,res)=>{
    res.send('Hi')
})
module.exports=HomeRouter