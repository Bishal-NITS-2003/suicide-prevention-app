"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function ResultPage() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#ffe5b4] via-[#ffd1a3] to-[#ffb380] text-black">
      <div className="bg-white p-10 rounded-3xl shadow-2xl text-center max-w-md w-full">
        <h1 className="text-4xl font-extrabold text-orange-800 mb-4 drop-shadow-md">
          Thank You!
        </h1>
        <p className="text-lg text-orange-900 mb-6 leading-relaxed">
          Your wellness check has been <br className="sm:hidden" />
          successfully submitted ✨
        </p>
        <button
          onClick={handleNext}
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md transition-all duration-200"
        >
          Next
        </button>
      </div>
    </div>
  );
}
