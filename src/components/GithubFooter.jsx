import React from "react";

const GitHubFooter = () => {
  return (
    <footer className="bg-transparent text-gray-400 py-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm">
          <span>© {new Date().getFullYear()} GitHub, Inc.</span>
        </div>
        <nav className="flex space-x-6 mt-4 md:mt-0">
          <a href="" className="hover:text-white">
            Terms
          </a>
          <a href="" className="hover:text-white">
            Privacy
          </a>
          <a href="" className="hover:text-white">
            Security
          </a>
          <a href="" className="hover:text-white">
            Status
          </a>
          <a href="" className="hover:text-white">
            Docs
          </a>
        </nav>
        <div className="text-sm mt-4 md:mt-0">
          <a href="" className="hover:text-white">
            Contact GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default GitHubFooter;
