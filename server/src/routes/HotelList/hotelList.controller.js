const service=require('../../services/services')

const createHotel=async(req,res)=>{
    try{
        console.log("Request ownerID in controller:", req.ownerID);
        const {address,numberOfRooms,taxCode,companyName,nation,facilityName,businessType,scale,city}=req.body
        if(!address || !numberOfRooms || !taxCode || !companyName ||!nation ||!facilityName||!businessType||!scale||!city){
            return res.status(403).json({message:'Input is required'})
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
            return res.status(403).json({ message: 'Input is required' });
        }
        const result = await service.createRoom(req.body, hotelID);
        return res.status(201).json(result);
    } catch (e) {
        console.error("Error in createRoom controller:", e);
        return res.status(500).json({ message: e });
    }
}

const searchHotel=async(req,res)=>{
    try{
    const { city, checkInDate, checkOutDate, numberOfPeople } = req.body;

    if (!city || !checkInDate || !checkOutDate || !numberOfPeople) {
        return res.status(403).json({ message: 'Input is required' });
    }

    const searchCriteria = {
        city,
        checkInDate,
        checkOutDate,
        numberOfPeople: parseInt(numberOfPeople),
    };

    const result = await service.searchHotel(searchCriteria);
    return res.status(200).json({ status: 'OK', data: result });
    }catch(e){
        console.error("Error in searchHotels controller:");
        return res.status(500).json({ message: e });
    }
}
const getHotelByID=async(req,res)=>{
    try{

    }catch(e){
        console.error("Error in getHotelByID controller:",e);
    }
}
module.exports={
    createHotel,
    createRoom,
    getHotelsByOwner,
    searchHotel,
    getHotelByID
}