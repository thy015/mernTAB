const BookRoomService = require('../../services/services');

const bookRoom = async (req, res) => {
    try {
        const { cusID, roomID, total, paymentMethod } = req.body;

        if (!cusID || !roomID || !total || !paymentMethod) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const result = await BookRoomService.bookRoom(req.body, cusID, roomID);
        return res.status(201).json(result);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
};

const createRoomT = async (req, res) => {
    try {
        console.log(req.body);
        const { numberOfBeds, typeOfRoom, money, revenue } = req.body;
        if (!numberOfBeds || !typeOfRoom || !money || !revenue) {
            return res.status(400).json({ message: 'Input is required' });
        }
        const result = await BookRoomService.createRoomT(req.body);
        return res.status(201).json(result);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
};

module.exports = { bookRoom, createRoomT };
