import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// ContactMethod Component
const ContactMethod = ({ icon, title, details }) => (
  <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-6">
    <div className="flex items-center mb-4">
      <div className="text-3xl text-blue-600 dark:text-blue-400">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-4">
        {title}
      </h3>
    </div>
    <p className="text-gray-700 dark:text-gray-300">{details}</p>
  </div>
);

// ContactPage Component
const ContactPage = () => {
  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-12 text-center">
          Contact Us
        </h1>

        {/* Contact Methods Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <ContactMethod
            icon={<FaPhone />}
            title="Phone"
            details="Call us at (123) 456-7890 for any inquiries or support."
          />
          <ContactMethod
            icon={<FaEnvelope />}
            title="Email"
            details="Send us an email at contact@educonnect.com and we’ll get back to you shortly."
          />
          <ContactMethod
            icon={<FaMapMarkerAlt />}
            title="Address"
            details="Visit us at 123 Educonnect Lane, Knowledge City, ED 45678."
          />
        </section>

        {/* Contact Form Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Send Us a Message
          </h2>
          <form className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 text-gray-900 dark:text-gray-100"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 text-gray-900 dark:text-gray-100"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 dark:text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 text-gray-900 dark:text-gray-100"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
