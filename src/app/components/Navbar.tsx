"use client";
import Link from "next/link";
import { LogOut, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar({ onLogout }: { onLogout: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#fae9d5] shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-black">
          PRB
        </Link>

        <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <Link href="/dashboard" className="hover:text-purple-600 transition">
            Dashboard
          </Link>
          <Link href="/Testpage" className="hover:text-purple-600 transition">
            Test
          </Link>
          <Link href="/about" className="hover:text-purple-600 transition">
            About
          </Link>
          <button
            onClick={onLogout}
            className="flex items-center gap-1 bg-[#ff9f32] text-white px-4 py-2 rounded hover:bg-[#fac07e] transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={28} />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col gap-4 text-gray-700 font-medium">
          <Link
            href="/dashboard"
            className="px-4"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            href="/Testpage"
            className="px-4"
            onClick={() => setIsOpen(false)}
          >
            Test
          </Link>
          <Link href="/about" className="px-4" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <button
            onClick={() => {
              setIsOpen(false);
              onLogout();
            }}
            className="text-left px-4 text-red-600"
          >
            <LogOut size={18} className="inline mr-2" />
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
