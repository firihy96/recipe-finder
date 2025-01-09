import axios from "axios";

const API_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchRecipes = async () => {
  const response = await axios.get(`${API_URL}/search.php?s=`);
  return response.data.meals;
};

export const fetchCategories = async () => {
  const response = await axios.get(`${API_URL}/categories.php`);
  return response.data.categories;
};

export const fetchRecipeDetails = async (id) => {
  const response = await axios.get(`${API_URL}/lookup.php?i=${id}`);
  return response.data.meals[0];
};

export const fetchRecipesByCategory = async (categoryName) => {
  const response = await axios.get(`${API_URL}/filter.php?c=${categoryName}`);
  return response.data.meals;
};

export const fetchRecipesBySearch = async (query) => {
  const response = await axios.get(`${API_URL}/search.php?s=${query}`);
  return response.data.meals;
};

