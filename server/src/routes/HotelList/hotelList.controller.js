const service=require('../../services/services')

const createHotel=async(req,res)=>{
    try{
        console.log("Request ownerID in controller:", req.ownerID);
        const {address,numberOfRooms,taxCode,companyName,nation,facilityName,businessType,scale,city}=req.body
        if(!address || !numberOfRooms || !taxCode || !companyName ||!nation ||!facilityName||!businessType||!scale||!city){
            return res.status(400).json({message:'Input is required'})
        }
        const result =await service.createHotel(req.body,req.ownerID)
        return res.status(201).json(result)
    }catch(e){
        return res.status(500).json({message:e});
    }
}


const getHotelsByOwner = async (req, res) => {
    try {
        const ownerID = req.ownerID;
        const hotels = await service.getHotelsByOwner(ownerID);
        return res.status(200).json({ status: 'OK', data: hotels });
    } catch (e) {
        console.error("Error in getHotelsByOwner controller:", e);
        return res.status(500).json({ message: e});
    }
};

const createRoom = async (req, res) => {
    try {
        const { numberOfBeds, typeOfRoom, money, hotelID,capacity } = req.body;
        if (!numberOfBeds || !typeOfRoom || !money || !hotelID||!capacity) {
            return res.status(400).json({ message: 'Input is required' });
        }
        const result = await service.createRoom(req.body, hotelID);
        return res.status(201).json(result);
    } catch (e) {
        console.error("Error in createRoom controller:", e);
        return res.status(500).json({ message: e });
    }
}
module.exports={
    createHotel,
    createRoom,
    getHotelsByOwner
}