
const PORT=process.env.PORT || 4000;
const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv')
const bodyParser=require('body-parser')
dotenv.config()
const app=express();
const mongoose=require('mongoose')
const morgan=require('morgan')
const http=require('http');
const HomeRouter = require('./src/routes/Home/home.route');
const DetailRouter = require('./src/routes/HotelDetail/detail.route');
const HotelListRouter = require('./src/routes/HotelList/hotelList.route');
const signUpCusRouter = require('./src/routes/signUp/signUpCus.route');
const signUpRouter = require('./src/routes/signUp/signUp.route');
const bookRouter = require('./src/routes/BookRoom/book.route');

const reqCancelRouter=require('./src/routes/BookRoom/reqCancel.route')
//always put first



const videoRoutes = require('./src/routes/Upload/video')

// Cấu hình middleware

app.use(bodyParser.json());

app.use(morgan("combined"))

app.use("/videos", videoRoutes)
app.use(cors({
    origin:process.env.CLIENT_ORIGIN || 'http://localhost:3000'
}))
app.use('/home',HomeRouter)
app.use('/detail',DetailRouter)
app.use('/hotelList',HotelListRouter)
app.use('/signUp',signUpRouter)
app.use('/signUpCus',signUpCusRouter)
app.use('/book',bookRouter)
app.use('/reqCancel',reqCancelRouter)
//mongo connect

mongoose.connect(`mongodb+srv://thymai1510:${process.env.MONGO_DB}@cluster0.ibhghsi.mongodb.net/?appName=Cluster0`)
  .then(() => {
    console.log('Connect successfully');
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.static('public'));

// Xử lý lỗi
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Now streaming on ${PORT}`);
});
