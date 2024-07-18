const express =require('express')
const signUpController=require('./signUpCus.controller')
const signUpCusRouter=express.Router()
const Customer=require('../../models/customer.model')
signUpCusRouter.get('/', async(req, res) => {
    try{
      const RegCus=await Customer.find()
      res.status(200).json(RegCus)
    }catch(e){
      res.status(500).json(e);
    }
  });

  signUpCusRouter.post('/', signUpController.signUpCustomer);
  signUpCusRouter.post('/signInCus', signUpController.signInCustomer);
module.exports = signUpCusRouter