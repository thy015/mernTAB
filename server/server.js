const PORT=process.env.PORT||4000;
const express=require('express');
const cors=require('cors')
const app=express();

app.use(cors())
app.get('/home',(req,res)=>{
    res.send('Hello world')
})
app.listen(PORT,()=>{
    console.log(`listening on http://localhost:${PORT}`);
})
