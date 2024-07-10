const Account=require('../../models/signUp.model')
const signUpService=require('../../services/signUp.service')
const signUpOwner=async(req,res)=>{
    try{
        console.log(req.body)
        const{name,passWord,email,birthDate,phoneNum}=req.body
        if(!name || !passWord || !email || !birthDate ||!phoneNum){
            return res.status(200).json({
                message:'Input is required'
            })
        }
        const res= await signUpService.signUpOwner()
        return res.status(200).json({
            message:'Success'
        })
        }
     catch(e){
        return res.status(404).json({
            message:e
        })
    }

    // newAccount.save()
    // .then(m=>{
    //     res.status(201).json('Account create'+m)
    // }).catch((e)=>{
    //     res.status(400).json('Error'+e)
    // })
}
module.exports={
    signUpOwner
}