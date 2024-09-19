import React, { useState } from "react";
import {
  Search,
  Mail,
  Phone,
  Sun,
  Moon,
  ChevronDown,
  User,
  Book,
  Calendar,
  MapPin,
  GraduationCap,
  Clock,
  Filter,
} from "lucide-react";

const dummyStudents = [
  {
    id: 1,
    name: "Alice Johnson",
    photo: "/placeholder.svg?height=40&width=40",
    email: "alice@university.edu",
    phone: "+1 234 567 8901",
    course: "Computer Science",
    grade: "A",
  },
  {
    id: 2,
    name: "Bob Smith",
    photo: "/placeholder.svg?height=40&width=40",
    email: "bob@university.edu",
    phone: "+1 234 567 8902",
    course: "Mathematics",
    grade: "B+",
  },
  {
    id: 3,
    name: "Charlie Brown",
    photo: "/placeholder.svg?height=40&width=40",
    email: "charlie@university.edu",
    phone: "+1 234 567 8903",
    course: "Physics",
    grade: "A-",
  },
  {
    id: 4,
    name: "Diana Ross",
    photo: "/placeholder.svg?height=40&width=40",
    email: "diana@university.edu",
    phone: "+1 234 567 8904",
    course: "Chemistry",
    grade: "B",
  },
  {
    id: 5,
    name: "Ethan Hunt",
    photo: "/placeholder.svg?height=40&width=40",
    email: "ethan@university.edu",
    phone: "+1 234 567 8905",
    course: "Biology",
    grade: "A",
  },
  {
    id: 6,
    name: "Fiona Gallagher",
    photo: "/placeholder.svg?height=40&width=40",
    email: "fiona@university.edu",
    phone: "+1 234 567 8906",
    course: "Psychology",
    grade: "A-",
  },
];

const EnhancedFacultyInterface = () => {
  const [students, setStudents] = useState(dummyStudents);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("class-list");
  const [profile, setProfile] = useState({
    name: "Dr. Jane",
    title: "Professor of Computer Science",
    officeHours: "Monday, Wednesday 2-4 PM",
    email: "jane.doe@university.edu",
    phone: "+1 234 567 8900",
    office: "Science Building, Room 301",
  });
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredStudents = dummyStudents.filter(
      (student) =>
        student.name.toLowerCase().includes(query) ||
        student.course.toLowerCase().includes(query)
    );
    setStudents(filteredStudents);
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    alert("Profile updated successfully!");
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen p-4 sm:p-6 md:p-8 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="mx-auto space-y-8 max-w-7xl">
        <div
          className={`p-6 rounded-xl ${
            isDarkMode
              ? "bg-gradient-to-r from-blue-800 to-indigo-900"
              : "bg-gradient-to-r from-blue-600 to-indigo-700"
          } text-white`}
        >
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              Welcome, {profile.name}
            </h1>
            <button
              onClick={toggleDarkMode}
              className="p-2 transition-colors rounded-full bg-white/10 hover:bg-white/20"
            >
              {isDarkMode ? (
                <Sun className="w-6 h-6" />
              ) : (
                <Moon className="w-6 h-6" />
              )}
            </button>
          </div>
          <p className="text-lg text-blue-100 sm:text-xl">{profile.title}</p>
          <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-3">
            <div
              className={`p-4 rounded-lg ${
                isDarkMode ? "bg-gray-800" : "bg-white/10"
              } backdrop-blur-sm`}
            >
              <h3 className="text-lg font-semibold text-blue-100">
                Total Students
              </h3>
              <p className="text-3xl font-bold">{students.length}</p>
            </div>
            <div
              className={`p-4 rounded-lg ${
                isDarkMode ? "bg-gray-800" : "bg-white/10"
              } backdrop-blur-sm`}
            >
              <h3 className="text-lg font-semibold text-blue-100">
                Average Grade
              </h3>
              <p className="text-3xl font-bold">A-</p>
            </div>
            <div
              className={`p-4 rounded-lg ${
                isDarkMode ? "bg-gray-800" : "bg-white/10"
              } backdrop-blur-sm`}
            >
              <h3 className="text-lg font-semibold text-blue-100">
                Office Hours
              </h3>
              <p className="text-xl font-bold">{profile.officeHours}</p>
            </div>
          </div>
        </div>

        <div
          className={`rounded-xl shadow-lg overflow-hidden ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            <button
              className={`flex-1 py-3 px-4 text-center transition-colors ${
                activeTab === "class-list"
                  ? isDarkMode
                    ? "bg-gray-700 text-white"
                    : "bg-blue-100 text-blue-600"
                  : isDarkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              onClick={() => setActiveTab("class-list")}
            >
              Manage Class List
            </button>
            <button
              className={`flex-1 py-3 px-4 text-center transition-colors ${
                activeTab === "profile"
                  ? isDarkMode
                    ? "bg-gray-700 text-white"
                    : "bg-blue-100 text-blue-600"
                  : isDarkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              onClick={() => setActiveTab("profile")}
            >
              Update Profile
            </button>
          </div>

          {activeTab === "class-list" && (
            <div className="p-6">
              <h2 className="mb-2 text-2xl font-bold">Class List</h2>
              <p
                className={`mb-4 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Manage your students and their performance
              </p>
              <div className="mb-6">
                <label
                  htmlFor="search"
                  className={`block mb-2 text-sm font-medium ${
                    isDarkMode ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  Search Students
                </label>
                <div className="relative">
                  <Search
                    className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${
                      isDarkMode ? "text-gray-500" : "text-gray-400"
                    }`}
                  />
                  <input
                    id="search"
                    type="text"
                    placeholder="Search by name or course..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className={`pl-10 pr-4 py-2 w-full border rounded-md ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                    } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className={isDarkMode ? "bg-gray-700" : "bg-gray-50"}>
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase"
                      >
                        Course
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase"
                      >
                        Grade
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase"
                      >
                        Contact
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    className={`divide-y ${
                      isDarkMode ? "divide-gray-700" : "divide-gray-200"
                    }`}
                  >
                    {students.map((student) => (
                      <tr
                        key={student.id}
                        className={isDarkMode ? "bg-gray-800" : "bg-white"}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <img
                              className="w-10 h-10 mr-3 rounded-full"
                              src={student.photo}
                              alt={student.name}
                            />
                            <div
                              className={`text-sm font-medium ${
                                isDarkMode ? "text-white" : "text-gray-900"
                              }`}
                            >
                              {student.name}
                            </div>
                          </div>
                        </td>
                        <td
                          className={`px-6 py-4 whitespace-nowrap text-sm ${
                            isDarkMode ? "text-gray-300" : "text-gray-500"
                          }`}
                        >
                          {student.course}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              student.grade.startsWith("A")
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {student.grade}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                          <div className="flex space-x-2">
                            <button
                              className={`text-blue-600 hover:text-blue-800 ${
                                isDarkMode ? "hover:text-blue-400" : ""
                              }`}
                            >
                              <Mail className="w-5 h-5" />
                            </button>
                            <button
                              className={`text-green-600 hover:text-green-800 ${
                                isDarkMode ? "hover:text-green-400" : ""
                              }`}
                            >
                              <Phone className="w-5 h-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "profile" && (
            <div className="p-6">
              <h2 className="mb-2 text-2xl font-bold">Update Profile</h2>
              <p
                className={`mb-4 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Manage your faculty profile information
              </p>
              <form onSubmit={handleProfileUpdate} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium ${
                        isDarkMode ? "text-gray-400" : "text-gray-700"
                      }`}
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={profile.name}
                      onChange={(e) =>
                        setProfile({ ...profile, name: e.target.value })
                      }
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-white border-gray-300 text-gray-900"
                      } shadow-sm focus:border-blue-500 focus:ring-blue-500`}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="title"
                      className={`block text-sm font-medium ${
                        isDarkMode ? "text-gray-400" : "text-gray-700"
                      }`}
                    >
                      Title
                    </label>
                    <input
                      id="title"
                      type="text"
                      value={profile.title}
                      onChange={(e) =>
                        setProfile({ ...profile, title: e.target.value })
                      }
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-white border-gray-300 text-gray-900"
                      } shadow-sm focus:border-blue-500 focus:ring-blue-500`}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="officeHours"
                      className={`block text-sm font-medium ${
                        isDarkMode ? "text-gray-400" : "text-gray-700"
                      }`}
                    >
                      Office Hours
                    </label>
                    <input
                      id="officeHours"
                      type="text"
                      value={profile.officeHours}
                      onChange={(e) =>
                        setProfile({ ...profile, officeHours: e.target.value })
                      }
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-white border-gray-300 text-gray-900"
                      } shadow-sm focus:border-blue-500 focus:ring-blue-500`}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium ${
                        isDarkMode ? "text-gray-400" : "text-gray-700"
                      }`}
                    >
                      Contact Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={profile.email}
                      onChange={(e) =>
                        setProfile({ ...profile, email: e.target.value })
                      }
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-white border-gray-300 text-gray-900"
                      } shadow-sm focus:border-blue-500 focus:ring-blue-500`}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className={`block text-sm font-medium ${
                        isDarkMode ? "text-gray-400" : "text-gray-700"
                      }`}
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={profile.phone}
                      onChange={(e) =>
                        setProfile({ ...profile, phone: e.target.value })
                      }
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-white border-gray-300 text-gray-900"
                      } shadow-sm focus:border-blue-500 focus:ring-blue-500`}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="office"
                      className={`block text-sm font-medium ${
                        isDarkMode ? "text-gray-400" : "text-gray-700"
                      }`}
                    >
                      Office Location
                    </label>
                    <input
                      id="office"
                      type="text"
                      value={profile.office}
                      onChange={(e) =>
                        setProfile({ ...profile, office: e.target.value })
                      }
                      className={`mt-1 block w-full rounded-md ${
                        isDarkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-white border-gray-300 text-gray-900"
                      } shadow-sm focus:border-blue-500 focus:ring-blue-500`}
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className={`w-full sm:w-auto px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                      isDarkMode
                        ? "bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500"
                        : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    }`}
                  >
                    Update Profile
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnhancedFacultyInterface;
