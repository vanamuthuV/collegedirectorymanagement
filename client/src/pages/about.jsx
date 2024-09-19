import React from "react";
import { FaInfoCircle, FaUsers, FaShieldAlt, FaTools } from "react-icons/fa";

// InfoCard Component
const InfoCard = ({ icon, title, description }) => (
  <div className="overflow-hidden transition-transform transform bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:scale-105">
    <div className="flex items-center p-6 border-b border-gray-200 dark:border-gray-700">
      <div className="text-4xl text-blue-600 dark:text-blue-400">{icon}</div>
      <h2 className="ml-4 text-2xl font-bold text-gray-900 dark:text-white">
        {title}
      </h2>
    </div>
    <div className="p-6">
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
    <div className="p-6 border-t border-gray-200 dark:border-gray-700">
      <button className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
        Learn More
      </button>
    </div>
  </div>
);

// AboutPage Component
const AboutPage = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-12 text-5xl font-extrabold text-center text-gray-900 dark:text-white">
          About Educonnect
        </h1>

        {/* Introduction Section */}
        <section className="mb-12">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            Introduction
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Educonnect is an innovative platform designed to streamline the
            educational experience for students, faculty members, and
            administrators. Our goal is to provide an integrated solution that
            enhances communication, simplifies record management, and fosters a
            collaborative learning environment.
          </p>
        </section>

        {/* Core Values Section */}
        <section className="grid grid-cols-1 gap-8 pt-12 mb-12 border-t border-gray-300 md:grid-cols-2 lg:grid-cols-4 dark:border-gray-700">
          <InfoCard
            icon={<FaInfoCircle />}
            title="Transparency"
            description="We believe in clear and open communication between all parties involved in the educational process."
          />
          <InfoCard
            icon={<FaUsers />}
            title="Community"
            description="Fostering a supportive and collaborative environment for students and educators."
          />
          <InfoCard
            icon={<FaShieldAlt />}
            title="Security"
            description="Ensuring the safety and privacy of user data with robust security measures."
          />
          <InfoCard
            icon={<FaTools />}
            title="Innovation"
            description="Continuously improving and integrating new technologies to enhance the user experience."
          />
        </section>

        {/* Our Team Section */}
        <section className="pt-12 mb-12 border-t border-gray-300 dark:border-gray-700">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            Meet Our Team
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Our team is composed of experienced professionals dedicated to
            providing the best educational technology solutions. With a diverse
            range of expertise, we work together to deliver an exceptional
            platform tailored to your needs.
          </p>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Have questions or feedback? Feel free to reach out to us through the
            contact form on our website or via email at contact@educonnect.com.
            We're here to assist you!
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
