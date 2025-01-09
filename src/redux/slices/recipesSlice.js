import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCategories,  } from "../../services/recipeService";

// Async thunk to fetch categories
export const fetchCategoriesData = createAsyncThunk(
  "recipes/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchCategories();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [],
    categories: [], // Add categories to the state
    isLoading: false,
    error: null,
  },
  reducers: {
    setRecipes: (state, action) => {
      state.recipes = action.payload;
    },
    setCategories: (state, action) => { // Add this reducer
      state.categories = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle categories fetch
      .addCase(fetchCategoriesData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCategoriesData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategoriesData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Export all actions
export const { setRecipes, setCategories, setLoading, setError } = recipesSlice.actions;
export default recipesSlice.reducer;