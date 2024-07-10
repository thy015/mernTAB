const express =require('express')
const signUpController=require('./signUp.controller')
const signUprouter=express.Router()

signUprouter.get('/', (req, res) => {
    res.send(`signUpPage`);
  });

signUprouter.post('/', signUpController.signUpOwner);

module.exports=signUprouter