const services = require('../../services/services');
const {Invoice}=require('../../models/invoice.model')

const bookRoom= async (req, res) => {
    const { roomID, paymentMethod } = req.body;
    const cusID = req.ownerID; //middleware

    if (!roomID || !paymentMethod) {
        return res.status(400).json({ status: 'BAD', message: 'Missing required fields' });
    }

    try {
        const newInvoice = { paymentMethod };
        const result = await services.bookRoom(newInvoice, cusID, roomID);
        res.status(200).json(result);

    } catch (e) {
        console.error('Error booking room:', e);
        res.status(e.status || 500).json(e);
    }
};

const getInvoicesWithReceipts = async (req, res) => {
    try {
        const invoices = await Invoice.find().populate('receiptID');
        res.status(200).json(invoices);
    } catch (e) {
        console.error('Error fetching invoices with receipts:', e);
        res.status(500).json(e);
    }
};
module.exports = { 
    bookRoom,
    getInvoicesWithReceipts
 };
