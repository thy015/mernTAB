const mongoose =require('mongoose')
//processing, accepted, rejected
const reqCancelSchema=mongoose.Schema({
    isAccept:{type:String,default:'processing'},
    dateReq:{type:Date,default:Date.now(),required:true},
    dateAccept:{type:Date},
    cusID:{type:mongoose.Schema.ObjectId,ref:'Customer',required:true},
    adminID:{type:mongoose.Schema.ObjectId,ref:'Admin',required:false},
    receiptID:{type:mongoose.Schema.ObjectId,ref:'Receipt',required:true}
});
const reqCancel=mongoose.model('reqCancel',reqCancelSchema);


module.exports={
    reqCancel
}