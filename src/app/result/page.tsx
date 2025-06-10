"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function ResultPage() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 text-black">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
        <p className="text-lg mb-6">
          Your wellness check has been successfully submitted.
        </p>
        <button
          onClick={handleNext}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}
