import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const recipe = action.payload;
      if (!state.favorites.some((fav) => fav.idMeal === recipe.idMeal)) {
        state.favorites.push(recipe);
      }
    },
    removeFromFavorites: (state, action) => {
      const recipeId = action.payload;
      state.favorites = state.favorites.filter((fav) => fav.idMeal !== recipeId);
    },
    clearFavorites: (state) => {
      state.favorites = []; // Clear all favorites
    },
  },
});

export const { addToFavorites, removeFromFavorites, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;