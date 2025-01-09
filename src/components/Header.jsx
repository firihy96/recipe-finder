import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/slices/themeSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaSun, FaMoon } from "react-icons/fa"; // Import icons from react-icons

const Header = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search/${query}`); // Navigate to the search results page
      setQuery(""); // Clear the search input
    }
  };

  const handleLogoClick = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <header
      className={`p-4 shadow-md ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-blue-500 text-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* App Logo/Title */}
        <h1
          className="text-2xl font-bold cursor-pointer hover:opacity-80 transition duration-300"
          onClick={handleLogoClick} // Add onClick handler
        >
          Recipe Finder
        </h1>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex items-center flex-1 mx-8 max-w-2xl">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search recipes..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={`w-full p-2 pl-10 pr-12 rounded-lg ${
                isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
              } focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
            <FaSearch
              className={`absolute left-3 top-3 ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            />
            {/* Search Button (Icon) */}
            <button
              type="submit"
              className={`absolute right-3 top-3 p-2 rounded-lg ${
                isDarkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-500 hover:text-blue-500"
              } transition duration-300`}
            >
              {/* <FaSearch /> */}
            </button>
          </div>
        </form>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => dispatch(toggleTheme())}
          className={`p-2 rounded-lg ${
            isDarkMode
              ? "bg-gray-700 text-white hover:bg-gray-600"
              : "bg-white text-blue-500 hover:bg-blue-100"
          } transition duration-300 flex items-center gap-2`}
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
};

export default Header;