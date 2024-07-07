const express =require('express')
const HomeRouter=express.Router()
const path=require('path')

HomeRouter.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '..','..', 'public', 'index.html'));
})
module.exports=HomeRouter