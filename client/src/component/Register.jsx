import React, { useState } from "react";
import axios from "axios";
import Step1 from "./Step1";
import Step2 from "./Step2";

export default function Register() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({

    step1: {
      email: "",
      phone: "",
      fullName: "",
      address: "",
      password: "",
      dob: "",
    },
    step2: {
      businessName: "",
      taxId: "",
      businessAddress: "",
      businessLicenseExpiry: "",
      fireSafetyLicenseExpiry: "",
      businessCertificate: "",
    },
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:4000/signUp/', formData);
      console.log(response.data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  const handleFormDataChange = (step, data) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  const handleComplete = () => {
    window.location.href = "/success";
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1
            onNext={handleNext}
            formData={formData}
            setFormData={(data) => handleFormDataChange("step1", data)}
          />
        );
      case 2:
        return (
          <Step2
            onPrevious={() => setCurrentStep(1)}
            formData={formData.step2}
            setFormData={(data) => handleFormDataChange("step2", data)}
            onComplete={handleComplete}

          />
        );
      default:
        return (
          <Step1
            onNext={handleNext}
            formData={formData}
            setFormData={(data) => handleFormDataChange("step1", data)}
          />
        );
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/3 p-4 bg-blue-200">
        <button
          className={`block w-full text-left px-4 py-2 mb-2 ${step === 1 ? "bg-gray-300" : "bg-gray-100"}`}
          onClick={() => setStep(1)}
        >
          Bước 1: Đăng ký tài khoản Chủ nhà
        </button>
        <button
          className={`block w-full text-left px-4 py-2 mb-2 ${step === 2 ? "bg-gray-300" : "bg-gray-100"}`}
          onClick={() => setStep(2)}
        >
          Bước 2: Đăng ký thông tin doanh nghiệp
        </button>
      </div>
      <div className="w-2/3 p-4 bg-white">{renderStep()}</div>
    </div>
  );
}
