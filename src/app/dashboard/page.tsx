"use client";
import Link from "next/link";

export default function DashboardPage() {
  const Logout = async () => {
    try {
      const response = await fetch("/api/v1/signOut", {
        method: "Get",
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Logout failed:", errorData.message);
        return;
      }
      const data = await response.json();
      console.log(data.message); // Sign out successfully
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      window.location.href = "/signIn";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-100 text-black">
      <div className="text-center p-10 bg-white rounded-2xl shadow-xl max-w-md w-full">
        <h1 className="text-3xl font-bold text-purple-700 mb-4">
          Welcome to PRB
        </h1>
        <p className="text-black mb-6">
          Personal Risk Barometer — Helping You Reflect on Mental Wellness
        </p>
        <div className="flex flex-col items-center space-y-4">
          <Link href="/Testpage">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition font-medium text-lg">
              Start Test
            </button>
          </Link>
          <button
            onClick={Logout}
            type="button"
            className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition font-medium text-sm"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
