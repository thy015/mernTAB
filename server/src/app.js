const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv')
const bodyParser=require('body-parser')
dotenv.config()
const HomeRouter = require('./routes/home/home.route');
const DetailRouter = require('./routes/HotelDetail/detail.route');
const HotelListRouter = require('./routes/HotelList/hotelList.route')
const SignUprouter = require('./routes/signUp/signUp.route');
const signUpCusRouter = require('./routes/signUp/signUpCus.route');
const Bookrouter=require('./routes/BookRoom/book.route')
const RoomTrouter=require('./routes/BookRoom/roomT.route')
const mongoose=require('mongoose')
const app=express();
//always put first
app.use(bodyParser.json());

app.use(cors({
    origin:'http://localhost:3000'
}))
//router
app.use('/home',HomeRouter)
app.use('/detail',DetailRouter)
app.use('/hotelList',HotelListRouter)
app.use('/signUp',SignUprouter)
app.use('/signUpCus',signUpCusRouter)
app.use('/book',Bookrouter)
app.use('/testAddRoom',RoomTrouter)
//mongo connect
mongoose.connect(`mongodb+srv://thymai1510:${process.env.MONGO_DB}@cluster0.ibhghsi.mongodb.net/?appName=Cluster0`)
.then(()=>{
    console.log('Connect successfully')
})
.catch((err)=>{
    console.log(err)
})

app.use(express.static('public'))


module.exports=app