const mongoose=require('mongoose')
const ReceiptSchema=new mongoose.Schema(
    {
        createDate:{type:Date,require:true},
        total:{type:Number,require:true},
        paymetMethod:{type:String},
        status:{type:Boolean,require:true,default:false},
        cusID:{type:mongoose.Schema.ObjectId,ref:'Customer',require:true},
        roomID:{type:mongoose.Schema.ObjectId,ref:'Room',require:true}
    }
)
const Receipt=mongoose.model('Receipt',ReceiptSchema)
module.exports=Receipt