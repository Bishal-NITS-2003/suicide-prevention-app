import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[100vh] bg-gradient-to-br from-[#ffe5b4] via-[#ffd1a3] to-[#ffb380] px-6 py-10 text-center">
      <h1 className="text-5xl sm:text-6xl font-extrabold text-orange-800 drop-shadow-lg mb-4 tracking-tight">
        Welcome to{" "}
        <span className="text-white bg-orange-600 px-3 py-1 rounded-[12px] shadow">
          PRB
        </span>
      </h1>

      <p className="text-lg sm:text-xl text-orange-900 font-medium max-w-xl leading-relaxed mb-10">
        <span className="italic font-semibold">Pause. Reflect. Breathe.</span>
        <br />
        Your journey to mental wellness starts here
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Link href="/signIn">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold shadow transition-all duration-200">
            Sign In
          </button>
        </Link>

        <Link href="/signUp">
          <button className="bg-white hover:bg-orange-100 text-orange-700 px-6 py-3 rounded-full font-semibold shadow border border-orange-300 transition-all duration-200">
            Sign Up
          </button>
        </Link>

        <Link href="/dashboard">
          <button className="bg-orange-300 hover:bg-orange-400 text-white px-6 py-3 rounded-full font-semibold shadow transition-all duration-200">
            Go to Dashboard
          </button>
        </Link>
      </div>

      <p className="mt-12 text-sm text-orange-900 opacity-80">
        © 2025 PRB — All rights reserved
      </p>
    </div>
  );
}
