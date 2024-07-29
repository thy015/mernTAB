const services=require('../../services/services')
const { validateEmail} = require('./signUp.controller')

const signUpCustomer=async(req,res)=>{
    const{ firstName, password, dob, phoneNumber, email, lastName }=req.body
    try{
        console.log(req.body)
        if(!firstName||!phoneNumber || !dob ||!password||!lastName||!email){
            return res.status(403).json({message:'Input is required'})
        }else if(!validateEmail(email)){ 
            return res.status(400).json({ message:'Invalid email'})
        }
        const result= await services.signUpCustomer(req.body)
        return res.status(200).json(result)
    }
    catch(e){
        console.error('Error in sign-up controller:', e);
        return res.status(500).json({ status: 'BAD', message: 'Internal server error in controller', error: e });
    }
}

const signInCustomer = async (req, res) => {
    const { username, password } = req.body;
    try {
        if (!password||!username) {
            return res.status(403).json({ message: 'Input is required' });
        }
        const result = await services.signInCustomer(req.body);
        if (result.status === 'OK') {
            return res.status(200).json(result);
        } else {
            return res.status(400).json(result);
        }
    } catch (e) {
        return res.status(500).json(e);
    }
};  

module.exports={
    signUpCustomer,
    signInCustomer
}
