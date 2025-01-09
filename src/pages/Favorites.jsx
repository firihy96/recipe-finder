import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaTrashAlt } from "react-icons/fa"; // Import icons from react-icons
import { removeFromFavorites, clearFavorites } from "../redux/slices/favoritesSlice"; // Import the actions

const Favorites = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const favorites = useSelector((state) => state.favorites.favorites);
  const navigate = useNavigate();

  const handleRemoveFavorite = (idMeal) => {
    dispatch(removeFromFavorites(idMeal)); // Dispatch the action to remove the recipe
  };

  const handleClearFavorites = () => {
    dispatch(clearFavorites()); // Dispatch the action to clear all favorites
  };

  const handleRecipeClick = (idMeal) => {
    // Navigate to the recipe details page
    navigate(`/recipe/${idMeal}`);
  };

  return (
    <div className={`flex-1 min-h-screen p-6 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto">
        {/* Page Heading */}
        <h1 className="text-3xl font-bold mb-6 text-center">Your Favorites</h1>

        {/* Clear All Favorites Button */}
        {favorites.length > 0 && (
          <button
            onClick={handleClearFavorites}
            className="mb-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300 flex items-center gap-2"
          >
            <FaTrashAlt /> Clear All Favorites
          </button>
        )}

        {/* Empty State */}
        {favorites.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-xl text-gray-600 dark:text-gray-300">You haven&lsquo;t added any favorites yet.</p>
          </div>
        ) : (
          // List Layout for Favorited Recipes
          <div className="space-y-4">
            {favorites.map((recipe) => (
              <div
                key={recipe.idMeal}
                className={`flex items-center justify-between p-4 rounded-lg shadow ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                {/* Clickable Recipe Area */}
                <div
                  className="flex items-center gap-4 flex-1 cursor-pointer"
                  onClick={() => handleRecipeClick(recipe.idMeal)}
                >
                  {/* Recipe Image */}
                  <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  {/* Recipe Name */}
                  <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {recipe.strMeal}
                  </h2>
                </div>
                {/* Remove from Favorites Button */}
                <button
                  onClick={() => handleRemoveFavorite(recipe.idMeal)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300 flex items-center gap-2"
                >
                  <FaTrash /> Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;