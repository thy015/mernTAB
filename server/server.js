const PORT=process.env.PORT || 4000;
const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv')
const bodyParser=require('body-parser')
dotenv.config()
const app=express();
const mongoose=require('mongoose')
const http=require('http');
const HomeRouter = require('./src/routes/Home/home.route');
const DetailRouter = require('./src/routes/HotelDetail/detail.route');
const HotelListRouter=require('./src/routes/HotelList/hotelList.route');
const signUpCusRouter = require('./src/routes/signUp/signUpCus.route');
const signUprouter = require('./src/routes/signUp/signUp.route');
const bookRouter = require('./src/routes/BookRoom/book.route');
const reqCancelRouter=require('./src/routes/BookRoom/reqCancel.route')
//always put first
app.use(bodyParser.json());

app.use(cors({
    origin:process.env.CLIENT_ORIGIN || 'http://localhost:3000'
}))
app.use('/home',HomeRouter)
app.use('/detail',DetailRouter)
app.use('/hotelList',HotelListRouter)
app.use('/signUp',signUprouter)
app.use('/signUpCus',signUpCusRouter)
app.use('/book',bookRouter)
app.use('/reqCancel',reqCancelRouter)
//mongo connect
mongoose.connect(`mongodb+srv://thymai1510:${process.env.MONGO_DB}@cluster0.ibhghsi.mongodb.net/?appName=Cluster0`)
.then(()=>{
    console.log('Connect successfully')
})
.catch((err)=>{
    console.log(err)
})

app.use(express.static('public'))

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
const server=http.createServer(app);

server.listen(PORT,()=>{
    console.log(`Now stream on ${PORT}`);
});