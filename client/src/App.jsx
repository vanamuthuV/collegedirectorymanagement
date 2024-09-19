import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import LandingPage from "./pages/landingpage";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";
import EnhancedStudentInterface from "./pages/studentinterface";
import FacultyInterface from "./pages/facultypage";
import AdminInterface from "./pages/adminpage";
import FeaturesPage from "./pages/features";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import { UserProvider } from "../utils/context";

export default function App() {
  return (
    <UserProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/student" element={<EnhancedStudentInterface />} />
              <Route path="/faculty" element={<FacultyInterface />} />
              <Route path="/admin" element={<AdminInterface />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}
