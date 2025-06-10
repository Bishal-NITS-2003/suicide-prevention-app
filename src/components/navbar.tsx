import Link from "next/link";
import { useState } from "react";

function Navbar({ bgColor = " ", shadow = " ", notifications = false }) {
  const bgClass = bgColor ? `bg-${bgColor}` : "";
  const [showNotifications, setShowNotifications] = useState(false);
  return (
    <nav
      className={
        "px-6 py-4 flex items-center justify-between w-full " + shadow + bgClass
      }
    >
      <div className="font-bold text-2xl text-gray-800">prb</div>

      <div className="flex items-center gap-8">
        <Link href={"/"} className="text-gray-500 hover:text-gray-800">
          Home
        </Link>
        <span className="text-gray-500 hover:text-gray-800">Audio</span>
        <span className="text-gray-500 hover:text-gray-800">Video</span>
        <span className="text-gray-500 hover:text-gray-800">Chatbot</span>
      </div>
      <div className="flex items-center gap-4">
        <button
          className="relative"
          onClick={() => setShowNotifications((prev) => !prev)}
          aria-label="Show notifications"
        >
          <div className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
            2
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
        </button>
        {showNotifications && notifications && (
          <div className="absolute right-0 mt-48 mr-10 w-100 bg-white border border-gray-200 rounded shadow-lg z-50">
            <div className="p-4 border-b font-semibold text-gray-700 flex items-center justify-between">
              Notifications
              <button
                onClick={() => setShowNotifications(false)}
                aria-label="Close notifications"
                className="ml-2 text-gray-400 hover:text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul>
              {/* To show 3 students have high risk   */}
              <li className="p-4 border-b text-red-600">
                3 students have High Risk. Need of immediate councelling
              </li>
              <li className="p-4 text-amber-600">
                3 students with Medium Risk. Might need a councelling later
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
