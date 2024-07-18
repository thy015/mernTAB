const mongoose=require('mongoose')
const InvoiceSchema=new mongoose.Schema(
    {
        receiptID:{type:mongoose.Schema.ObjectId,ref:'Receipt',require:true},
        createDate:{type:Date,require:true}
    }
)
const Invoice=mongoose.model('Invoice',InvoiceSchema)
module.exports=Invoice