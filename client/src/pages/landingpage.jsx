"use client";

import { motion } from "framer-motion";
import {
  Search,
  Users,
  BookOpen,
  GraduationCap,
  Building,
  BarChart,
  Mail,
  Phone,
  UserPlus,
  UserMinus,
  Edit,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-20 md:py-32 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Welcome to EduConnect
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-12 text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Revolutionize your educational journey with our comprehensive
              college directory and management system. Connect, collaborate, and
              succeed together.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <button className="px-8 py-4 text-lg font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 text-lg font-semibold rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Learn More
              </button>
            </motion.div>
          </div>
        </section>

        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Features for Students
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: (
                  <GraduationCap className="w-12 h-12 mb-6 text-blue-600" />
                ),
                title: "View Personal Profile",
                description:
                  "Access your personal and academic information, including courses, grades, and attendance.",
              },
              {
                icon: <Search className="w-12 h-12 mb-6 text-blue-600" />,
                title: "Search for Other Students",
                description:
                  "Find and connect with other students using filters like name, department, or year.",
              },
              {
                icon: <Mail className="w-12 h-12 mb-6 text-blue-600" />,
                title: "Contact Faculty Advisors",
                description:
                  "Easily reach out to your assigned faculty advisors via email or phone.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-16 text-center">
            For Faculty Members
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: <Users className="w-12 h-12 mb-6 text-emerald-600" />,
                title: "Manage Class List",
                description:
                  "View and manage your class lists, including student names, photos, and contact information.",
              },
              {
                icon: <Edit className="w-12 h-12 mb-6 text-emerald-600" />,
                title: "Update Profile",
                description:
                  "Easily update your office hours, contact email, and phone number for students to view.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Administrator Tools
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: <UserPlus className="w-12 h-12 mb-6 text-amber-600" />,
                title: "Manage Records",
                description:
                  "Add, update, or remove student and faculty records with ease.",
              },
              {
                icon: <BarChart className="w-12 h-12 mb-6 text-amber-600" />,
                title: "Data Visualization",
                description:
                  "View interactive graphs showing enrollment trends, faculty course loads, and more.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="text-center py-20">
          <motion.h2
            className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Ready to Transform Your Educational Experience?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <button className="px-10 py-4 text-lg font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Join EduConnect Today
            </button>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
