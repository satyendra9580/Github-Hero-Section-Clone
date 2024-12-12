import React, { useState } from "react";
import ProfileImage from "../assets/sinchan.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false); 

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-[#000000] text-white py-3 px-4 shadow-md relative">
      <div className="container mx-auto flex justify-between items-center ml-5">
        <div className="flex items-start">
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg border border-gray-500 bg-transparent hover:bg-gray-800 focus:outline-none ml-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              <a className="p-2 rounded-md hover:bg-gray-800 cursor-pointer">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt="GitHub Logo"
                  className="w-8 rounded-full"
                />
              </a>

              <span className="text-lg font-semibold">Username</span>
            </div>
            <ul
              className={`${
                menuOpen ? "flex flex-col gap-3" : "hidden"
              } md:flex md:flex-row md:space-x-6 space-x-0 space-y-3 text-sm font-medium`}
            >
              <li className="hover:text-gray-400 cursor-pointer mt-3 text-[16px]">
                {" "}
                🕮 Overview
              </li>
              <li className="hover:text-gray-400 cursor-pointer">
                {" "}
                📄 Repositories
              </li>
              <li className="hover:text-gray-400 cursor-pointer">
                {" "}
                📝 Projects
              </li>
              <li className="hover:text-gray-400 cursor-pointer">
                {" "}
                ⃣ Packages
              </li>
              <li className="hover:text-gray-400 cursor-pointer"> ★ Stars</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center space-x-4 relative mr-[-320px]">
          <div className="relative">
            <input
              type={searchOpen ? "text" : "search"}
              className="hidden md:block p-2 rounded-md bg-gray-800 text-white"
              placeholder="Search"
            />
            <button
              onClick={toggleSearch}
              className="md:hidden p-2 rounded-md hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.9994165,16.2923098 L20.8535534,20.1464466 C21.0488155,20.3417088 21.0488155,20.6582912 20.8535534,20.8535534 C20.6582912,21.0488155 20.3417088,21.0488155 20.1464466,20.8535534 L16.2923098,16.9994165 C14.8819612,18.2444908 13.0292099,19 11,19 C6.581722,19 3,15.418278 3,11 C3,6.581722 6.581722,3 11,3 C15.418278,3 19,6.581722 19,11 C19,13.0292099 18.2444908,14.8819612 16.9994165,16.2923098 Z M11,18 C14.8659932,18 18,14.8659932 18,11 C18,7.13400675 14.8659932,4 11,4 C7.13400675,4 4,7.13400675 4,11 C4,14.8659932 7.13400675,18 11,18 Z"
                />
              </svg>
            </button>
          </div>

          {/* Notification Icon */}
          <div className="relative group">
            <button className="p-2 rounded-lg border border-gray-500 bg-transparent hover:bg-gray-800 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.146 3.248a2 2 0 0 1 3.708 0A7.003 7.003 0 0 1 19 10v4.697l1.832 2.748A1 1 0 0 1 20 19h-4.535a3.501 3.501 0 0 1-6.93 0H4a1 1 0 0 1-.832-1.555L5 14.697V10c0-3.224 2.18-5.94 5.146-6.752zM10.586 19a1.5 1.5 0 0 0 2.829 0h-2.83zM12 5a5 5 0 0 0-5 5v5a1 1 0 0 1-.168.555L5.869 17H18.13l-.963-1.445A1 1 0 0 1 17 15v-5a5 5 0 0 0-5-5z"
                />
              </svg>
            </button>
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm rounded-md p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
              Notification
            </div>
          </div>

          {/* Create New (+) Icon */}
          <div className="relative group">
            <button className="p-2 rounded-lg border border-gray-500 bg-transparent hover:bg-gray-800 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 5v14m7-7H5"
                />
              </svg>
            </button>
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm rounded-md px-3 py-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Create New
            </div>
          </div>

          <div className="relative group">
            <button className="p-2 rounded-lg border border-gray-500 bg-transparent hover:bg-gray-800 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 16v-5.6A4.4 4.4 0 0 0 13.6 6H11"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m13 4-2 2 2 2"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                  fill="none"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 16V8"
                />
              </svg>
            </button>
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm rounded-md px-3 py-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Pull Request
            </div>
          </div>

          <div className="relative group">
            <button className="p-2 rounded-lg border border-gray-500 bg-transparent hover:bg-gray-800 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 16 16"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.50002 1C6.21445 1 4.95774 1.38123 3.88882 2.09546C2.8199 2.80969 1.98674 3.82485 1.49478 5.01257C1.00281 6.20029 0.874098 7.50719 1.1249 8.76807C1.37571 10.0289 1.99479 11.1872 2.90383 12.0962C3.81287 13.0052 4.97108 13.6243 6.23196 13.8751C7.49283 14.1259 8.79973 13.9972 9.98745 13.5052C11.1752 13.0133 12.1903 12.1801 12.9046 11.1112C13.6188 10.0423 14 8.78558 14 7.5C14 5.77609 13.3152 4.1228 12.0962 2.90381C10.8772 1.68482 9.22393 1 7.50002 1ZM7.50002 13C6.41223 13 5.34883 12.6775 4.44436 12.0731C3.53989 11.4688 2.83501 10.6097 2.41873 9.60474C2.00244 8.59974 1.89352 7.4939 2.10574 6.427C2.31796 5.36011 2.8418 4.38015 3.61099 3.61096C4.38018 2.84177 5.36013 2.31793 6.42703 2.10571C7.49392 1.89349 8.59977 2.00242 9.60476 2.4187C10.6098 2.83498 11.4688 3.53987 12.0731 4.44434C12.6775 5.34881 13 6.4122 13 7.5C13 8.95869 12.4205 10.3576 11.3891 11.389C10.3576 12.4205 8.95871 13 7.50002 13Z"
                />
                <circle
                  cx="7.50002"
                  cy="7.5"
                  r="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm rounded-md px-3 py-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Issues
            </div>
          </div>

          <img
            src={ProfileImage}
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-10 ${
          menuOpen ? "block" : "hidden"
        }`}
        onClick={closeMenu} 
      >
        <div
          className="fixed top-0 left-0 w-64 h-full bg-[#060606] p-4 text-white"
          onClick={(e) => e.stopPropagation()}
        >
          <a className="p-1 rounded-md hover:bg-gray-800 cursor-pointer">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub Logo"
              className="w-9 rounded-full mt-[-14px]"
            />
          </a>
          {/* Close Button */}
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-transparent hover:bg-gray-700 mt-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <ul className="space-y-4 mt-3">
            <li className="hover:text-gray-400 cursor-pointer">🏠 Home</li>
            <li className="hover:text-gray-400 cursor-pointer">
              ⚫ Pull Requests
            </li>
            <li className="hover:text-gray-400 cursor-pointer">🛠️ Issues</li>
            <li className="hover:text-gray-400 cursor-pointer">🕮 Overview</li>
            <li className="hover:text-gray-400 cursor-pointer">
              📝 Repositories
            </li>
            <li className="hover:text-gray-400 cursor-pointer">📄 Projects</li>
            <li className="hover:text-gray-400 cursor-pointer"> ⃣ Packages</li>
            <li className="hover:text-gray-400 cursor-pointer">★ Stars</li>
          </ul>
          <div className="mt-6 mx-auto w-4/3 border-t border-gray-600"></div>

          <ul className="space-y-4 mt-8">
            <li className="hover:text-gray-400 cursor-pointer">🔍 Explore</li>
            <li className="hover:text-gray-400 cursor-pointer">
              📈 Market Place
            </li>
          </ul>
          <div className="mt-6 mx-auto w-4/3 border-t border-gray-600"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
