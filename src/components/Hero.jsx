import React from "react";
import profileImage from "../assets/sinchan.png";
import ContributionGraph from "./ContributionGraph";

const Hero = () => {
  const repositories = [
    {
      name: "Counter",
      description: "Config files for my GitHub profile.",
      language: " 🔴 Config" + " ✰ 2",
    },
    {
      name: "Python-MyCaptain-Project",
      description: "My captain assignment solutions.",
      language: " 🟡 Python",
    },
    {
      name: "Currency Conveter",
      description: "C++ program solutions.",
      language: " 🟣 C++",
    },
    {
      name: "Mysql_programs",
      description: "Basic to advanced database commands.",
      language: " 🟢 SQL" + " ✰ 2",
    },
    {
      name: "Facebook Clone",
      description: "HTML web development projects.",
      language: " 🟠 HTML" + " ✰ 1",
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6 flex flex-col lg:flex-row gap-8">
      <div className="bg-transparent p-8 rounded-lg shadow-lg w-full lg:w-1/4 mb-6 lg:mb-0">
        <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gray-700 mb-4 mx-auto">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-2xl font-bold text-center mb-1">Satyendra Singh</h1>
        <p className="text-sm text-gray-400 text-center mb-2">
          username · pronoun
        </p>
        <p className="text-gray-300 text-center mb-4">
          Passionate Web Developer.
        </p>

        <button className="bg-gray-700 px-6 py-2 rounded-md hover:bg-gray-600 text-sm w-full mb-4">
          Edit Profile
        </button>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 text-blue-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"
              />
            </svg>

            <a
              href="https://www.linkedin.com/in/satyendra-singh-8b265a255"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn Profile
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 text-blue-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10,17.55,8.23,19.27a2.47,2.47,0,0,1-3.5-3.5l4.54-4.55a2.46,2.46,0,0,1,3.39-.09l.12.1a1,1,0,0,0,1.4-1.43A2.75,2.75,0,0,0,14,9.59a4.46,4.46,0,0,0-6.09.22L3.31,14.36a4.48,4.48,0,0,0,6.33,6.33L11.37,19A1,1,0,0,0,10,17.55ZM20.69,3.31a4.49,4.49,0,0,0-6.33,0L12.63,5A1,1,0,0,0,14,6.45l1.73-1.72a2.47,2.47,0,0,1,3.5,3.5l-4.54,4.55a2.46,2.46,0,0,1-3.39.09l-.12-.1a1,1,0,0,0-1.4,1.43,2.75,2.75,0,0,0,.23.21,4.47,4.47,0,0,0,6.09-.22l4.55-4.55A4.49,4.49,0,0,0,20.69,3.31Z"
              />
            </svg>

            <a
              href="https://satyendra9580.github.io/Personal-Portfolio-using-React/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Links
            </a>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-300">
            <span className="font-bold">0</span> followers ·{" "}
            <span className="font-bold">0</span> following
          </p>
        </div>
        <div className="mt-6 mx-auto w-2/3 border-t border-gray-600"></div>
      </div>

      <div className="bg-transparent p-8 rounded-lg shadow-lg w-full lg:w-2/3">
        <h2 className="text-xl font-bold mb-6">Popular Repositories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repositories.map((repo, index) => (
            <div
              key={index}
              className="bg-transparent p-6 rounded-lg border border-gray-700 shadow-md hover:bg-gray-600 transition"
            >
              <div className="flex items-center space-x-2">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    fill="white"
                    fillRule="evenodd"
                    d="M3 2.75A2.75 2.75 0 015.75 0h14.5a.75.75 0 01.75.75v20.5a.75.75 0 01-.75.75h-6a.75.75 0 010-1.5h5.25v-4H6A1.5 1.5 0 004.5 18v.75c0 .716.43 1.334 1.05 1.605a.75.75 0 01-.6 1.374A3.25 3.25 0 013 18.75v-16zM19.5 1.5V15H6c-.546 0-1.059.146-1.5.401V2.75c0-.69.56-1.25 1.25-1.25H19.5z"
                  />
                  <path
                    fill="white"
                    d="M7 18.25a.25.25 0 01.25-.25h5a.25.25 0 01.25.25v5.01a.25.25 0 01-.397.201l-2.206-1.604a.25.25 0 00-.294 0L7.397 23.46a.25.25 0 01-.397-.2v-5.01z"
                  />
                </svg>

                <h3 className="font-semibold text-lg text-blue-500 flex items-center">
                  {repo.name}
                  <span className="ml-6 text-sm text-gray-500 bg-transparent border-2 border-gray-500 rounded-full px-3 py-0">
                    Public
                  </span>
                </h3>
              </div>
              <p className="text-sm text-gray-300 mb-2 mt-3">{repo.description}</p>
              <p className="text-xs text-gray-400">{repo.language}</p>
            </div>
            
          ))}
        </div>
        {/* <div className="mt-10 p-2 rounded-lg border border-gray-700 shadow-md transition">{<ContributionGraph/>}</div> */}
      </div>
     
    </div>
    
  );
};

export default Hero;
