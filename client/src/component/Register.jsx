import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import axios from 'axios'

export default function Register() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    fullName: '',
    address: '',
    password: '',
    dob: '',
    businessName: '',
    taxId: ''
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () =>{
    try {
      const response = await axios.post('http://localhost:4000/signUp/', formData);
      console.log(response.data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1
            onNext={handleNext}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 2:
        return (
          <Step2
            onNext={handleNext}
            onPrevious={handlePrevious}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 3:
        return (
          <Step3
            onPrevious={handlePrevious}
            onSubmit={handleSubmit}
            formData={formData}
            setFormData={setFormData}
          />
        );
      default:
        return null
    }
  };

  return (
    <div className="flex h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Multi-Step Form</h1>
        {renderStep()}
      </div>
    </div>
  );
}
