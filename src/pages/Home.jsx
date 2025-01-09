import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipesByCategory, fetchRecipesBySearch } from "../services/recipeService";
import { setRecipes, setLoading } from "../redux/slices/recipesSlice";
import RecipeList from "../components/RecipeList";

const Home = () => {
  const dispatch = useDispatch();
  const { categoryName, query } = useParams();
  const { recipes, isLoading } = useSelector((state) => state.recipes);

  useEffect(() => {
    const getRecipes = async () => {
      dispatch(setLoading(true));
      if (categoryName) {
        const data = await fetchRecipesByCategory(categoryName);
        dispatch(setRecipes(data));
      } else if (query) {
        const data = await fetchRecipesBySearch(query);
        dispatch(setRecipes(data));
      }
      dispatch(setLoading(false));
    };
    getRecipes();
  }, [categoryName, query, dispatch]);

  if (isLoading) return <div>Loading...</div>;

  const title = categoryName ? `Recipes for ${categoryName}` : `Search Results for "${query}"`;

  return (
    <div className="flex-1 flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto">
        <RecipeList recipes={recipes} title={title} />
      </div>
    </div>
  );;
};

export default Home;