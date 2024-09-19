import { useState } from "react";
import { motion } from "framer-motion";
import { User, Lock, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useUser } from "../hooks/hooks";
import axios from "axios";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const { setUsernames } = useUser();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!username || !password || !role) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/signin/validate",
        {
          username: username,
          password: password,
          role: role,
        }
      );
      console.log(response?.data);

      setUsernames(username); // Update the context username
      localStorage.setItem("user", username);
      switch (response?.data?.role) {
        case "Student":
          window.location.href = "/student";
          break;
        case "Faculty Member":
          window.location.href = "/faculty";
          break;
        case "Administrator":
          window.location.href = "/admin";
          break;
        default:
          setError("Invalid role selected");
      }
    } catch (err) {
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-gray-800">
      <motion.div
        className="w-full max-w-md p-8 space-y-8 bg-white shadow-xl rounded-2xl dark:bg-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <h2 className="mt-6 text-4xl font-extrabold text-gray-900 dark:text-white">
            Welcome Back!
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Sign in to your EduConnect account
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <div className="relative">
                <User className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="block w-full py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="role" className="sr-only">
                Role
              </label>
              <div className="relative">
                <select
                  id="role"
                  name="role"
                  required
                  className="block w-full py-2 pl-3 pr-10 text-base text-gray-900 bg-white border border-gray-300 rounded-md appearance-none dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">Select your role</option>
                  <option value="Student">Student</option>
                  <option value="Faculty Member">Faculty Member</option>
                  <option value="Administrator">Administrator</option>
                </select>
                <ChevronDown className="absolute text-gray-400 transform -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-300" />
              </div>
            </div>
          </div>
          {error && (
            <div className="text-sm text-red-600 dark:text-red-400">
              {error}
            </div>
          )}
          <div>
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md group hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Log in
            </button>
          </div>
        </form>
        <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Sign up here
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
