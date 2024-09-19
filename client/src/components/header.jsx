import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { useUser } from "../hooks/hooks";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode and update localStorage
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
    document.documentElement.classList.toggle("dark", newDarkMode);
  };
const user = localStorage.getItem("user");
  console.log(user);

  const [show, setShow] = useState(localStorage.getItem("user"))
  
  // Check for dark mode from localStorage on component mount
  useEffect(() => {
    const storedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    if (storedDarkMode !== null) {
      setIsDarkMode(storedDarkMode);
      document.documentElement.classList.toggle("dark", storedDarkMode);
    }
  }, []); // Run only on mount

  return (
    <header className="bg-white shadow-md dark:bg-neutral-900">
      <div className="max-w-full px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link
              to="/"
              className="text-2xl font-bold font-display text-primary-600 dark:text-primary-400"
            >
              EduConnect
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 bg-white rounded-md dark:bg-neutral-800 text-neutral-400 hover:text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              <Menu className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <nav className="hidden space-x-10 md:flex">
            <Link
              to="/features"
              className="text-base font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
            >
              Features
            </Link>
            <Link
              to="/about"
              className="text-base font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-base font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
            >
              Contact
            </Link>
          </nav>
          <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
            <button
              onClick={toggleDarkMode}
              className="p-2 mr-4 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <Link
              to="/login"
              className="text-base font-medium whitespace-nowrap text-neutral-500 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white border border-transparent rounded-md shadow-sm whitespace-nowrap bg-primary-600 hover:bg-primary-700"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden">
          <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-neutral-800 divide-neutral-50 dark:divide-neutral-700">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold font-display text-primary-600 dark:text-primary-400">
                    EduConnect
                  </span>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 bg-white rounded-md dark:bg-neutral-800 text-neutral-400 hover:text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link
                    to="/features"
                    className="flex items-center p-3 -m-3 rounded-md hover:bg-neutral-50 dark:hover:bg-neutral-700"
                  >
                    <span className="ml-3 text-base font-medium text-neutral-900 dark:text-neutral-100">
                      Features
                    </span>
                  </Link>
                  <Link
                    to="/about"
                    className="flex items-center p-3 -m-3 rounded-md hover:bg-neutral-50 dark:hover:bg-neutral-700"
                  >
                    <span className="ml-3 text-base font-medium text-neutral-900 dark:text-neutral-100">
                      About
                    </span>
                  </Link>
                  <Link
                    to="/contact"
                    className="flex items-center p-3 -m-3 rounded-md hover:bg-neutral-50 dark:hover:bg-neutral-700"
                  >
                    <span className="ml-3 text-base font-medium text-neutral-900 dark:text-neutral-100">
                      Contact
                    </span>
                  </Link>
                </nav>
              </div>
            </div>
            {show ? (
              <p>{show}</p>
            ) : (
              <div>
                <Link
                  to="/signup"
                  className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700"
                >
                  Sign up
                </Link>
                <p className="mt-6 text-base font-medium text-center text-neutral-500 dark:text-neutral-400">
                  Existing user?{" "}
                  <Link
                    to="/login"
                    className="text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
