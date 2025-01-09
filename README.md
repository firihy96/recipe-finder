# Recipe Finder

**Recipe Finder** is a modern, user-friendly web application designed to help you discover and explore delicious recipes from around the world. Whether you're a seasoned chef or a kitchen beginner, Recipe Finder provides a wide range of recipes, tips, and tools to make cooking fun, easy, and accessible.

---

## Features

### 🍳 **Search Recipes**
- Search for recipes by name, ingredients, or dietary preferences.
- Dynamic search results update as you type.

### 🗂️ **Browse Categories**
- Explore recipes by meal type, including Breakfast, Lunch, Dinner, and Desserts.
- Categories are fetched dynamically from the MealDB API.

### ❤️ **Save Favorites**
- Bookmark your favorite recipes for quick access anytime.
- Easily add or remove recipes from your favorites list.

### 🌙 **Dark Mode**
- Enjoy a comfortable viewing experience with a light and dark mode toggle.
- The theme is persisted in local storage for consistency across sessions.

### 📱 **Responsive Design**
- Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices.

### 📄 **Recipe Details**
- View detailed information about each recipe, including ingredients, instructions, and a video tutorial (if available).
- Ingredients and measures are dynamically extracted and displayed.

---

## Technologies Used

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **React Router**: For client-side routing and navigation.
- **Redux Toolkit**: For state management, including recipes, favorites, pagination, and theme.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Axios**: For making HTTP requests to the MealDB API.

### Backend
- **MealDB API**: A free API providing access to thousands of recipes from around the world.

### Tools
- **Vite**: A fast build tool for modern web development.
- **ESLint**: For code linting and maintaining code quality.
- **React Icons**: For adding icons to the UI.

---

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/recipe-finder.git
   ```
2. Navigate to the project directory:
   ```bash
   cd recipe-finder
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and visit `http://localhost:5173` to view the app.

---

## Folder Structure

```
recipe-finder/
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable components (Header, Sidebar, RecipeCard, etc.)
│   ├── pages/               # Page components (Home, Favorites, AboutUs, RecipeDetails)
│   ├── redux/               # Redux slices and store configuration
│   ├── services/            # API service functions
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── .eslint.config.js        # ESLint configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── vite.config.js           # Vite configuration
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```

---

## Usage

### Searching for Recipes
1. Use the search bar in the header to search for recipes by name or ingredients.
2. Click on a recipe to view detailed information.

### Browsing Categories
1. Open the sidebar to browse recipes by category.
2. Click on a category to view all recipes in that category.

### Saving Favorites
1. Click the heart icon on a recipe card to add it to your favorites.
2. View your favorite recipes by navigating to the "Favorites" page in the sidebar.

### Toggling Dark Mode
1. Click the dark mode toggle button in the header to switch between light and dark themes.

---

## Acknowledgments

- **MealDB API**: For providing the recipe data.
- **Tailwind CSS**: For making styling easy and efficient.
- **React Community**: For creating amazing tools and libraries.

---

## Contact

If you have any questions or feedback, feel free to reach out:

- **Email**: abdullahfirihy96@outlook.com
- **GitHub**: [Abdullah Firihy](https://github.com/firihy96)

---

Happy cooking! 🍴