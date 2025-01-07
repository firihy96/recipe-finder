
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import RecipeDetails from './pages/RecipeDetails';
import Favorites from './pages/Favorites'; // Import the Favorites page
import NavBar from './components/NavBar';

const App = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
        {/* Navigation Bar */}
        <NavBar />

        {/* Main Content */}
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/favorites" element={<Favorites />} /> {/* Add Favorites route */}
          </Routes>
        </main>

        {/* Footer */}
        <footer className="text-center p-4 border-t">
          <p>© 2023 Recipe Finder. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;