import React, { useEffect, useState } from "react";
import { Form, Input, Checkbox, Tooltip } from "antd";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaUser, FaPhoneFlip } from "react-icons/fa6";
import axios from "axios";
import { openNotification } from "../../hooks/notification";
import { easeIn, easeInOut, motion } from "framer-motion";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const Register = () => {
  const navigate = useNavigate();
  const [isSignInClicked, setIsSignInClicked] = useState(false);
  
  const handleSignInClick = () => {
    setIsSignInClicked(true);
  };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    agreeTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      agreeTerms: e.target.checked,
    });
  };

  const handleFormSubmit = async () => {
    const { email, password, name, phone, agreeTerms } = formData;
        const serviceID='01'
        
    if (!email || !password || !name || !phone) {
      openNotification(false, "Please fill all the fields");
      return;
    }

    if (!validateEmail(email)) {
      openNotification(false, "Invalid email format");
      return;
    }

    if (password.length <= 8) {
      openNotification(false, "Password should be at least 8 characters");
      return;
    }

    if (phone.length !== 10 || !phone.startsWith("0")) {
      openNotification(false, "Phone must be 10 digits and start with 0");
      return;
    }
    if (!agreeTerms) {
      openNotification(false, "You must agree to the terms of service");
      return;
    }
      const submitData={...formData,serviceID}
    try {
      const response = await axios.post("hieuauthen", submitData);
      console.log(response.data);
      if (response.status === 200) {
        openNotification(true, "Success register");
        navigate("/login");
      }
    } catch (e) {
      console.log(e + "Error passing form data");
      openNotification(
        false,
        "Failed to register",
        "Please try again after 5 minutes"
      );
    }
  };

  return (
    <div>
      <div className="row h-[550px]">
        <div className="col-2"></div>
        <div className="col-8">
          <div className="row bg-slate-50 h-full shadow-lg g-0">
            <div
              className="col-4 relative"  >
              <div className="gryphen italic text-white text-[20px] absolute flex mt-40 ml-8">Have your fun journey with TAB</div>
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1530273883449-aae8b023c196?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="side-image"
              />
            </div>
            <motion.div
              className="col-8"
              initial={{opacity: 0 }}
              animate={{
                opacity: isSignInClicked ? 0 : 1,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.75,
                ease: "easeOut",
                delay: 0.15,
              }}
              onAnimationComplete={() => {
                if (isSignInClicked) {
                  navigate("/login");
                }
              }}
            >
              <div className="row h-full">
                <div className="col-2"></div>
                <div className="col-8">
                  <div className="py-7">
                    <h5 className="font-bold">
                      Register with{" "}
                      <span className="text-[#114098]">TakeABreath</span>{" "}
                    </h5>
                    <div className="flex justify-center">
                      <div className="flex w-10 h-10 justify-center items-center shadow-md rounded-[22px] transition-colors duration-300 hover:bg-[#114098] hover:text-white mx-2 cursor-pointer my-2">
                        <FaGoogle />
                      </div>
                      <div className="flex w-10 h-10 justify-center items-center shadow-md rounded-[22px] transition-colors duration-300 hover:bg-[#114098] hover:text-white mx-2 cursor-pointer my-2">
                        <FaFacebookF />
                      </div>
                    </div>
                    <div className="flex items-center mt-4">
                      <div className="border-t border-gray-300 flex-grow"></div>
                      <div className="mx-4">or</div>
                      <div className="border-t border-gray-300 flex-grow"></div>
                    </div>
                    <div className="mt-4">
                      <Form>
                        <Form.Item label="Email" name="email">
                          <Input
                            placeholder="anderson@gmail.com"
                            suffix={
                              <Tooltip title="Email must be approriate, example: thymai@hotmail.com">
                                <MdOutlineEmail />
                              </Tooltip>
                            }
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </Form.Item>
                        <Form.Item label="Password" name="password">
                          <Input.Password
                            placeholder="ads123@"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                          />
                        </Form.Item>
                        <Form.Item label="Name">
                          <Input
                            placeholder="Anderson"
                            suffix={<FaUser />}
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                        </Form.Item>
                        <Form.Item label="Phone Number">
                          <Input
                            placeholder="0908xxxxxx"
                            suffix={<FaPhoneFlip />}
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                        </Form.Item>
                        <Form.Item>
                          <Checkbox
                            checked={formData.agreeTerms}
                            onChange={handleCheckboxChange}
                          >
                            I agree with all statements in terms of service
                          </Checkbox>
                        </Form.Item>
                        <Form.Item>
                          <Button
                            onClick={handleFormSubmit}
                            className="my-2 ml-8 hover:scale-105"
                          >
                            Create Account
                          </Button>
                        </Form.Item>
                      </Form>
                    </div>
                    <div className="flex justify-start">
                      <span>I'm already a member</span>

                      <span
                        className="text-[#114098] cursor-pointer no-underline ml-2"
                        onClick={handleSignInClick}
                      >
                        Sign In
                      </span>
                    </div>
                    <div className="flex justify-start mt-3">
                      <span>I'm an owner</span>
                      <Link to="/loginOwner" className="no-underline">
                        <span className="text-[#114098] cursor-pointer no-underline ml-2">
                          Sign In Owner
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-2"></div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default Register;
