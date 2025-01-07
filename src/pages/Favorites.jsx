import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import { removeFromFavorites, clearFavorites } from '../redux/slices/favoritesSlice';

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const location = useLocation(); // Get the current location
  const activeRecipeId = location.pathname.split('/recipe/')[1]; // Extract the active recipe ID

  const handleRemoveFromFavorites = (recipeId) => {
    dispatch(removeFromFavorites(recipeId));
  };

  const handleClearFavorites = () => {
    dispatch(clearFavorites());
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Favorites</h1>

      {/* Clear All Button */}
      {favorites.length > 0 && (
        <button
          onClick={handleClearFavorites}
          className="mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Clear All Favorites
        </button>
      )}

      {/* Favorites List */}
      {favorites.length === 0 ? (
        <p className="text-gray-600">No favorites added yet. Start adding some recipes to your favorites list!</p>
      ) : (
        <ul className="space-y-4">
          {favorites.map((recipe) => (
            <li
              key={recipe.idMeal}
              className={`flex items-center justify-between p-4 border rounded-lg shadow-sm ${
                activeRecipeId === recipe.idMeal ? 'bg-gray-100' : ''
              }`} // Highlight active recipe
            >
              {/* Link to Recipe Details */}
              <Link to={`/recipe/${recipe.idMeal}`} className="flex-1">
                <div>
                  <h2 className="text-xl font-bold">{recipe.strMeal}</h2>
                  <p className="text-gray-600">{recipe.strCategory}</p>
                </div>
              </Link>

              {/* Remove Button */}
              <button
                onClick={() => handleRemoveFromFavorites(recipe.idMeal)}
                className="ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;