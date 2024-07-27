const mongoose=require('mongoose')
const ownerSchema=new mongoose.Schema(
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
const cusSchema=new mongoose.Schema(
    {
        name:{type:String,required:true},
        passWord:{type:String,required:true},
        isUse:{type:String,required:true,default:'user'},
        email:{type:String,required:true,unique:true},
        birthDate:{type:String,required:true},
        phoneNum:{type:String,required:true}
    }
)

const Account=mongoose.model('Account',ownerSchema)
const Customer=mongoose.model('Customer',cusSchema)
//kết nối với db có sẵn chứ ko cho tạo
const Admin=mongoose.connection.collection('Admin')
module.exports={
    Account,
    Customer,
    Admin
}