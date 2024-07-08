const express=require('express');
const cors=require('cors');
const HomeRouter = require('./routes/home/home.route');
const DetailRouter = require('./routes/HotelDetail/detail.route');
const ListRouter = require('./routes/HotelList/list.route');
const SignUprouter = require('./routes/signUp/signUp.route');
const Bookrouter=require('./routes/BookRoom/book.route')
const app=express();

//router
app.use('/',HomeRouter)
app.use('/detail',DetailRouter)
app.use('/list',ListRouter)
app.use('/signUp',SignUprouter)
app.use('/book',Bookrouter)

app.use(express.static('public'))


module.exports=app