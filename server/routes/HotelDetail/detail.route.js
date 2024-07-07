const express =require('express')
const DetailRouter=express.Router()

DetailRouter.get('/',(req,res)=>{
    res.send('Detail Page')
})
module.exports=DetailRouter