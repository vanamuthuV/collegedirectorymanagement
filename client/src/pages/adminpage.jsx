import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Plus, Edit, Trash2, Search } from "react-feather";

// Dummy data for records
const initialRecords = [
  {
    id: 1,
    name: "John Doe",
    type: "Student",
    department: "Computer Science",
    year: "3rd",
    gpa: 3.8,
  },
  {
    id: 2,
    name: "Jane Smith",
    type: "Faculty",
    department: "Mathematics",
    position: "Professor",
    courses: 3,
  },
  {
    id: 3,
    name: "Bob Johnson",
    type: "Student",
    department: "Physics",
    year: "2nd",
    gpa: 3.5,
  },
  {
    id: 4,
    name: "Alice Brown",
    type: "Faculty",
    department: "Chemistry",
    position: "Associate Professor",
    courses: 4,
  },
];

// Dummy data for charts
const enrollmentData = [
  { name: "2018", students: 1000 },
  { name: "2019", students: 1200 },
  { name: "2020", students: 1100 },
  { name: "2021", students: 1300 },
  { name: "2022", students: 1500 },
];

const facultyLoadData = [
  { name: "Prof. A", courses: 3 },
  { name: "Prof. B", courses: 4 },
  { name: "Prof. C", courses: 2 },
  { name: "Prof. D", courses: 5 },
  { name: "Prof. E", courses: 3 },
];

const departmentDistribution = [
  { name: "Computer Science", value: 400 },
  { name: "Mathematics", value: 300 },
  { name: "Physics", value: 200 },
  { name: "Chemistry", value: 250 },
  { name: "Biology", value: 350 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

const AdminInterface = () => {
  const [records, setRecords] = useState(initialRecords);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("records");
  const [editingRecord, setEditingRecord] = useState(null);
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalFaculty: 0,
    averageGPA: 0,
    averageCourseLoad: 0,
  });

  useEffect(() => {
    calculateStats();
  }, [records]);

  const calculateStats = () => {
    const students = records.filter((r) => r.type === "Student");
    const faculty = records.filter((r) => r.type === "Faculty");
    const totalStudents = students.length;
    const totalFaculty = faculty.length;
    const averageGPA =
      students.reduce((sum, student) => sum + student.gpa, 0) / totalStudents ||
      0;
    const averageCourseLoad =
      faculty.reduce((sum, f) => sum + f.courses, 0) / totalFaculty || 0;

    setStats({
      totalStudents,
      totalFaculty,
      averageGPA: averageGPA.toFixed(2),
      averageCourseLoad: averageCourseLoad.toFixed(1),
    });
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredRecords = records.filter(
    (record) =>
      record.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddRecord = () => {
    const newRecord = {
      id: records.length + 1,
      name: "",
      type: "Student",
      department: "",
      year: "",
      gpa: 0,
      position: "",
      courses: 0,
    };
    setEditingRecord(newRecord);
  };

  const handleEditRecord = (record) => {
    setEditingRecord({ ...record });
  };

  const handleDeleteRecord = (id) => {
    setRecords(records.filter((record) => record.id !== id));
  };

  const handleSaveRecord = (e) => {
    e.preventDefault();
    if (editingRecord.id) {
      setRecords(
        records.map((record) =>
          record.id === editingRecord.id ? editingRecord : record
        )
      );
    } else {
      setRecords([...records, { ...editingRecord, id: records.length + 1 }]);
    }
    setEditingRecord(null);
  };

  return (
    <div className="min-h-screen p-4 text-gray-900 sm:p-6 md:p-8 bg-gray-50 dark:bg-gray-900 dark:text-white">
      <div className="mx-auto space-y-8 max-w-7xl">
        <div className="p-6 text-white rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900">
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Administrator Dashboard
          </h1>
          <p className="text-lg text-blue-100 sm:text-xl">
            Manage records and view analytics
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <div className="p-4 bg-white rounded-lg shadow dark:bg-gray-800">
            <h3 className="mb-2 text-lg font-semibold">Total Students</h3>
            <p className="text-3xl font-bold">{stats.totalStudents}</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow dark:bg-gray-800">
            <h3 className="mb-2 text-lg font-semibold">Total Faculty</h3>
            <p className="text-3xl font-bold">{stats.totalFaculty}</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow dark:bg-gray-800">
            <h3 className="mb-2 text-lg font-semibold">Average GPA</h3>
            <p className="text-3xl font-bold">{stats.averageGPA}</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow dark:bg-gray-800">
            <h3 className="mb-2 text-lg font-semibold">Avg Course Load</h3>
            <p className="text-3xl font-bold">{stats.averageCourseLoad}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow dark:bg-gray-800">
          <div className="flex border-b dark:border-gray-700">
            <button
              className={`flex-1 py-2 px-4 text-center ${
                activeTab === "records"
                  ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200"
                  : ""
              }`}
              onClick={() => setActiveTab("records")}
            >
              Manage Records
            </button>
            <button
              className={`flex-1 py-2 px-4 text-center ${
                activeTab === "dashboard"
                  ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200"
                  : ""
              }`}
              onClick={() => setActiveTab("dashboard")}
            >
              Dashboard
            </button>
          </div>

          {activeTab === "records" && (
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="relative">
                  <Search className="absolute w-4 h-4 text-gray-500 left-3 top-3 dark:text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search records..."
                    className="py-2 pl-10 pr-4 text-gray-900 bg-white border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                </div>
                <button
                  onClick={handleAddRecord}
                  className="px-4 py-2 text-white transition duration-300 rounded-md bg-emerald-500 hover:bg-emerald-600"
                >
                  <Plus className="inline-block mr-2" size={16} />
                  Add Record
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-gray-400">
                        Name
                      </th>
                      <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-gray-400">
                        Type
                      </th>
                      <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-gray-400">
                        Department
                      </th>
                      <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-gray-400">
                        Details
                      </th>
                      <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-gray-400">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
                    {filteredRecords.map((record) => (
                      <tr key={record.id}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                          {record.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                          {record.type}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                          {record.department}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                          {record.type === "Student" ? (
                            <>
                              Year: {record.year} <br />
                              GPA: {record.gpa}
                            </>
                          ) : (
                            <>
                              Position: {record.position} <br />
                              Courses: {record.courses}
                            </>
                          )}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium">
                          <button
                            onClick={() => handleEditRecord(record)}
                            className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            onClick={() => handleDeleteRecord(record.id)}
                            className="ml-4 text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {editingRecord && (
                <div className="p-4 mt-6 bg-white rounded-lg shadow dark:bg-gray-800">
                  <h2 className="mb-4 text-xl font-bold">Edit Record</h2>
                  <form onSubmit={handleSaveRecord}>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Name
                        </label>
                        <input
                          type="text"
                          className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          value={editingRecord.name}
                          onChange={(e) =>
                            setEditingRecord({
                              ...editingRecord,
                              name: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Department
                        </label>
                        <input
                          type="text"
                          className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          value={editingRecord.department}
                          onChange={(e) =>
                            setEditingRecord({
                              ...editingRecord,
                              department: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      {editingRecord.type === "Student" && (
                        <>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                              Year
                            </label>
                            <input
                              type="text"
                              className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                              value={editingRecord.year}
                              onChange={(e) =>
                                setEditingRecord({
                                  ...editingRecord,
                                  year: e.target.value,
                                })
                              }
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                              GPA
                            </label>
                            <input
                              type="number"
                              step="0.01"
                              className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                              value={editingRecord.gpa}
                              onChange={(e) =>
                                setEditingRecord({
                                  ...editingRecord,
                                  gpa: parseFloat(e.target.value),
                                })
                              }
                              required
                            />
                          </div>
                        </>
                      )}
                      {editingRecord.type === "Faculty" && (
                        <>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                              Position
                            </label>
                            <input
                              type="text"
                              className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                              value={editingRecord.position}
                              onChange={(e) =>
                                setEditingRecord({
                                  ...editingRecord,
                                  position: e.target.value,
                                })
                              }
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                              Courses
                            </label>
                            <input
                              type="number"
                              className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                              value={editingRecord.courses}
                              onChange={(e) =>
                                setEditingRecord({
                                  ...editingRecord,
                                  courses: parseInt(e.target.value, 10),
                                })
                              }
                              required
                            />
                          </div>
                        </>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-700"
                    >
                      Save Record
                    </button>
                  </form>
                </div>
              )}
            </div>
          )}

          {activeTab === "dashboard" && (
            <div className="p-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="p-4 bg-white rounded-lg shadow dark:bg-gray-800">
                  <h2 className="mb-4 text-xl font-bold">
                    Enrollment Over the Years
                  </h2>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={enrollmentData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="students"
                        stroke="#8884d8"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="p-4 bg-white rounded-lg shadow dark:bg-gray-800">
                  <h2 className="mb-4 text-xl font-bold">Faculty Load</h2>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={facultyLoadData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="courses" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="p-4 bg-white rounded-lg shadow dark:bg-gray-800">
                  <h2 className="mb-4 text-xl font-bold">
                    Department Distribution
                  </h2>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={departmentDistribution}
                        dataKey="value"
                        nameKey="name"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                      >
                        {departmentDistribution.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminInterface;
