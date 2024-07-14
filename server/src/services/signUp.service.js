
const Account=require('../models/signUp.model');
function signUpOwner(newOwner){
    return new Promise(async (resolve,rejects)=>{
        const{name,passWord,email,birthDate,phoneNum}=newOwner
        try{
            const checkAccountExisted=await Account.findOne({
                email:email
            })
            if(checkAccountExisted!==null){
                resolve({
                    status:'BAD',
                    message:'Đã tồn tại email'
                })
            }
            const createdOwner=await Account.create({
                name,
                passWord,
                email,
                birthDate,
                phoneNum
            })
            if(createdOwner){
                resolve({
                    status:'OK',
                    message:'Succ',
                    data:createdOwner
                })
            }
        } catch(e){
            rejects(e)
        }
    })
}
module.exports={
    signUpOwner
}