const hotelService=require('../../services/services')
const createHotel=async(req,res)=>{
    try{
        console.log(req.body)
        const {address,numberOfRooms,taxCode,companyName,nation,facilityName,businessType,scale}=req.body
        if(!address || !numberOfRooms || !taxCode || !companyName ||!nation ||!facilityName||!businessType||!scale){
            return res.status(400).json({message:'Input is required'})
        }
        const result =await hotelService.createHotel(req.body)
        return res.status(201).result
    }catch(e){
        return res.status(500).json({message:e})
    }
}
module.exports={
    createHotel
}