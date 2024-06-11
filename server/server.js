const PORT=process.env.PORT||4000;
const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('Hello world')
})
app.listen(PORT,()=>{
    console.log(`listening on http://localhost:${PORT}`);
})
