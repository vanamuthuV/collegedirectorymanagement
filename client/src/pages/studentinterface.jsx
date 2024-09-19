import React, { useState } from "react";
import {
  Search,
  User,
  Book,
  Calendar,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Clock,
  ChevronDown,
  ChevronUp,
  Filter,
  Users,
} from "lucide-react";

const dummyStudents = [
  {
    id: 1,
    name: "Alice Johnson",
    department: "Computer Science",
    year: "3rd",
    photo: "/placeholder.svg?height=40&width=40",
    email: "alice@university.edu",
    phone: "+1 234 567 8901",
  },
  {
    id: 2,
    name: "Bob Smith",
    department: "Mathematics",
    year: "2nd",
    photo: "/placeholder.svg?height=40&width=40",
    email: "bob@university.edu",
    phone: "+1 234 567 8902",
  },
  {
    id: 3,
    name: "Charlie Brown",
    department: "Physics",
    year: "4th",
    photo: "/placeholder.svg?height=40&width=40",
    email: "charlie@university.edu",
    phone: "+1 234 567 8903",
  },
  {
    id: 4,
    name: "Diana Ross",
    department: "Chemistry",
    year: "1st",
    photo: "/placeholder.svg?height=40&width=40",
    email: "diana@university.edu",
    phone: "+1 234 567 8904",
  },
];

const dummyCourses = [
  {
    id: 1,
    name: "Introduction to Programming",
    code: "CS101",
    grade: "A",
    attendance: "95%",
    credits: 3,
  },
  {
    id: 2,
    name: "Data Structures and Algorithms",
    code: "CS201",
    grade: "B+",
    attendance: "88%",
    credits: 4,
  },
  {
    id: 3,
    name: "Database Management Systems",
    code: "CS301",
    grade: "A-",
    attendance: "92%",
    credits: 3,
  },
  {
    id: 4,
    name: "Web Development",
    code: "CS401",
    grade: "A",
    attendance: "97%",
    credits: 4,
  },
];

const dummyAchievements = [
  { id: 1, title: "Dean's List", year: "2022" },
  { id: 2, title: "Hackathon Winner", year: "2023" },
  { id: 3, title: "Research Paper Published", year: "2023" },
];

const dummyAdvisors = [
  {
    id: 1,
    name: "Dr. Emily Carter",
    department: "Computer Science",
    photo: "/placeholder.svg?height=60&width=60",
    email: "emily.carter@university.edu",
    phone: "+1 234 567 7890",
    officeHours: "Mon, Wed 2-4 PM",
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    department: "Mathematics",
    photo: "/placeholder.svg?height=60&width=60",
    email: "michael.chen@university.edu",
    phone: "+1 234 567 7891",
    officeHours: "Tue, Thu 1-3 PM",
  },
  {
    id: 3,
    name: "Dr. Sarah Johnson",
    department: "Physics",
    photo: "/placeholder.svg?height=60&width=60",
    email: "sarah.johnson@university.edu",
    phone: "+1 234 567 7892",
    officeHours: "Wed, Fri 10 AM-12 PM",
  },
];

export default function EnhancedStudentInterface() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(dummyStudents);
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredResults = dummyStudents.filter(
      (student) =>
        student.name.toLowerCase().includes(query) ||
        student.department.toLowerCase().includes(query) ||
        student.year.toLowerCase().includes(query)
    );
    setSearchResults(filteredResults);
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100 sm:p-8">
      <div className="mx-auto max-w-7xl">
        <header className="p-6 mb-8 bg-white shadow-lg rounded-xl">
          <h1 className="text-3xl font-bold text-blue-600 sm:text-4xl">
            Student Portal
          </h1>
          <p className="mt-2 text-gray-600">Welcome back, John Doe</p>
        </header>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Personal Profile */}
          <div className="space-y-8 lg:col-span-1">
            <div className="overflow-hidden bg-white shadow-lg rounded-xl">
              <div className="p-6 bg-gradient-to-r from-blue-500 to-emerald-500">
                <img
                  src="/placeholder.svg?height=150&width=150"
                  alt="Student"
                  className="w-32 h-32 mx-auto border-4 border-white rounded-full sm:w-40 sm:h-40"
                />
                <h2 className="mt-4 text-2xl font-semibold text-center text-white sm:text-3xl">
                  John Doe
                </h2>
                <p className="mt-2 text-center text-blue-100">
                  Student ID: CS2023001
                </p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <User className="w-5 h-5 mr-3 text-blue-500" />
                    <span className="text-gray-700">
                      Computer Science, 3rd Year
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-blue-500" />
                    <span className="text-gray-700">
                      john.doe@university.edu
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-blue-500" />
                    <span className="text-gray-700">+1 234 567 8900</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-blue-500" />
                    <span className="text-gray-700">San Francisco, CA</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-3 text-blue-500" />
                    <span className="text-gray-700">
                      Joined: September 2021
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Achievements */}
            <div className="overflow-hidden bg-white shadow-lg rounded-xl">
              <div className="p-4 text-white bg-blue-600">
                <h3 className="text-xl font-semibold">Achievements</h3>
              </div>
              <div className="p-4">
                {dummyAchievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="flex items-center justify-between py-2 border-b last:border-b-0"
                  >
                    <div>
                      <h4 className="font-medium text-gray-800">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {achievement.year}
                      </p>
                    </div>
                    <GraduationCap className="w-6 h-6 text-emerald-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-8 lg:col-span-2">
            {/* Academic Information */}
            <div className="overflow-hidden bg-white shadow-lg rounded-xl">
              <div className="flex items-center justify-between p-4 text-white bg-emerald-600">
                <h3 className="text-xl font-semibold">Academic Information</h3>
                <div className="text-emerald-100">
                  <span className="font-semibold">GPA:</span> 3.8/4.0
                </div>
              </div>
              <div className="p-4">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                          Course
                        </th>
                        <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                          Code
                        </th>
                        <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                          Grade
                        </th>
                        <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                          Attendance
                        </th>
                        <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                          Credits
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {dummyCourses.map((course) => (
                        <tr key={course.id}>
                          <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                            {course.name}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {course.code}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {course.grade}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {course.attendance}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {course.credits}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Contact Faculty Advisors */}
            <div className="overflow-hidden bg-white shadow-lg rounded-xl">
              <div className="p-4 text-white bg-blue-600">
                <h3 className="text-xl font-semibold">
                  Contact Faculty Advisors
                </h3>
              </div>
              <div className="p-4 space-y-6">
                {dummyAdvisors.map((advisor) => (
                  <div
                    key={advisor.id}
                    className="flex flex-col items-center p-4 space-y-4 transition duration-300 ease-in-out rounded-lg sm:flex-row sm:items-start sm:space-y-0 sm:space-x-6 bg-gray-50 hover:bg-gray-100"
                  >
                    <img
                      src={advisor.photo}
                      alt={advisor.name}
                      className="w-24 h-24 rounded-full"
                    />
                    <div className="flex-grow text-center sm:text-left">
                      <h4 className="text-xl font-semibold text-gray-800">
                        {advisor.name}
                      </h4>
                      <p className="text-gray-600">{advisor.department}</p>
                      <p className="mt-2 text-sm text-gray-500">
                        Office Hours: {advisor.officeHours}
                      </p>
                      <div className="flex flex-col mt-4 space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
                        <a
                          href={`mailto:${advisor.email}`}
                          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          <Mail className="w-5 h-5 mr-2" />
                          Email
                        </a>
                        <a
                          href={`tel:${advisor.phone}`}
                          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          <Phone className="w-5 h-5 mr-2" />
                          Call
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Search for Other Students */}
            <div className="overflow-hidden bg-white shadow-lg rounded-xl">
              <div className="p-4 text-white bg-emerald-600">
                <h3 className="text-xl font-semibold">Search for Students</h3>
              </div>
              <div className="p-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by name, department, or year..."
                    className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                  <Search className="absolute left-3 top-2.5 text-gray-400" />
                  <button
                    className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <Filter className="w-5 h-5" />
                  </button>
                </div>
                {showFilters && (
                  <div className="p-2 mt-2 rounded-lg bg-gray-50">
                    <p className="mb-2 text-sm font-medium text-gray-700">
                      Filters:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <button className="px-3 py-1 text-sm text-blue-800 bg-blue-100 rounded-full hover:bg-blue-200">
                        Computer Science
                      </button>
                      <button className="px-3 py-1 text-sm rounded-full bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                        Mathematics
                      </button>
                      <button className="px-3 py-1 text-sm rounded-full bg-amber-100 text-amber-800 hover:bg-amber-200">
                        Physics
                      </button>
                      <button className="px-3 py-1 text-sm text-purple-800 bg-purple-100 rounded-full hover:bg-purple-200">
                        Chemistry
                      </button>
                    </div>
                  </div>
                )}
                <div className="mt-4 space-y-2">
                  {searchResults.map((student) => (
                    <div
                      key={student.id}
                      className="flex items-center p-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50"
                    >
                      <img
                        src={student.photo}
                        alt={student.name}
                        className="w-12 h-12 mr-4 rounded-full"
                      />
                      <div className="flex-grow">
                        <h4 className="font-medium text-gray-800">
                          {student.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {student.department}, {student.year} Year
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 text-blue-600 rounded-full hover:bg-blue-100">
                          <Mail className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-green-600 rounded-full hover:bg-green-100">
                          <Phone className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
