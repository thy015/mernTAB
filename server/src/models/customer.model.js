const mongoose=require('mongoose')
const CustomerSchema=new mongoose.Schema(
    {
        nameCus:{type:String,require:true},
        sđt:{type:String,require:true}
    }
)
const Customer=mongoose.model('Receipt',CustomerSchema)
module.exports=Customer