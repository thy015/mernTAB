const express=require('express');
const cors=require('cors');
const HomeRouter = require('./routes/home/home.route');
const DetailRouter = require('./routes/HotelDetail/detail.route');
const ListRouter = require('./routes/HotelList/list.route');
const app=express();

//router
app.use('/',HomeRouter)
app.use('/detail',DetailRouter)
app.use('/list',ListRouter)


app.use(express.static('public'))


module.exports=app