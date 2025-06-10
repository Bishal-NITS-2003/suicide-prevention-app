"use client";

import { toast } from "react-toastify";
import Link from "next/link";
import { IoIosLogIn } from "react-icons/io";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import Navbar from "@/components/navbar";

export default function SignInPage() {
  const [formData, setFormData] = useState({
    userIDorEmail: "",
    password: "",
  });
  const [signing, setSigning] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (!formData.userIDorEmail || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }
    setSigning(true);
    try {
      const response = await fetch("/api/v1/signIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.message || "Login failed");
        setSigning(false);
      } else {
        const data = await response.json();
        console.log("Login successful:", data);
        toast.success("Login successful! Redirecting...");
        setTimeout(() => {
          // Redirect to dashboard
          window.location.href = "/dashboard";
        }, 3000); // Redirect after 3 second
        setSigning(false);
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
      toast.error("An error occurred during login");
    } finally {
      setSigning(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#FEF6EF]">
      <Navbar />
      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-lg p-12 w-full max-w-2xl my-4 relative">
        {/* Form Header */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Login to Your Account
        </h1>

        {/* Form */}
        <form
          className="flex flex-col gap-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="block text-gray-700 mb-2">UserID or Email</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <MdEmail />
              </div>
              <input
                name="userIDorEmail"
                placeholder="Enter your UserID or Email"
                value={formData.userIDorEmail}
                onChange={handleChange}
                className="p-3 pl-10 border border-gray-300 rounded w-full text-gray-800"
              />
            </div>
          </div>

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
                value={formData.password}
                onChange={handleChange}
                className="p-3 pl-10 border border-gray-300 rounded w-full text-gray-800"
              />
            </div>
          </div>

          {/* Register button */}
          <button
            onClick={onSubmit}
            type="submit"
            disabled={signing}
            className="bg-[#F7913E] hover:bg-amber-600 cursor-pointer transition-all duration-150 text-white p-3 rounded-md font-medium mt-4 flex items-center justify-center"
          >
            <IoIosLogIn className="me-2" />
            {signing ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Login link */}
        <div className="text-center mt-6 text-gray-600">
          Do not have an account?{" "}
          <Link href="/signUp" className="text-[#F7913E] hover:underline">
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
}
