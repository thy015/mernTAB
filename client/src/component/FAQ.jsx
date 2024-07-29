import React, { useState } from "react";

export const FAQ = () => {
  const [activeTab, setActiveTab] = useState("Booking Details");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="bg-[#E6F4FF] h-screen w-screen flex items-center">
      <h1 className="text-[#0F48BE] text-[5vw] md:text-6xl mb-25 ml-20">
        FREQUENTLY ASKED QUESTIONS
      </h1>
      <div className="p-5 mr-5 bg-white" style={{ width: "1200px" }}>
        <h1 className="mb-2 text-xl">TOPIC</h1>
        <div className="flex">
          <div className="w-1/3 border border-green-300 bg-gray-100 flex flex-col min-h-[400px] p-4">
            <button
              className={`block w-full px-4 py-3 text-left text-lg mb-2 transition-colors duration-300 ${
                activeTab === "Account Management"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100"
              }`}
              onClick={() => handleTabClick("Account Management")}
            >
              Account Management
            </button>
            <button
              className={`block w-full px-4 py-3 text-left text-lg mb-2 transition-colors duration-300 ${
                activeTab === "Booking Details"
                  ? "bg-blue-400 text-white"
                  : "bg-gray-100"
              }`}
              onClick={() => handleTabClick("Booking Details")}
            >
              Booking Details
            </button>
            <button
              className={`block w-full px-4 py-3 text-left text-lg mb-2 transition-colors duration-300 ${
                activeTab === "Cancelation"
                  ? "bg-blue-300 text-white"
                  : "bg-gray-100"
              }`}
              onClick={() => handleTabClick("Cancelation")}
            >
              Cancelation
            </button>
            <button
              className={`block w-full px-4 py-3 text-left text-lg mb-2 transition-colors duration-300 ${
                activeTab === "Refund"
                  ? "bg-blue-200 text-white"
                  : "bg-gray-100"
              }`}
              onClick={() => handleTabClick("Refund")}
            >
              Refund
            </button>
          </div>

          <div className="w-2/3 p-3 border border-l-0 border-gray-300">
            {activeTab === "Account Management" && (
              <div className="max-w-lg p-8 mx-auto">
                <details className="p-6 rounded-lg open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg">
                  <summary className="text-sm font-semibold leading-6 select-none text-slate-900 dark:text-white">
                    How do I update my account information?
                  </summary>
                  <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    <p>
                      You can update your account information by logging into
                      your account and navigating to the 'Profile' section.
                      There, you can edit your personal details and save the
                      changes.
                    </p>
                  </div>
                </details>
                <details className="p-6 rounded-lg open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg">
                  <summary className="text-sm font-semibold leading-6 select-none text-slate-900 dark:text-white">
                    How can I change my password?
                  </summary>
                  <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    <p>
                      To change your password, go to the 'Account Settings'
                      page, select 'Change Password,' and follow the
                      instructions. You will need to enter your current password
                      and choose a new one.
                    </p>
                  </div>
                </details>
                <details className="p-6 rounded-lg open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg">
                  <summary className="text-sm font-semibold leading-6 select-none text-slate-900 dark:text-white">
                    What should I do if I forget my account password?
                  </summary>
                  <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    <p>
                      If you forget your password, use the 'Forgot Password'
                      link on the login page. Follow the instructions sent to
                      your email to reset your password.
                    </p>
                  </div>
                </details>
                <details className="p-6 rounded-lg open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg">
                  <summary className="text-sm font-semibold leading-6 select-none text-slate-900 dark:text-white">
                    How can I delete my account?
                  </summary>
                  <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    <p>
                      To delete your account, contact our customer support team
                      and request account deletion. We will guide you through
                      the process and confirm once your account has been
                      deleted.
                    </p>
                  </div>
                </details>
                <details className="p-6 rounded-lg open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg">
                  <summary className="text-sm font-semibold leading-6 select-none text-slate-900 dark:text-white">
                    How do I recover my account if it's been hacked?
                  </summary>
                  <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    <p>
                      If you suspect your account has been hacked, immediately
                      contact our customer support team for assistance. Provide
                      any relevant information to help us secure your account
                      and restore access.
                    </p>
                  </div>
                </details>
              </div>
            )}
            {activeTab === "Booking Details" && (
              <div className="max-w-lg p-8 mx-auto">
                <details className="p-6 rounded-lg open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg">
                  <summary className="text-sm font-semibold leading-6 select-none text-slate-900 dark:text-white">
                    How can I check my booking details?
                  </summary>
                  <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    <p>
                      You can check your booking details by logging into your
                      account on our website and navigating to the 'My Bookings'
                      section. Alternatively, you can click on the link provided
                      in your booking confirmation email.
                    </p>
                  </div>
                </details>
                <details className="p-6 rounded-lg open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg">
                  <summary className="text-sm font-semibold leading-6 select-none text-slate-900 dark:text-white">
                    Can I change the dates of my booking after it has been made?
                  </summary>
                  <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    <p>
                      Yes, you can change the dates of your booking by logging
                      into your account and selecting 'Modify Booking' in the
                      'My Bookings' section. Please note that changes are
                      subject to availability and may incur additional charges.
                    </p>
                  </div>
                </details>
                <details className="p-6 rounded-lg open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg">
                  <summary className="text-sm font-semibold leading-6 select-none text-slate-900 dark:text-white">
                    How can I add special requests to my booking?
                  </summary>
                  <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    <p>
                      You can add special requests to your booking during the
                      booking process or by contacting our customer service team
                      with your booking reference number. We will do our best to
                      accommodate your requests.
                    </p>
                  </div>
                </details>
                <details className="p-6 rounded-lg open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg">
                  <summary className="text-sm font-semibold leading-6 select-none text-slate-900 dark:text-white">
                    Can I add extra guests to my existing booking?
                  </summary>
                  <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    <p>
                      Yes, you can add extra guests to your existing booking by
                      contacting our customer service team. Additional charges
                      may apply depending on the hotel's policy and room
                      capacity.
                    </p>
                  </div>
                </details>
                <details className="p-6 rounded-lg open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg">
                  <summary className="text-sm font-semibold leading-6 select-none text-slate-900 dark:text-white">
                    What should I do if I don't receive a booking confirmation
                    email?
                  </summary>
                  <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    <p>
                      If you don't receive a booking confirmation email within a
                      few minutes of booking, please check your spam or junk
                      folder. If you still can't find it, contact our customer
                      service team for assistance.
                    </p>
                  </div>
                </details>
              </div>
            )}
            {activeTab === "Cancelation" && (
              <div className="max-w-lg p-8 mx-auto">
                <details className="p-6 rounded-lg open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg">
                  <summary className="text-sm font-semibold leading-6 select-none text-slate-900 dark:text-white">
                    What is the cancellation policy?
                  </summary>
                  <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    <p>
                      The cancellation policy varies depending on the hotel or
                      booking provider. Generally, you can cancel within a
                      certain time frame before your check-in date for a full
                      refund. Please check the specific policy during booking or
                      contact customer service for details.
                    </p>
                  </div>
                </details>
                <details className="p-6 rounded-lg open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg">
                  <summary className="text-sm font-semibold leading-6 select-none text-slate-900 dark:text-white">
                    How do I cancel my booking?
                  </summary>
                  <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    <p>
                      You can cancel your booking by logging into your account
                      and navigating to the 'My Bookings' section. Select the
                      booking you wish to cancel and follow the cancellation
                      process.
                    </p>
                  </div>
                </details>
                <details className="p-6 rounded-lg open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg">
                  <summary className="text-sm font-semibold leading-6 select-none text-slate-900 dark:text-white">
                    Will I receive a confirmation for my cancellation?
                  </summary>
                  <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    <p>
                      Yes, you will receive a confirmation email once your
                      cancellation has been processed. Please check your email
                      and spam/junk folder for the cancellation confirmation.
                    </p>
                  </div>
                </details>
                <details className="p-6 rounded-lg open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg">
                  <summary className="text-sm font-semibold leading-6 select-none text-slate-900 dark:text-white">
                    What if I need to cancel but my booking is non-refundable?
                  </summary>
                  <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    <p>
                      If your booking is non-refundable, you may not be able to
                      receive a refund. However, contact our customer support
                      team to discuss any possible options or solutions based on
                      your situation.
                    </p>
                  </div>
                </details>
                <details className="p-6 rounded-lg open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg">
                  <summary className="text-sm font-semibold leading-6 select-none text-slate-900 dark:text-white">
                    Can I cancel a booking made through a third-party site?
                  </summary>
                  <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    <p>
                      If you made your booking through a third-party site, you
                      will need to follow their cancellation process. Contact
                      their support team for assistance with cancellations.
                    </p>
                  </div>
                </details>
              </div>
            )}
            {activeTab === "Refund" && (
              <div className="max-w-lg p-8 mx-auto">
                <details className="p-6 rounded-lg open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg">
                  <summary className="text-sm font-semibold leading-6 select-none text-slate-900 dark:text-white">
                    What is the refund policy?
                  </summary>
                  <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    <p>
                      The refund policy varies depending on the hotel or booking
                      provider. Typically, refunds are processed according to
                      the cancellation policy and the reason for cancellation.
                      Check the specific policy during booking or contact
                      customer service for details.
                    </p>
                  </div>
                </details>
                <details className="p-6 rounded-lg open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg">
                  <summary className="text-sm font-semibold leading-6 select-none text-slate-900 dark:text-white">
                    How long does it take to process a refund?
                  </summary>
                  <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    <p>
                      Refund processing times can vary depending on the payment
                      method and the booking provider. Generally, refunds are
                      processed within 7-14 business days. Check your email or
                      account for updates on your refund status.
                    </p>
                  </div>
                </details>
                <details className="p-6 rounded-lg open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg">
                  <summary className="text-sm font-semibold leading-6 select-none text-slate-900 dark:text-white">
                    How do I request a refund?
                  </summary>
                  <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    <p>
                      You can request a refund by contacting our customer
                      support team with your booking reference number and the
                      reason for the refund request. Follow their instructions
                      to complete the process.
                    </p>
                  </div>
                </details>
                <details className="p-6 rounded-lg open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg">
                  <summary className="text-sm font-semibold leading-6 select-none text-slate-900 dark:text-white">
                    Can I get a refund for a non-refundable booking?
                  </summary>
                  <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    <p>
                      Refunds for non-refundable bookings are generally not
                      provided. However, contact our customer support team to
                      discuss your situation and explore any possible
                      exceptions.
                    </p>
                  </div>
                </details>
                <details className="p-6 rounded-lg open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg">
                  <summary className="text-sm font-semibold leading-6 select-none text-slate-900 dark:text-white">
                    How can I track the status of my refund?
                  </summary>
                  <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    <p>
                      You can track the status of your refund by logging into
                      your account and checking the 'Refunds' section.
                      Alternatively, you can contact customer service for
                      updates on your refund request.
                    </p>
                  </div>
                </details>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default FAQ;