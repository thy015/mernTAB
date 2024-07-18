const signUpService=require('../../services/services')
const signUpCustomer=async(req,res)=>{
    try{
        console.log(req.body)
        const{nameCus,phoneNum}=req.body

        if(!nameCus||!phoneNum){
            return res.status(400).json({message:'Input is required'})
        }
        const result= await signUpService.signUpCustomer(req.body)
        return res.status(201).json(result)
    }
    catch(e){
        return res.status(500).json({message:e})
    }
}

//hàm đăng nhập ảo
const signInCustomer=async(req,res)=>{
    console.log(req.body)
    const {nameCus}=req.body

    if (!nameCus) {
        return res.status(400).json({ message: 'Name are required' });
    }

    const result = await signUpService.signInCustomer(req.body);
    return res.status(200).json(result);
}
module.exports={

    signUpCustomer,
    signInCustomer
}
