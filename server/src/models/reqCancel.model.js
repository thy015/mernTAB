const mongoose =require('mongoose')

const reqCancelSchema=mongoose.Schema({
    isAccept:{type:Boolean,default:false},
    dateReq:{type:Date,default:Date.now(),required:true},
    dateAccept:{type:Date},
    cusID:{type:mongoose.Schema.ObjectId,ref:'Customer',required:true},
    adminID:{type:mongoose.Schema.ObjectId,ref:'Admin',required:true},
    receiptID:{type:mongoose.Schema.ObjectId,ref:'Receipt',required:true}
})
const reqCancel=require('reqCancel',reqCancelSchema)


module.exports={
    reqCancel
}