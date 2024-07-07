const express=require('express');
const cors=require('cors')
const app=express();

app.set('views','./views')
app.set('view engine', 'pug')
app.get('/',(req,res)=>{
    res.render('index.pug')
})

app.get('/',(req,res)=>{
    res.send(
    '<h1>Something</h1>'
);
})

module.exports=app