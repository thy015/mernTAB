import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

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
    step3: {
      hotelName: "",
      hotelPhone: "",
      accommodationType: "Căn hộ",
      area: "",
      capacity: "",
      numberOfBathrooms: "",
      numberOfBedrooms: "",
      hotelAddress: "",
      rooms: [], // Ensure this matches the initial state in Step3
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
            onNext={() => setCurrentStep(3)}
            onPrevious={() => setCurrentStep(1)}
            formData={formData.step2}
            setFormData={(data) => handleFormDataChange("step2", data)}
          />
        );
      case 3:
        return (
          <Step3
            onPrevious={() => setCurrentStep(2)}
            formData={formData.step3}
            setFormData={(data) => handleFormDataChange("step3", data)}
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
        <button
          className={`block w-full text-left px-4 py-2 mb-2 ${
            currentStep === 3 ? "bg-gray-300" : "bg-gray-100"
          }`}
          onClick={() => setCurrentStep(3)}
        >
          Bước 3: Nhập thông tin phòng cho thuê
        </button>
      </div>
      <div className="w-2/3 p-4 bg-white">{renderStep()}</div>
    </div>
  );
}
