"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus({
        success: true,
        message: "¡Mensaje enviado! Te contactaré pronto.",
      });
      setFormData({
        email: "",
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Contact Me.</h2>
          <p className="text-lg">
            You can reach me via email.{" "}
            <a href="#" className="text-purple-400">LinkedIn</a> or{" "}
            <a href="#" className="text-purple-400">Twitter</a> if you'd like to connect.
          </p>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div></div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-purple-500"
                placeholder="elfora.dev@gmail.com"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg bg-purple-500 hover:bg-purple-600 text-white font-medium transition-all flex items-center justify-center ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Enviando..." : "Schedule a Call"}
            </button>

            {/* Form submission status */}
            {submitStatus && (
              <div
                className={`mt-4 p-4 rounded-lg ${
                  submitStatus.success
                    ? "bg-green-500/10 text-green-400"
                    : "bg-red-500/10 text-red-400"
                }`}
              >
                {submitStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
