import React, { useState, useEffect } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
  Divider,
  useTheme,
  useMediaQuery,
  CircularProgress,
} from '@mui/material';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Sidebar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [isOpen, setIsOpen] = useState(!isSmallScreen); // Open by default on large screens
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  // Fetch categories from TheMealDB API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        setCategories(response.data.categories || []);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      {/* Hamburger Menu Button (for small screens) */}
      {isSmallScreen && (
        <IconButton
          color="inherit"
          onClick={toggleSidebar}
          sx={{ position: 'fixed', top: 16, left: 16, zIndex: 1200 }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Sidebar Drawer */}
      <Drawer
        variant={isSmallScreen ? 'temporary' : 'permanent'}
        open={isOpen}
        onClose={toggleSidebar}
        sx={{
          width: isCollapsed ? 64 : 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: isCollapsed ? 64 : 240,
            boxSizing: 'border-box',
            backgroundColor: isDarkMode ? theme.palette.grey[900] : theme.palette.background.paper,
            color: isDarkMode ? theme.palette.common.white : theme.palette.text.primary,
          },
        }}
      >
        {/* Sidebar Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: theme.spacing(2),
          }}
        >
          <Typography variant="h6" noWrap>
            {isCollapsed ? '🍳' : 'Recipe Finder'}
          </Typography>
          <IconButton onClick={toggleCollapse}>
            {isCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />

        {/* Categories List */}
        {isLoading ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: theme.spacing(2) }}>
            <CircularProgress />
          </div>
        ) : (
          <List>
            {categories.map((category) => (
              <ListItem
                button
                key={category.strCategory}
                component={Link}
                to={`/category/${category.strCategory}`}
                sx={{
                  '&.Mui-selected': {
                    backgroundColor: isDarkMode ? theme.palette.grey[800] : theme.palette.grey[300],
                  },
                  '&.Mui-selected:hover': {
                    backgroundColor: isDarkMode ? theme.palette.grey[700] : theme.palette.grey[400],
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <img
                    src={category.strCategoryThumb}
                    alt={category.strCategory}
                    style={{ width: 24, height: 24, borderRadius: '50%' }}
                  />
                </ListItemIcon>
                {!isCollapsed && <ListItemText primary={category.strCategory} />}
              </ListItem>
            ))}
          </List>
        )}
      </Drawer>
    </>
  );
};

export default Sidebar;