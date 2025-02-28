"use client";

import { useState } from "react";
import 'font-awesome/css/font-awesome.min.css';


export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleClick = () => {
    // This function can be used to set a submission status if needed
    setSubmitStatus({
      success: true,
    });
  };

  return (
    
    <section  id="contact"className="py-20 bg-white text-[#FBA2AB]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Contact Me.</h2>
          <p className="text-lg">
            You can reach me via email.{" "}
          if you'd like to connect.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md mx-auto">
          {/* Centered button */}
          <div className="flex justify-center">
            <a
              href="mailto:laylagdev@gmail.com" // Mailto link to open email client
              onClick={handleClick} // Optional: handle click for status
              className="inline-flex items-center justify-center bg-[#FBA2AB] text-white py-3 px-6 rounded-full shadow-md hover:bg-[#FEA38E] transition-all"
            >
              <i className="fas fa-comment-dots mr-2"></i> {/* Message icon */}
              Send Email
            </a>
          </div>

          {/* Form submission status */}
          {submitStatus && (
            <div
              className={`mt-4 p-4 rounded-lg ${
                submitStatus.success
                  ? ""
                  : ""
              }`}
            >
              {submitStatus.message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
