"use client";

export default function Dashboard() {
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
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] items-center sm:items-start">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-lg">Welcome to your dashboard!</p>
        <button
          onClick={Logout}
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Logout
        </button>
      </main>
    </div>
  );
}
