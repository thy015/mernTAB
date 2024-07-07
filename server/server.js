const PORT=4000;
const app=require('./app')
const http=require('http')

const server=http.createServer(app);

server.listen(PORT,()=>{
    console.log(`Now stream on ${PORT}`);
});