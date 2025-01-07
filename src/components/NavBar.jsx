import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const NavBar = () => {
  return (
    <nav className="p-4 shadow-md w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* App Title */}
        <Link to="/" className="text-2xl font-bold">
          Recipe Finder
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          <Link to="/favorites" className="text-lg hover:text-blue-500">
            Favorites
          </Link>
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;