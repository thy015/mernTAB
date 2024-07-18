const mongoose=require('mongoose')
const CustomerSchema=new mongoose.Schema(
    {
        nameCus:{type:String,require:true},
        phoneNum:{type:String,require:true}
    }
)
const Customer=mongoose.model('Customer',CustomerSchema)
module.exports=Customer