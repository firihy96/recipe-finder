import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipeDetails } from "../services/recipeService";
import { useSelector } from "react-redux";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode); // Get dark mode state

  useEffect(() => {
    const getRecipeDetails = async () => {
      const data = await fetchRecipeDetails(id);
      setRecipe(data);
      setIsLoading(false);
    };
    getRecipeDetails();
  }, [id]);

  if (isLoading) return <div>Loading...</div>;

  // Extract ingredients and measures
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (recipe[`strIngredient${i}`]) {
      ingredients.push(`${recipe[`strIngredient${i}`]} - ${recipe[`strMeasure${i}`]}`);
    }
  }

  // Split instructions into steps
  const instructions = recipe.strInstructions
    .split("\n")
    .filter((step) => step.trim() !== "");

  return (
    <div
      className={`min-h-screen p-6 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Recipe Name */}
      <h1 className="text-4xl font-bold mb-6">{recipe.strMeal}</h1>

      {/* Grid Layout for Thumbnail, Ingredients, and Instructions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column: Thumbnail and Video Tutorial */}
        <div className="space-y-6">
          {/* Recipe Thumbnail */}
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-full h-96 object-cover rounded-lg"
          />

          {/* Video Tutorial */}
          {recipe.strYoutube && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Video Tutorial</h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={`https://www.youtube.com/embed/${recipe.strYoutube.split("v=")[1]}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Ingredients and Instructions */}
        <div className="space-y-6">
          {/* Ingredients Section */}
          <div
            className={`p-6 rounded-lg ${
              isDarkMode ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ingredients.map((ingredient, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    isDarkMode ? "bg-gray-700" : "bg-white"
                  } shadow-sm`}
                >
                  <p className="text-sm">{ingredient}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Instructions Section */}
          <div
            className={`p-6 rounded-lg ${
              isDarkMode ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <h2 className="text-2xl font-bold mb-4">Instructions</h2>
            <div className="space-y-4">
              {instructions.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  {/* Step Number */}
                  <div
                    className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full ${
                      isDarkMode ? "bg-gray-700" : "bg-gray-200"
                    }`}
                  >
                    <span className="font-semibold">{index + 1}</span>
                  </div>
                  {/* Step Text */}
                  <p className="flex-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;