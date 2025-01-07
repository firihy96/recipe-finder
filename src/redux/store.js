import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from './slices/recipeSlice';
import themeReducer from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    recipes: recipeReducer, // Handles recipe-related state
    theme: themeReducer,    // Handles dark mode state
  },
});