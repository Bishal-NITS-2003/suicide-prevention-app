"use client";

import { useState } from "react";
import { SlCalender } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "@/components/navbar";

export default function TestDetailsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample test data
  const testResults = [
    {
      id: "2145125",
      name: "John Doe",
      institute: "Allen, Guwahati",
      score: 45,
      riskLevel: "Low Risk",
    },
    {
      id: "2145126",
      name: "Jane Smith",
      institute: "Allen, Guwahati",
      score: 78,
      riskLevel: "Medium Risk",
    },
    {
      id: "2145127",
      name: "Alice Johnson",
      institute: "Allen, Guwahati",
      score: 92,
      riskLevel: "High Risk",
    },
    {
      id: "2145128",
      name: "Robert Brown",
      institute: "Allen, Guwahati",
      score: 32,
      riskLevel: "Low Risk",
    },
    {
      id: "2145129",
      name: "Emily Davis",
      institute: "Allen, Guwahati",
      score: 65,
      riskLevel: "Medium Risk",
    },
    {
      id: "2145130",
      name: "Michael Wilson",
      institute: "Allen, Guwahati",
      score: 88,
      riskLevel: "High Risk",
    },
    {
      id: "2145131",
      name: "Sarah Miller",
      institute: "Allen, Guwahati",
      score: 25,
      riskLevel: "Low Risk",
    },
    {
      id: "2145132",
      name: "David Garcia",
      institute: "Allen, Guwahati",
      score: 55,
      riskLevel: "Medium Risk",
    },
    {
      id: "2145133",
      name: "Linda Rodriguez",
      institute: "Allen, Guwahati",
      score: 95,
      riskLevel: "High Risk",
    },
  ];

  // Sort test results by score in descending order
  const sortedResults = [...testResults].sort((a, b) => b.score - a.score);

  // Filter students based on search term
  const filteredResults = sortedResults.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.institute.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.id.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Get the appropriate color for risk level
  const getRiskLevelColor = (riskLevel: any) => {
    switch (riskLevel) {
      case "High Risk":
        return "bg-red-100 text-red-600";
      case "Medium Risk":
        return "bg-amber-100 text-amber-600";
      case "Low Risk":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  // Get the appropriate text color for score
  const getScoreColor = (score: any) => {
    if (score < 50) return "text-green-500";
    if (score < 80) return "text-amber-500";
    return "text-red-500";
  };

  return (
    <div className="min-h-screen bg-[#FEF6EF]">
      {/* Navigation */}
      <Navbar bgColor="white" shadow="shadow-sm " notifications={true} />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto mt-8 bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">AI Test Results</h1>

          {/* Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search students..."
              className="pl-10 pr-4 py-2 text-gray-500 border border-gray-300 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Results Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-amber-50 text-left">
                <th className="px-4 py-3 text-gray-600 font-medium rounded-tl-lg">
                  STUDENT NAME
                </th>
                <th className="px-4 py-3 text-gray-600 font-medium">
                  REGISTRATION ID
                </th>
                <th className="px-4 py-3 text-gray-600 font-medium">
                  RISK SCORE
                </th>
                <th className="px-4 py-3 text-gray-600 font-medium">
                  RISK LEVEL
                </th>
                <th className="px-4 py-3 text-gray-600 font-medium rounded-tr-lg">
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredResults.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4">
                    <div className="font-medium text-gray-800">
                      {student.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {student.institute}
                    </div>
                  </td>
                  <td className="px-4 py-4 text-gray-500">{student.id}</td>
                  <td
                    className={`px-4 py-4 font-medium ${getScoreColor(student.score)}`}
                  >
                    {student.score}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getRiskLevelColor(student.riskLevel)}`}
                    >
                      {student.riskLevel}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <button
                        className="text-gray-500 hover:text-gray-700"
                        title="View Details"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </button>
                      <button
                        className="text-green-500 hover:text-green-700"
                        title="Contact Student"
                      >
                        <FaWhatsapp className="h-5 w-5" />
                      </button>
                      <button
                        title="Schedule Councelling Session"
                        className="text-red-500 hover:text-red-700"
                      >
                        {/* // Svg for scheduling councelling session */}
                        <SlCalender />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
