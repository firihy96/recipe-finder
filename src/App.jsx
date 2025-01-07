import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import RecipeDetails from './pages/RecipeDetails';
import AboutUs from './pages/AboutUs';
import NavBar from './components/NavBar';

const App = () => {
  // Access the dark mode state from the Redux store
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Grid Container */}
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
        {/* Navigation Bar (Row 1) */}
        <NavBar />

        {/* Main Content (Row 2) */}
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page/:pageNumber" element={<Home />} /> {/* Pagination route */}
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>

        {/* Footer (Row 3) */}
        <footer className="text-center p-4 border-t">
          <p>© 2023 Recipe Finder. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;