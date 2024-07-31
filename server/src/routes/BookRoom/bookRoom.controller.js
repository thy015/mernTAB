const services = require('../../services/services');
const {Invoice}=require('../../models/invoice.model')
const {Hotel}=require('../../models/hotel.model')
const bookRoom = async (req, res) => {
    const { roomID, paymentMethod } = req.body;
    const cusID = req.cusID;

    console.log("Request body:", req.body);
    console.log("Customer ID:", cusID); 

    if (!roomID || !paymentMethod || !cusID) {
        console.error("Missing required fields:", { roomID, paymentMethod, cusID });
        return res.status(403).json({ message: 'Missing required fields' });
    }
    try {
        const newInvoice = { paymentMethod };
        const result = await services.bookRoom(newInvoice, cusID, roomID);
        if (result.status === 'OK') {
            return res.status(200).json(result);
        } else {
            return res.status(500).json(result);
        }
    } catch (e) {
        console.error('Error booking room in controller:', e);
        res.status(500).json(e);
    }
};

const getRoomsBookedCustomer = async (req, res) => {
    const cusID = req.cusID;
    if (!cusID) {
        return res.status(403).json({ message: 'Missing customer ID' });
    }
    try {
        const bookedRooms = await Invoice.find({ cusID: cusID });
        const paidRooms = bookedRooms.filter(room => room.isPaid === true);
        
        const hotelIDs = paidRooms.map(room => room.hotelID);
        const linkedHotels = await Hotel.find({ _id: { $in: hotelIDs } });
        
        const hotelNames = linkedHotels.map(hotel => ({
            hotelID: hotel._id,
            companyName: hotel.companyName
        }));

        if (paidRooms.length > 0) {
            return res.status(200).json({ paidRooms, hotelNames });
        } else {
            return res.status(200).json({ message: "There's no room booked successfully" });
        }
    } catch (e) {
        return res.status(500).json({ message: 'Error in controller', error: e });
    }
};


module.exports = { 
    bookRoom,
    getInvoicesWithReceipts,
    getRoomsBookedCustomer
 };
