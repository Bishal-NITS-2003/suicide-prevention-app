"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";

export default function TestsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  // Sample test data
  const tests = [
    {
      id: "TST-00123",
      name: "Weekly Test 5",
      date: "2025-06-17",
      participants: 150,
      status: "Scheduled",
    },
    {
      id: "TST-00124",
      name: "Weekly Test 4",
      date: "2025-06-2",
      participants: 120,
      status: "Pending Results",
    },
    {
      id: "TST-00125",
      name: "Weekly Test 3",
      date: "2025-06-10",
      participants: 145,
      status: "Completed",
    },
    {
      id: "TST-00126",
      name: "Weekly Test 2",
      date: "2025-03-25",
      participants: 88,
      status: "Completed",
    },
    {
      id: "TST-00127",
      name: "Weekly Test 1",
      date: "2025-03-10",
      participants: 200,
      status: "Completed",
    },
  ];

  // Filter tests based on search term
  const filteredTests = tests.filter(
    (test) =>
      test.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      test.id.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Get status badge styling
  const getStatusBadge = (status: any) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "Scheduled":
        return "bg-blue-100 text-blue-700";
      case "Pending Results":
        return "bg-amber-100 text-amber-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-[#FEF6EF]">
      {/* Navigation */}
      <Navbar bgColor="white" shadow="shadow-sm " notifications={true} />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto mt-8 bg-white rounded-lg shadow-md p-8 mb-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Test Management</h2>

          <button className="bg-[#F7913E] text-white px-4 py-2 rounded-md flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="16" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
            Schedule New Test
          </button>
        </div>

        <div className="flex justify-between items-center mb-4">
          {/* Search Bar */}
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-400"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search tests by name or ID..."
              className="pl-10 text-gray-800 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filter Dropdown */}
          <div className="relative">
            <button className="px-4 py-2 border text-gray-800 border-gray-300 rounded-md bg-white flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
              </svg>
              All Statuses
            </button>
          </div>
        </div>

        {/* Tests Table */}
        <div className="overflow-x-auto mt-4">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-4 py-2 text-gray-600 font-medium rounded-tl-lg">
                  TEST NAME
                </th>
                <th className="px-4 py-2 text-gray-600 font-medium">TEST ID</th>
                <th className="px-4 py-2 text-gray-600 font-medium">
                  DATE SCHEDULED
                </th>
                <th className="px-4 py-2 text-gray-600 font-medium">
                  PARTICIPANTS
                </th>
                <th className="px-4 py-2 text-gray-600 font-medium">STATUS</th>
                <th className="px-4 py-2 text-gray-600 font-medium rounded-tr-lg">
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredTests.map((test) => (
                <tr key={test.id} className="hover:bg-gray-50">
                  <td
                    onClick={() => router.push("/admin/testDetails")}
                    className="px-4 py-4 font-medium text-gray-800 cursor-pointer hover:text-blue-600"
                  >
                    {test.name}
                  </td>
                  <td className="px-4 py-4 text-gray-500">{test.id}</td>
                  <td className="px-4 py-4 text-gray-500">{test.date}</td>
                  <td className="px-4 py-4 text-gray-500">
                    {test.participants}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(test.status)}`}
                    >
                      {test.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => router.push("/admin/testDetails")}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </button>
                      <button className="text-gray-500 hover:text-gray-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 6h18" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <p className="text-sm text-gray-500">Showing 1-5 of 100</p>
          <div className="flex gap-1">
            <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded text-gray-500 hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded bg-gray-50 text-gray-800">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded text-gray-500 hover:bg-gray-100">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded text-gray-500 hover:bg-gray-100">
              3
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded text-gray-500 hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
