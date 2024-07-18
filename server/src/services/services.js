
const Account=require('../models/signUp.model');
const Hotel=require('../models/hotel.model');
const { resolve } = require('path');
const { rejects } = require('assert');

function signUpOwner(newOwner){
    return new Promise(async (resolve,rejects)=>{
        const{name,passWord,email,birthDate,phoneNum,address,dueDatePCCC,dueDateKD}=newOwner
        try{
            const checkAccountExisted=await Account.findOne({
                email:email
            })
            if(checkAccountExisted!==null){
                resolve({
                    status:'BAD',
                    message:'Đã tồn tại email'
                })
            }
            const createdOwner=await Account.create({
                name,
                passWord,
                email,
                birthDate,
                phoneNum,
                address,
                dueDatePCCC,
                dueDateKD
            })
            if(createdOwner){
                resolve({
                    status:'OK',
                    message:'Succ',
                    data:createdOwner
                })
            }
        } catch(e){
            rejects(e)
        }
    })
}
function signInOwner(existedOwner){
    return new Promise(async(resolve,rejects)=>{
        const {email,passWord}=existedOwner
        try{
            const foundOwner= await Account.findOne({
                email:email
            })
            if(foundOwner==null){
                resolve({
                    status:'BAD',
                    message: 'You havent registed'
                })
            }
            if(foundOwner.passWord!=passWord){
                resolve({
                    status:'BAD',
                    message:'Wrong password'
                })
            }
            resolve({
                status:'OK',
                message:'Success log in',
                data:foundOwner
            })
        }catch(e){
            rejects(e)
        }
    })
}
function createHotel(newHotel){
    return new Promise(async(resolve,rejects)=>{
        const{address,numberOfRooms,taxCode,companyName,nation,facilityName,businessType,scale}=newHotel
        try{

            resolve({})
        } catch(e){
            rejects(e)
        }
    })
}
module.exports={
    signUpOwner,
    createHotel,
    signInOwner
}