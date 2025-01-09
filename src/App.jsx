import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AboutUs from "./pages/AboutUs";
import RecipeDetails from "./pages/RecipeDetails";

const App = () => {
  return (
    <Router>
      {/* Main Container */}
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <Header />

          {/* Routes (Main Content) */}
          <div className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:categoryName" element={<Home />} />
              <Route path="/search/:query" element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/recipe/:id" element={<RecipeDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;