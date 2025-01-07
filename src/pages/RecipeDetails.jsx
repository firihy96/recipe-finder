import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getRecipeDetails } from '../services/api';
import { addToFavorites } from '../redux/slices/favoritesSlice';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRecipe = async () => {
      const data = await getRecipeDetails(id);
      setRecipe(data);
    };
    fetchRecipe();
  }, [id]);

  const handleAddToFavorites = () => {
    if (recipe) {
      dispatch(addToFavorites(recipe));
    }
  };

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-64 object-cover mb-4" />
      <h2 className="text-xl font-bold mb-2">Ingredients:</h2>
      <ul className="list-disc list-inside mb-4">
        {Array.from({ length: 20 }).map((_, i) => {
          const ingredient = recipe[`strIngredient${i + 1}`];
          const measure = recipe[`strMeasure${i + 1}`];
          return ingredient ? (
            <li key={i}>{`${ingredient} - ${measure}`}</li>
          ) : null;
        })}
      </ul>
      <h2 className="text-xl font-bold mb-2">Instructions:</h2>
      <p className="whitespace-pre-line">{recipe.strInstructions}</p>
      {recipe.strYoutube && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Video Tutorial:</h2>
          <iframe
            src={`https://www.youtube.com/embed/${recipe.strYoutube.split('v=')[1]}`}
            title="YouTube video player"
            className="w-full h-64"
            allowFullScreen
          />
        </div>
      )}
      <a
        href={recipe.strSource}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline mt-4 block"
      >
        View Original Recipe
      </a>
      {/* Add to Favorites Button */}
      <button
        onClick={handleAddToFavorites}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add to Favorites
      </button>
    </div>
  );
};

export default RecipeDetails;