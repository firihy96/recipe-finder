// redux/slices/themeSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Helper function to get the theme from local storage
const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme");
  return theme ? JSON.parse(theme) : false; // Default to light mode (false)
};

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkMode: getThemeFromLocalStorage(), // Load theme from local storage
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      // Save the updated theme to local storage
      localStorage.setItem("theme", JSON.stringify(state.isDarkMode));
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;