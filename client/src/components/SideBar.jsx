import { Link } from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BsListCheck } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

const SideBar = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [showLabels, setShowLabels] = useState(!isMinimized);

  const toggleSidebar = () => {
    setIsMinimized(!isMinimized);
  };

  useEffect(() => {
    if (!isMinimized) {
      const timer = setTimeout(() => setShowLabels(true), 200);
      return () => clearTimeout(timer);
    } else {
      setShowLabels(false);
    }
  }, [isMinimized]);

  return (
    <div
      className={`fixed top-0 left-0 z-10 mt-16 ${isMinimized ? "w-16" : "w-52"
        } h-screen bg-gray-900 text-gray-200 shadow-xl transition-[width,background-color] duration-500 ease-in-out`}
    >
      <div
        className={`flex items-center justify-start px-4 py-3 ${isMinimized ? "justify-center" : ""
          }`}
      >
        <button
          onClick={toggleSidebar}
          className="text-gray-200 hover:text-violet-600 transition-colors duration-300"
        >
          {isMinimized ? <FaBars className="h-6 w-6" /> : <FaTimes className="h-6 w-6" />}
        </button>
      </div>

      {/* Links Section */}
      <ul
        className={`mt-4 flex flex-col ${isMinimized ? "items-center" : ""
          } transition-opacity duration-500`}
      >
        <Link to="/">
          <li
            className={`px-4 py-3 flex items-center gap-3 hover:bg-violet-600 cursor-pointer text-lg transition-colors duration-300 ${isMinimized ? "justify-center gap-0" : ""
              }`}
          >
            <RiDashboardLine className="h-7 w-7" />
            {!isMinimized && showLabels && (
              <span className="whitespace-nowrap opacity-100 transition-opacity duration-500">
                Home
              </span>
            )}
          </li>
        </Link>
        <Link to="movie">
          <li
            className={`px-4 py-3 flex items-center gap-3 hover:bg-violet-600 cursor-pointer text-lg transition-colors duration-300 ${isMinimized ? "justify-center gap-0" : ""
              }`}
          >
            <AiOutlineAppstoreAdd className="h-7 w-7" />
            {!isMinimized && showLabels && (
              <span className="whitespace-nowrap opacity-100 transition-opacity duration-500">
                Add Movie
              </span>
            )}
          </li>
        </Link>
        <Link to="genre">
          <li
            className={`px-4 py-3 flex items-center gap-3 hover:bg-violet-600 cursor-pointer text-lg transition-colors duration-300 ${isMinimized ? "justify-center gap-0" : ""
              }`}
          >
            <BsListCheck className="h-7 w-7" />
            {!isMinimized && showLabels && (
              <span className="whitespace-nowrap opacity-100 transition-opacity duration-500">
                Genre
              </span>
            )}
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
