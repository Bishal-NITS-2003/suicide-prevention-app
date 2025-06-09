import { RiContactsLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { LuSchool } from "react-icons/lu";
import Navbar from "@/components/navbar";

export default function SignUpPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FEF6EF]">
      <Navbar />
      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-lg p-12 w-full max-w-2xl my-4 relative">
        {/* Form Header */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Create Your Account
        </h1>

        {/* Form */}
        <form className="flex flex-col gap-5">
          {/* Name and Email row */}
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-1">
              <label className="block text-gray-700 mb-2">Full Name</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <RiContactsLine />
                </div>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="p-3 pl-10 border border-gray-300 rounded w-full text-gray-800"
                />
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <MdEmail />
                </div>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="p-3 pl-10 border border-gray-300 rounded w-full text-gray-800"
                />
              </div>
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700 mb-2">Phone Number</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <FaPhoneAlt />
              </div>
              <input
                type="tel"
                placeholder="+91 12345 67890"
                className="p-3 pl-10 border border-gray-300 rounded w-full text-gray-800"
              />
            </div>
          </div>

          {/* Institute and City */}
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-1">
              <label className="block text-gray-700 mb-2">
                Select Institute
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <LuSchool />
                </div>
                <select className="p-3 pl-10 border border-gray-300 rounded w-full appearance-none bg-white text-gray-800">
                  <option>Choose your institute</option>
                  <option>Allen</option>
                  <option>Aakash</option>
                  <option>Resonance</option>
                  <option>FIITJEE</option>
                  <option>Narayana</option>
                  <option>Vidyamandir Classes</option>
                  <option>Bansal Classes</option>
                  <option>Motion IIT JEE</option>
                  <option>Career Point</option>
                  <option>T.I.M.E.</option>
                  <option>Sri Chaitanya</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
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
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 mb-2">Institute City</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 ">
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
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                  </svg>
                </div>
                <select className="p-3 pl-10 border border-gray-300 rounded w-full appearance-none bg-white text-gray-800">
                  <option>Choose city</option>
                  <option>Kota</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Chennai</option>
                  <option>Kolkata</option>
                  <option>Hyderabad</option>
                  <option>Bangalore</option>
                  <option>Pune</option>
                  <option>Ahmedabad</option>
                  <option>Jaipur</option>
                  <option>Lucknow</option>
                  <option>Chandigarh</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
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
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Registration ID */}
          <div>
            <label className="block text-gray-700 mb-2">Registration ID</label>
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
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Enter your ID"
                className="p-3 pl-10 border border-gray-300 rounded w-full text-gray-800"
              />
            </div>
          </div>

          {/* Password fields */}
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-1">
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
                  type="password"
                  placeholder="password"
                  className="p-3 pl-10 border border-gray-300 rounded w-full text-gray-800"
                />
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 mb-2">
                Confirm Password
              </label>
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
                  type="password"
                  placeholder="confirm password"
                  className="p-3 pl-10 border border-gray-300 rounded w-full text-gray-800"
                />
              </div>
            </div>
          </div>

          {/* Register button */}
          <button
            type="submit"
            className="bg-[#F7913E] hover:bg-amber-600 cursor-pointer transition-all duration-150 text-white p-3 rounded-md font-medium mt-4 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="8.5" cy="7" r="4"></circle>
              <line x1="20" y1="8" x2="20" y2="14"></line>
              <line x1="23" y1="11" x2="17" y2="11"></line>
            </svg>
            Register
          </button>
        </form>

        {/* Login link */}
        <div className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <a href="#" className="text-blue-600 font-medium">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
}
