import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from './slices/recipeSlice';
import favoritesReducer from './slices/favoritesSlice';
import themeReducer from './slices/themeSlice'; // Import the theme slice

export const store = configureStore({
  reducer: {
    recipes: recipeReducer,
    favorites: favoritesReducer,
    theme: themeReducer, // Add the theme slice
  },
});