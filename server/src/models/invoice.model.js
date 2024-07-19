const mongoose=require('mongoose')
const InvoiceSchema=new mongoose.Schema(
    {
        receiptID:{type:mongoose.Schema.ObjectId,ref:'Receipt',required:true},
        createDate:{type:Date,required:true}
    }
)
const Invoice=mongoose.model('Invoice',InvoiceSchema)
module.exports=Invoice