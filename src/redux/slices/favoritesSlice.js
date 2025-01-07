import { createSlice } from '@reduxjs/toolkit';

// Load favorites from local storage
const loadFavoritesFromLocalStorage = () => {
  const favorites = localStorage.getItem('favorites');
  return favorites ? JSON.parse(favorites) : [];
};

const initialState = {
  favorites: loadFavoritesFromLocalStorage(), // Initialize with data from local storage
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const recipe = action.payload;
      if (!state.favorites.some((fav) => fav.idMeal === recipe.idMeal)) {
        state.favorites.push(recipe);
        localStorage.setItem('favorites', JSON.stringify(state.favorites)); // Update local storage
      }
    },
    removeFromFavorites: (state, action) => {
      const recipeId = action.payload;
      state.favorites = state.favorites.filter((fav) => fav.idMeal !== recipeId);
      localStorage.setItem('favorites', JSON.stringify(state.favorites)); // Update local storage
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;