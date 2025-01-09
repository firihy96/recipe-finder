import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./slices/recipesSlice";
import favoritesReducer from "./slices/favoritesSlice";
import paginationReducer from "./slices/paginationSlice";
import themeReducer from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    favorites: favoritesReducer,
    pagination: paginationReducer,
    theme: themeReducer,
  },
});