import React from "react";
import {
  FaUser,
  FaBook,
  FaSearch,
  FaEnvelope,
  FaChalkboardTeacher,
  FaChartLine,
} from "react-icons/fa";

// FeatureCard Component
const FeatureCard = ({ icon, title, description }) => (
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

// FeaturesPage Component
const FeaturesPage = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-12 text-5xl font-extrabold text-center text-gray-900 dark:text-white">
          Educonnect Features
        </h1>

        {/* Login Page */}
        <section className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<FaUser />}
            title="Login Page"
            description="A streamlined login interface with Username, Password, and Role selection. Validates credentials and directs users to the appropriate dashboard."
          />
        </section>

        {/* Student Interface */}
        <section className="grid grid-cols-1 gap-8 pt-12 mb-12 border-t border-gray-300 md:grid-cols-2 lg:grid-cols-3 dark:border-gray-700">
          <FeatureCard
            icon={<FaBook />}
            title="View Personal Profile"
            description="Displays detailed personal and academic information with a focus on user-friendly presentation of courses, grades, and attendance."
          />
          <FeatureCard
            icon={<FaSearch />}
            title="Search for Other Students"
            description="Allows students to search for peers using filters. Displays results dynamically with options for sorting by name, department, or year."
          />
          <FeatureCard
            icon={<FaEnvelope />}
            title="Contact Faculty Advisors"
            description="Shows a list of assigned advisors with direct contact options via email or phone for easy communication."
          />
        </section>

        {/* Faculty Member Interface */}
        <section className="grid grid-cols-1 gap-8 pt-12 mb-12 border-t border-gray-300 md:grid-cols-2 lg:grid-cols-3 dark:border-gray-700">
          <FeatureCard
            icon={<FaChalkboardTeacher />}
            title="Manage Class List"
            description="Displays a list of students in the faculty member’s courses, including their names, photos, and contact details."
          />
          <FeatureCard
            icon={<FaUser />}
            title="Update Profile"
            description="Provides a form for updating office hours, email, and phone number with real-time updates visible to students."
          />
        </section>

        {/* Administrator Interface */}
        <section className="grid grid-cols-1 gap-8 pt-12 mb-12 border-t border-gray-300 md:grid-cols-2 lg:grid-cols-3 dark:border-gray-700">
          <FeatureCard
            icon={<FaUser />}
            title="Manage Records"
            description="Form for adding, updating, or removing student and faculty records. Includes real-time reflection of changes."
          />
          <FeatureCard
            icon={<FaChartLine />}
            title="Dashboard with Graphs"
            description="Displays interactive charts and graphs representing key data points such as student trends and faculty workloads."
          />
        </section>
      </div>
    </div>
  );
};

export default FeaturesPage;
