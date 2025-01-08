import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setSearchQuery, setRecipes, setIsLoading, setError } from '../redux/slices/recipeSlice';
import { searchRecipes, fetchRecipesByCategory } from '../services/api';
import RecipeCard from '../components/RecipeCard';
import debounce from 'lodash.debounce';
import { Pagination } from '@mui/material';

const Home = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams(); // Get the category name from the URL
  const { searchQuery, recipes, isLoading, error } = useSelector((state) => state.recipes);
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 9; // Number of recipes per page

  // Calculate the recipes to display for the current page
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  // Total number of pages
  const totalPages = Math.ceil(recipes.length / recipesPerPage);

  // Fetch recipes by category
  useEffect(() => {
    if (categoryName && recipes.length === 0) { // Fetch only if recipes are not already loaded
      dispatch(setIsLoading(true));
      fetchRecipesByCategory(categoryName)
        .then((results) => {
          dispatch(setRecipes(results));
          setCurrentPage(1); // Reset to the first page after a new category is selected
        })
        .catch((err) => {
          dispatch(setError('Failed to fetch recipes. Please try again later.'));
        })
        .finally(() => {
          dispatch(setIsLoading(false));
        });
    }
  }, [categoryName, dispatch, recipes.length]);

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce(async (query) => {
      dispatch(setIsLoading(true));
      dispatch(setError(null));
      try {
        const results = await searchRecipes(query);
        dispatch(setRecipes(results));
        setCurrentPage(1); // Reset to the first page after a new search
      } catch (err) {
        dispatch(setError('Failed to fetch recipes. Please try again later.'));
      } finally {
        dispatch(setIsLoading(false));
      }
    }, 500),
    [dispatch]
  );

  // Trigger search when searchQuery changes
  useEffect(() => {
    if (searchQuery) {
      debouncedSearch(searchQuery);
    } else if (!categoryName) {
      dispatch(setRecipes([])); // Clear results if no search query or category is active
    }
  }, [searchQuery, debouncedSearch, dispatch, categoryName]);

  // Handle page change
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Recipe Finder</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for recipes..."
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        className="p-2 border rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Error Message */}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Loading State */}
      {isLoading ? (
        <div className="flex justify-center items-center h-40">
          <p className="text-lg">Loading...</p>
        </div>
      ) : (
        <>
          {/* No Results Found */}
          {recipes.length === 0 && searchQuery && !isLoading && (
            <p className="text-gray-600">No recipes found. Try a different search.</p>
          )}

          {/* Recipe Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentRecipes.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
            ))}
          </div>

          {/* Pagination */}
          {recipes.length > recipesPerPage && (
            <div className="flex justify-center mt-8">
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
                size="large"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;