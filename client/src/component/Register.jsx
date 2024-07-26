import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";

export default function Register() {
  const [currentStep, setCurrentStep] = useState(1);
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

  const handleFormDataChange = (step, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [step]: {
        ...prevData[step],
        ...data,
      },
    }));
  };

  const handleComplete = () => {
    window.location.href = "/success";
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            onNext={() => setCurrentStep(2)}
            formData={formData.step1}
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
            onNext={() => setCurrentStep(2)}
            formData={formData.step1}
            setFormData={(data) => handleFormDataChange("step1", data)}
          />
        );
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/3 p-4 bg-blue-200">
        <button
          className={`block w-full text-left px-4 py-2 mb-2 ${
            currentStep === 1 ? "bg-gray-300" : "bg-gray-100"
          }`}
          onClick={() => setCurrentStep(1)}
        >
          Bước 1: Đăng ký tài khoản Chủ nhà
        </button>
        <button
          className={`block w-full text-left px-4 py-2 mb-2 ${
            currentStep === 2 ? "bg-gray-300" : "bg-gray-100"
          }`}
          onClick={() => setCurrentStep(2)}
        >
          Bước 2: Đăng ký thông tin doanh nghiệp
        </button>
      </div>
      <div className="w-2/3 p-4 bg-white">{renderStep()}</div>
    </div>
  );
}
