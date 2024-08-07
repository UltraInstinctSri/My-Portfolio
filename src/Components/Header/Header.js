import React, { useState } from "react";
import { PAGE_URLS } from "../../AppConfig/appConfig";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-gray-900">
      <div className="mx-auto max-w-9xl sm:px-6 lg:px-0 lg:mx-20">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {/* Icon when menu is closed */}
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center mr-8">
              <p className="text-4xl font-mono text-white">
                Srijan
                <span style={{ fontSize: "30px" }} className="text-teal-500">
                  .
                </span>
              </p>
            </div>
            <div className="hidden sm:justify-center sm:block lg:ml-96">
              <div className="flex space-x-2 lg:ml-64">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <Link
                  to={PAGE_URLS.HOMEPAGE}
                  className={`rounded-md px-3 py-2 text-md font-medium ${
                    location.pathname === PAGE_URLS.HOMEPAGE
                      ? "text-green-300 underline"
                      : "text-white hover:text-green-300"
                  }`}
                >
                  Home
                </Link>
                <Link
                  to={PAGE_URLS.PROJECTS}
                  className={`rounded-md px-3 py-2 text-md font-medium ${
                    location.pathname === PAGE_URLS.PROJECTS
                      ? "text-green-300 underline"
                      : "text-white hover:text-green-300"
                  }`}
                >
                  Projects
                </Link>
                <Link
                  to={PAGE_URLS.RESUME}
                  className={`rounded-md px-3 py-2 text-md font-medium ${
                    location.pathname === PAGE_URLS.RESUME
                      ? "text-green-300 underline"
                      : "text-white hover:text-green-300"
                  }`}
                >
                  Resume
                </Link>
                <Link
                  to={PAGE_URLS.CONTACT_ME}
                  className={`rounded-md px-3 py-2 text-md font-medium ${
                    location.pathname === PAGE_URLS.CONTACT_ME
                      ? "text-green-300 underline"
                      : "text-white hover:text-green-300"
                  }`}
                >
                  Contact Me
                </Link>
                <button
                  href="#"
                  className="rounded-full px-3 py-2 text-sm font-medium bg-green-400 hover:bg-green-500"
                >
                  Hire Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {menuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 justify-center">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <a
              href="#"
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              aria-current="page"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Team
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Projects
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Calendar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
