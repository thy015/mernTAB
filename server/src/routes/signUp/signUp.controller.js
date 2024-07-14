const Account=require('../../models/signUp.model')
const signUpService=require('../../services/signUp.service')
const signUpOwner=async(req,res)=>{
    try{
        console.log(req.body)
        const{name,passWord,email,birthDate,phoneNum}=req.body

        if(!name || !passWord || !email || !birthDate ||!phoneNum){
            return res.status(400).json({message:'Input is required'})
        }
        else if(!validateEmail(email)){ 
            //email 
            return res.status(400).json({ message:'Invalid email'})
        }
        const result= await signUpService.signUpOwner(req.body)
        return res.status(201).json(result)
        }
     catch(e){
        return res.status(500).json({message:e})
    }

    // newAccount.save()
    // .then(m=>{
    //     res.status(201).json('Account create'+m)
    // }).catch((e)=>{
    //     res.status(400).json('Error'+e)
    // })
}
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }
module.exports={
    signUpOwner
}