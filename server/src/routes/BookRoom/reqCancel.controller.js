const services=require('../../services/services')
const {reqCancel}=require('../../models/reqCancel.model')
const reqCancelRoom=async(req,res)=>{
    const {receiptID}=req.body
    const cusID=req.cusID 
    console.log(cusID)
    try{
        if (!receiptID ||!cusID) {
            return res.status(403).json({ status: 'BAD', message: 'Missing required fields' });
        }
        const result=await services.reqCancelRoom(receiptID,cusID)
        res.status(200).json(result)
    }catch(e){
        console.log(e)
        res.status(500).json({message:'in controller'})
    }
}
const getReqCancelRoomProcess=async(req,res)=>{
    try {
        const allReqCancels = await reqCancel.find({ isAccept: 'processing' });
        res.status(200).json({
            status: 'OK',
            data: allReqCancels
        });
    } catch (e) {
        console.error('Error in getAllReqCancel:', e);
        res.status(500).json({ message: 'An error occurred while fetching the cancellation requests',});
    }

}
module.exports={
    reqCancelRoom,
    getReqCancelRoomProcess
}