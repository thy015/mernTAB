const express =require('express')
const HomeRouter=express.Router()

HomeRouter.get('/',(req,res)=>{
    res.send('Home Page')
})
module.exports=HomeRouter