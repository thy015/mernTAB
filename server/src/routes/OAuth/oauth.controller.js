const path = require("path");

const verifyOAuthToken = async (req, res) => {
  try {
    const token = req.token;
    console.log('Verified token',token);
    if(token.accountType==='user'){
        res.cookie('authToken',token,{httpOnly:true,maxAge:1* 24 * 60 * 60 * 1000})
      res.status(200).json({
      message:'Success Login User',
      navigateTo:'/',
      payload:token.payload
    })
  }
    else if(token.accountType==='partner'){
        res.cookie('authToken',token,{httpOnly:true,maxAge:1* 24 * 60 * 60 * 1000})
        res.status(200).json({
    message:'Success Login Partner',
    navigateTo:'/owner',
    payload:token.payload
    })
  }
    else{
      return res.status(404).json({message:'No type found'})
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = { verifyOAuthToken };
