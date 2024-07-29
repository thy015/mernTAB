const services=require('../../services/services')
const signUpCustomer = async (req, res) => {

    const { firstName, password, dob, phoneNumber, email, lastName } = req.body;
    
    try {
      console.log('Received request with body:', req.body);
  
      if (!firstName || !phoneNumber || !dob || !password || !lastName || !email) {
        console.log('Missing input fields');
        return res.status(403).json({ message: 'Input is required' });
      } 
      console.log('Request data to third-party:', {
        email,
        firstName,
        lastName,
        password,
        dob,
        phoneNumber,
      });
  
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
  
      console.log('Response from third-party:', response.data);
  
      if (response.status === 200 || response.status === 201) {
        res.status(201).json({
          status: "OK",
          message: "Successfully created customer",
          data: response.data,
        });
      } else {
        res.status(400).json({
          status: "BAD",
          message: "Third-party service auth failed",
        });
      }
    } catch (e) {
      console.error('Error during sign-up:', e.response ? e.response.data : e);
      res.status(500).json({
        status: 'BAD',
        message: e.response ? e.response.data : 'Error during sign-up',
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
