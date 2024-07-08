const express =require('express')
const ListRouter=express.Router()

ListRouter.get('/',(req,res)=>{
    res.send('List Hotel Page')
})
module.exports=ListRouter