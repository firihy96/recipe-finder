import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../redux/slices/favoritesSlice';
import RecipeCard from '../components/RecipeCard';

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const handleRemoveFromFavorites = (recipeId) => {
    dispatch(removeFromFavorites(recipeId));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Favorites</h1>
      {favorites.length === 0  ? (
        <p className="text-gray-600">No favorites added yet. Start adding some recipes to your favorites list!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((recipe) => (
            <div key={recipe.idMeal}>
              <RecipeCard recipe={recipe} />
              <button
                onClick={() => handleRemoveFromFavorites(recipe.idMeal)}
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;