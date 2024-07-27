const services=require('../../services/services')
const { validateEmail,validateBirthDate } = require('./signUp.controller')
const signUpCustomer=async(req,res)=>{
    try{
        console.log(req.body)
        const{name,passWord,email,birthDate,phoneNum}=req.body

        if(!name||!phoneNum|| !email || !birthDate ||!passWord){
            return res.status(403).json({message:'Input is required'})
        }else if(!validateEmail(email)){ 
            return res.status(400).json({ message:'Invalid email'})
        }
        else if(!validateBirthDate(birthDate)){
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
