const services=require('../../services/services')
const axios = require("axios");
const signUpCustomer = async (req, res) => {
    const { firstName, password, dob, phoneNumber, email, lastName } = req.body;
    try {
      console.log('Request body:', req.body);
      if (!firstName || !phoneNumber || !dob || !password || !lastName || !email) {
        return res.status(403).json({ message: 'Input is required' });
      }
  
      const response = await axios.post(
        "https://api.htilssu.com/api/v1/auth/register",
        {
          email: email,
          firstName: firstName,
          lastName: lastName,
          password: password,
          dob: dob,
          phoneNumber: phoneNumber,
        }
      );
  
      console.log('Response from third-party service:', response.data);
  
      if (response.status === 200 || response.status === 201 || response.status === 'OK') {
        return res.status(201).json({
          status: "OK",
          message: "Successfully created customer",
          data: response.data,
        });
      } else {
        return res.status(400).json({
          status: "BAD",
          message: "Third-party service auth failed",
          data: response.data
        });
      }
    } catch (e) {
      console.error('Error during sign-up:', e.response ? e.response.data : e.message);
      return res.status(500).json({
        status: 'BAD',
        message: 'Internal server error in controller',
        error: {
          status: e.response ? e.response.status : 'UNKNOWN',
          message: e.response ? e.response.data : e.message || 'Unknown error occurred'
        }
      });
    }
  };

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
