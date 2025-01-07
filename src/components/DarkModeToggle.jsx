import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../redux/slices/themeSlice';

const DarkModeToggle = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <button
      onClick={() => dispatch(toggleDarkMode())}
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded"
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;