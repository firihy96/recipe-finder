import axios from 'axios';

const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const searchRecipes = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/search.php?s=${query}`);
    return response.data.meals || [];
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};

export const getRecipeDetails = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/lookup.php?i=${id}`);
    return response.data.meals?.[0] || null;
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    return null;
  }
};