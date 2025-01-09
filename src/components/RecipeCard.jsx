/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../redux/slices/favoritesSlice";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // Import icons from react-icons
import ReactCountryFlag from "react-country-flag"; // Import flag component

const RecipeCard = ({ recipe }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const isFavorite = favorites.some((fav) => fav.idMeal === recipe.idMeal);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode); // Get dark mode state

  // Map recipe areas to country codes
  const areaToCountryCode = {
    American: "US",
    British: "GB",
    Canadian: "CA",
    Chinese: "CN",
    Croatian: "HR",
    Dutch: "NL",
    Egyptian: "EG",
    French: "FR",
    Greek: "GR",
    Indian: "IN",
    Irish: "IE",
    Italian: "IT",
    Jamaican: "JM",
    Japanese: "JP",
    Kenyan: "KE",
    Malaysian: "MY",
    Mexican: "MX",
    Moroccan: "MA",
    Polish: "PL",
    Portuguese: "PT",
    Russian: "RU",
    Spanish: "ES",
    Thai: "TH",
    Tunisian: "TN",
    Turkish: "TR",
    Vietnamese: "VN",
  };

  const countryCode = areaToCountryCode[recipe.strArea]; // Get country code for the area

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(recipe.idMeal));
    } else {
      dispatch(addToFavorites(recipe));
    }
  };

  return (
    <div
      className={`rounded-lg shadow-lg overflow-hidden ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Recipe Image with Favorite Icon */}
      <div className="relative">
        <Link to={`/recipe/${recipe.idMeal}`}>
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-full h-48 object-cover"
          />
        </Link>
        {/* Favorite Icon (Top-Right Corner) */}
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-2 right-2 p-2 rounded-full transition duration-300 ${
            isFavorite
              ? "bg-red-500 hover:bg-red-600"
              : "bg-white hover:bg-gray-200"
          }`}
        >
          {isFavorite ? (
            <FaHeart className="text-white" />
          ) : (
            <FaRegHeart className="text-red-500" />
          )}
        </button>
      </div>

      {/* Recipe Details */}
      <div className="p-4">
        {/* Meal Name */}
        <Link to={`/recipe/${recipe.idMeal}`}>
          <h2 className="text-xl font-bold mb-2">{recipe.strMeal}</h2>
        </Link>

        {/* Category and Area (Inline) */}
        {(recipe.strCategory || recipe.strArea) && (
          <div className="flex items-center space-x-2 text-sm">
            {/* Category */}
            {recipe.strCategory && (
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                {recipe.strCategory}
              </span>
            )}
            {/* Area with Flag */}
            {recipe.strArea && countryCode && (
              <div className="flex items-center space-x-1">
                <ReactCountryFlag
                  countryCode={countryCode}
                  svg
                  style={{
                    width: "1.2em",
                    height: "1.2em",
                  }}
                />
                <span>{recipe.strArea}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;