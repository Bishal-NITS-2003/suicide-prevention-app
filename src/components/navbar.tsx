import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-8 py-4 flex items-center justify-between">
      <div className="font-bold text-black text-2xl">prb</div>
      <div className="flex items-center gap-6">
        <Link href="/" className="text-gray-700 hover:text-gray-900">
          Home
        </Link>
        <Link href="/" className="text-gray-600 hover:text-gray-900">
          Chatbot
        </Link>
        <Link href="/" className="text-gray-600 hover:text-gray-900">
          About Us
        </Link>
        <Link href="/" className="text-gray-600 hover:text-gray-900">
          Contact Us
        </Link>
      </div>
      <button className="text-black bg-gray-300 px-4 py-1 rounded-lg cursor-pointer">
        Sign Up
      </button>
    </nav>
  );
}
