const jwt=require('jsonwebtoken')
const dotenv=require('dotenv')
dotenv.config()

const generalAccessTokens=async(payload)=>{
    console.log(payload)
    const access_token=jwt.sign({
        payload
    },process.env.ACCESS_TOKEN,{expiresIn:'24h'})
    
    return access_token
}

const refreshAccessTokens=async(payload)=>{
    const refresh_token=jwt.sign({
        payload
    },process.env.REFRESH_TOKEN,{expiresIn:'365d'})
    
    return refresh_token
}
const checkTokenId=(req,res,next)=>{
    const authHeader=req.headers['authorization']
    const token=authHeader && authHeader.split(' ')[1]

    if(!token) return res.status(403).json({message:'Missing token'})
        const decodedToken=jwt.decode(token)
            console.log(decodedToken)
    if(!decodedToken){
        return res.status(400).json({message:'Cant decode token'})
    }
        
    req.tokenID=decodedToken.payload.id
        next()
        
}
const readToken = (req, res) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
  
    if (!token) {
      return res.status(400).json({ message: "Token is required" });
    }
  
    try {
        const decoded = jwt.decode(token);
        if (!decoded) {
          return res.status(401).json({ message: "Invalid token" });
        }
        req.token = decoded;
        next();
      } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
      }
    };

const checkRole=(req,res,next)=>{
    req.locals.user
    next()
}
module.exports={
    generalAccessTokens,
    refreshAccessTokens,
    checkTokenId,
    readToken,
    checkRole
}