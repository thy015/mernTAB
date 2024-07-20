const mongoose=require('mongoose')
const ReceiptSchema=new mongoose.Schema(
    {
        createDate:{type:Date,required:true, default: Date.now },
        total:{type:Number,required:true},
        paymentMethod:{type:String},
        status:{type:Boolean,required:true,default:false},
        cusID:{type:mongoose.Schema.ObjectId,ref:'Customer',required:true},
        roomID:{type:mongoose.Schema.ObjectId,ref:'Room',required:true}
    }
)
const Receipt=mongoose.model('Receipt',ReceiptSchema)
module.exports=Receipt