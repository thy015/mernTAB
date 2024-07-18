const mongoose=require('mongoose')
const signUpSchema=new mongoose.Schema(
    {
        name:{type:String,required:true},
        passWord:{type:String,required:true},
        isUse:{type:String,required:true,default:'owner'},
        email:{type:String,required:true,unique:true},
        birthDate:{type:String,required:true},
        phoneNum:{type:String,required:true},
        address:{type:String,required:true},
        dueDateKD:{type:Date,required:true},
        dueDatePCCC:{type:Date,required:true},
    }
)
const Account=mongoose.model('Account',signUpSchema)
module.exports=Account