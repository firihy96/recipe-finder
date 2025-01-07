/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../redux/slices/favoritesSlice';

const RecipeCard = ({ recipe }) => {
  const dispatch = useDispatch();

  const handleAddToFavorites = () => {
    dispatch(addToFavorites(recipe));
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{recipe.strMeal}</h2>
        <p className="text-gray-600">{recipe.strCategory}</p>
        <p className="text-gray-600">{recipe.strArea}</p>
        <button
          onClick={handleAddToFavorites}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add to Favorites
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;