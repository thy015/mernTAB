const express =require('express')
const Bookrouter=express.Router()

Bookrouter.get('/',(req,res)=>{
    res.send('Book Page')
})
module.exports=Bookrouter