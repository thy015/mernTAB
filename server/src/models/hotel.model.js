const mongoose =require('mongoose')
const hotelSchema =new mongoose.Schema(
    {
        address: { type: String, required: true },
        numberOfRooms: { type: Number, required: true },
        taxCode: { type: String, required: true },
        companyName: { type: String, required: true },
        nation: { type: String, required: true },
        facilityName: { type: String, required: true },
        businessType: { type: String, required: true },
        scale: { type: String, required: true },
        ownerID:{type:mongoose.Schema.ObjectId,ref:'Account',require:true}
    }
)
const Hotel=mongoose.model('Hotel',hotelSchema)
module.exports=Hotel