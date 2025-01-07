/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{recipe.strMeal}</h2>
        <p className="text-gray-600">{recipe.strCategory}</p>
        <p className="text-gray-600">{recipe.strArea}</p>
        <Link to={`/recipe/${recipe.idMeal}`} className="text-blue-500 hover:underline">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;