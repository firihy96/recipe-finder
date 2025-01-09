/* eslint-disable react/prop-types */
import { useState } from "react";
import RecipeCard from "./RecipeCard";
import { useSelector } from "react-redux";

const RecipeList = ({ recipes, title }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRecipes = recipes.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (recipes.length === 0) {
    return (
      <div
        className={`flex flex-col justify-center items-center h-full p-8 ${
          isDarkMode ? "bg-gray-900" : "bg-white"
        }`}
      >
        <h2
          className={`text-3xl font-bold mb-4 ${
            isDarkMode ? "text-gray-100" : "text-gray-800"
          }`}
        >
          Explore Recipes
        </h2>
        <p
          className={`text-xl ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Start by searching for a recipe or selecting a category.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col h-full p-6 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <h1
        className={`text-3xl font-bold mb-8 ${
          isDarkMode ? "text-gray-100" : "text-gray-800"
        }`}
      >
        {title === 'Search Results for "undefined"' ? "" : title}
      </h1>
      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        {[...Array(Math.ceil(recipes.length / itemsPerPage)).keys()].map(
          (number) => (
            <button
              key={number + 1}
              onClick={() => paginate(number + 1)}
              className={`mx-1 p-2 rounded-lg transition duration-300 ${
                currentPage === number + 1
                  ? isDarkMode
                    ? "bg-blue-600 text-white"
                    : "bg-blue-500 text-white"
                  : isDarkMode
                  ? "bg-gray-700 text-white hover:bg-gray-600"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {number + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default RecipeList;
