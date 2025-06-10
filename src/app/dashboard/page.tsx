"use client";

import Link from "next/link";

import { Play } from "lucide-react";
import Navbar from "@/app/components/Navbar";

export default function DashboardPage() {
  const handleLogout = async () => {
    try {
      const response = await fetch("/api/v1/signOut", {
        method: "GET",
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Logout failed:", errorData.message);
        return;
      }

      const data = await response.json();
      console.log(data.message);

      // Redirect only after successful logout
      window.location.href = "/signIn";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar onLogout={handleLogout} />

      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fef6ef] p-8 space-y-20">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-black text-center tracking-wider leading-tight">
          Pause <span className="mx-2 text-[#f79848]">.</span> Reflect{" "}
          <span className="mx-2 text-[#f79848]">.</span> Breathe
          <span className="text-[#f79848] block text-xl mt-3 italic font-light tracking-wide">
            Students
          </span>
        </h2>

        {/* Welcome Card */}
        <div className="bg-gradient-to-br from-[#fbe8d3] to-[#f7caa0] rounded-3xl shadow-xl max-w-lg w-full p-12 text-center space-y-8 border border-[#f7a955]">
          <h1 className="text-5xl font-extrabold text-black drop-shadow-sm">
            Welcome to PRB
          </h1>
          <p className="text-[#4a4a4a] text-lg max-w-md mx-auto leading-relaxed font-medium">
            <strong>Pause Reflect Breath</strong> — Helping you reflect on your
            mental wellness with calm and clarity.
          </p>

          <div className="flex flex-col gap-6 mt-8 items-center">
            <Link href="/Testpage" passHref>
              <button
                className="flex items-center justify-center gap-3 bg-[#f7a955] hover:bg-[#f99822] 
                     text-white px-8 py-3 rounded-xl shadow-md text-xl font-semibold tracking-wide
                     transition-colors duration-300 active:scale-95"
                aria-label="Start Test"
              >
                <Play size={24} />
                Start Test
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
