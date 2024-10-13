
const verifyOAuthToken = async (req, res) => {
  try {
    const token = req.token;
    console.log('Verified token',token);
    return res.status(200).json({message:'Success Login'})
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = { verifyOAuthToken };
