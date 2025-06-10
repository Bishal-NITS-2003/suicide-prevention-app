"use client";

import { IoIosLogIn } from "react-icons/io";
import { useRouter } from "next/navigation";
import { MdEmail } from "react-icons/md";
import Navbar from "@/components/navbar";

export default function TestsPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#FEF6EF]">
      <Navbar />
      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-lg p-12 w-full max-w-2xl my-4 relative">
        {/* Form Header */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Institute Login
        </h1>
        {/* Form */}
        <form
          className="flex flex-col gap-5"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* UserId or Email */}
          <div>
            <label className="block text-gray-700 mb-2">Institute ID</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <MdEmail />
              </div>
              <input
                name="userIDorEmail"
                placeholder="Enter your Institute ID"
                className="p-3 pl-10 border border-gray-300 rounded w-full text-gray-800"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="p-3 pl-10 border border-gray-300 rounded w-full text-gray-800"
              />
            </div>
          </div>

          {/* Register button */}
          <button
            onClick={() => router.push("/admin/tests")}
            type="submit"
            className="bg-[#F7913E] hover:bg-amber-600 cursor-pointer transition-all duration-150 text-white p-3 rounded-md font-medium mt-4 flex items-center justify-center"
          >
            <IoIosLogIn className="me-2" />
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
