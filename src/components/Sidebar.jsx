import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../services/recipeService";
import { setCategories } from "../redux/slices/recipesSlice";
import { fetchCategoriesData } from "../redux/slices/recipesSlice";
import { FaBars, FaTimes, FaHeart, FaInfoCircle } from "react-icons/fa"; // Import icons from react-icons

const Sidebar = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode); // Get dark mode state
  const categories = useSelector((state) => state.recipes.categories);
  const [isCollapsed, setIsCollapsed] = useState(false); // State to manage collapse/expand

  // Fetch categories when the component mounts
  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchCategories();
      dispatch(setCategories(data));
    };
    getCategories();
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategoriesData());
  }, [dispatch]);

  return (
    <aside
      className={`p-4 transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      } ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Header with Recipe Finder and Close Icon */}
      <div className="flex justify-between items-center mb-4">
        {/* Recipe Finder Typography (Hidden when Collapsed) */}
        {!isCollapsed && (
          <h1 className="text-xl font-bold">Recipe Finder</h1>
        )}
        {/* Toggle Button (Close Icon) */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`hover:text-blue-500 focus:outline-none ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {isCollapsed ? <FaBars size={24} /> : <FaTimes size={24} />}
        </button>
      </div>

      {/* Sidebar Content (Expanded) */}
      <div className={`${isCollapsed ? "hidden" : "block"}`}>
        <ul>
          {/* Favorites Link */}
          <li className="mb-4">
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `hover:text-blue-500 ${
                  isActive ? "text-blue-500" : isDarkMode ? "text-white" : "text-gray-900"
                }`
              }
            >
              Favorites
            </NavLink>
          </li>

          {/* About Us Link */}
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-blue-500 ${
                  isActive ? "text-blue-500" : isDarkMode ? "text-white" : "text-gray-900"
                }`
              }
            >
              About Us
            </NavLink>
          </li>

          {/* Divider */}
          <hr className={`my-4 ${isDarkMode ? "border-gray-700" : "border-gray-300"}`} />

          {/* Categories Section */}
          <li className="mt-4">
            <h2 className="font-bold mb-2">Categories</h2>
            <ul>
              {categories.map((category) => (
                <li key={category.idCategory} className="mb-2 flex items-center">
                  {/* Category Thumbnail */}
                  <img
                    src={category.strCategoryThumb}
                    alt={category.strCategory}
                    className="w-8 h-8 rounded-full object-cover mr-2"
                  />
                  {/* Category Link */}
                  <NavLink
                    to={`/category/${category.strCategory}`}
                    className={({ isActive }) =>
                      `hover:text-blue-500 ${
                        isActive
                          ? "text-blue-500"
                          : isDarkMode
                          ? "text-white"
                          : "text-gray-900"
                      }`
                    }
                  >
                    {category.strCategory}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>

      {/* Collapsed Sidebar (Icons Only, Centered) */}
      <div className={`${isCollapsed ? "flex flex-col items-center" : "hidden"}`}>
        <ul className="space-y-4">
          {/* Favorites Icon */}
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `hover:text-blue-500 ${
                  isActive ? "text-blue-500" : isDarkMode ? "text-white" : "text-gray-900"
                }`
              }
            >
              <FaHeart size={24} />
            </NavLink>
          </li>

          {/* About Us Icon */}
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-blue-500 ${
                  isActive ? "text-blue-500" : isDarkMode ? "text-white" : "text-gray-900"
                }`
              }
            >
              <FaInfoCircle size={24} />
            </NavLink>
          </li>

          {/* Category Thumbnails */}
          {categories.map((category) => (
            <li key={category.idCategory}>
              <NavLink to={`/category/${category.strCategory}`}>
                <img
                  src={category.strCategoryThumb}
                  alt={category.strCategory}
                  className="w-8 h-8 rounded-full object-cover"
                />
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;