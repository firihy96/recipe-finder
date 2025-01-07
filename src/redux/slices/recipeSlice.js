import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchQuery: '',
  recipes: [],
  isLoading: false,
  error: null,
};

const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setRecipes: (state, action) => {
      state.recipes = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setSearchQuery, setRecipes, setIsLoading, setError } = recipeSlice.actions;
export default recipeSlice.reducer;