const express=require('express');
const cors=require('cors');
const HomeRouter = require('./routes/home/home.route');
const app=express();

//router
app.use('/',HomeRouter)

app.use(express.static('public'))
app.set('views','./views')
app.set('view engine', 'pug')

app.get('/product',(req,res)=>{
    res.send('<h1>Product</h1>')
})



module.exports=app