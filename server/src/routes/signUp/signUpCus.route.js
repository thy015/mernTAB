const express =require('express')
const signUpController=require('./signUpCus.controller')
const signUpCusRouter=express.Router()

signUpCusRouter.post('/create', signUpController.signUpCustomer);

signUpCusRouter.post('/signInCus',signUpController.signInCustomer)
module.exports = signUpCusRouter