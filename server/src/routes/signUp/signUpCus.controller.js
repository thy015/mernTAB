const services=require('../../services/services')
const { validateEmail,validateBirthDate } = require('./signUp.controller')
const signUpCustomer=async(req,res)=>{
    try{
        console.log(req.body)
        const{firstName,password,email,dob,phoneNumber,lastName}=req.body

        if(!firstName||!phoneNumber|| !email || !dob ||!password||!lastName){
            return res.status(403).json({message:'Input is required'})
        }else if(!validateEmail(email)){ 
            return res.status(400).json({ message:'Invalid email'})
        }
        else if(!validateBirthDate(dob)){
            return res.status(400).json({message:'Not enough age'})
        }
        
        const result= await services.signUpCustomer(req.body)
        return res.status(201).json(result)

    }
    catch(e){
        return res.status(500).json({message:e})
    }
}

const signInCustomer = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(403).json({ message: 'Input is required' });
        }
        const result = await services.signInCustomer(req.body);
        if (result.status === 'OK') {
            return res.status(200).json(result);
        } else {
            return res.status(400).json(result);
        }
    } catch (e) {
        return res.status(500).json({ message: e });
    }
};  

module.exports={
    signUpCustomer,
    signInCustomer
}
