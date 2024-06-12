const PORT=process.env.PORT||4000;
const express=require('express');
const cors=require('cors')
const app=express();
const path=require('path')
app.use(cors())
app.get('/home',(req,res)=>{
    res.status(200).send('Hello baby')
})

// app.use(express(json()))
// app.use(express.static(path.join(__dirname,'.',public)))
app.use(express.static('client/build'))
app.get('*',(res,req)=>{
    res.sendFile(path.join(__dirname,'.','public','index.html'));
})
app.listen(PORT,()=>{
    console.log(`listening on http://localhost:${PORT}`);
})
