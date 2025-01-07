/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../redux/slices/favoritesSlice';
import { FaHeart, FaRegHeart } from 'react-icons/fa'; // Import heart icons

const RecipeCard = ({ recipe }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const isFavorited = favorites.some((fav) => fav.idMeal === recipe.idMeal);

  const handleToggleFavorite = () => {
    if (isFavorited) {
      dispatch(removeFromFavorites(recipe.idMeal));
    } else {
      dispatch(addToFavorites(recipe));
    }
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg relative">
      {/* Heart Icon */}
      <button
        onClick={handleToggleFavorite}
        className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
      >
        {isFavorited ? (
          <FaHeart className="text-red-500 text-xl" /> // Filled red heart
        ) : (
          <FaRegHeart className="text-gray-500 text-xl" /> // Outline heart
        )}
      </button>

      {/* Recipe Image */}
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-48 object-cover" />

      {/* Recipe Details */}
      <div className="p-4">
        <h2 className="text-xl font-bold">{recipe.strMeal}</h2>
        <p className="text-gray-600">{recipe.strCategory}</p>
        <p className="text-gray-600">{recipe.strArea}</p>
      </div>
    </div>
  );
};

export default RecipeCard;