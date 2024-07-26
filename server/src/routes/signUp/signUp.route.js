const express =require('express')
const signUpController=require('./signUp.controller')
const signUprouter=express.Router()
const Account=require('../../models/signUp.model')

signUprouter.get('/', async(req, res) => {
    try{
      const RegOwner=await Account.find()
      res.status(200).json(RegOwner)
    }catch(e){
      res.status(500).json(e);
    }
  });

signUprouter.post('/create', signUpController.signUpOwner);
signUprouter.post('/signIn', signUpController.signInOwner);

module.exports=signUprouter