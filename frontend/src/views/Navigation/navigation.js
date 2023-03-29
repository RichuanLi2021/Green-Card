import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuToggle = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ backgroundColor: '#96d2b0' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#000', textDecoration: 'none', fontSize: '1.5rem' }}>
          Geriatric Psychiatry Green Card
        </Typography>

        <IconButton
          size="large"
          edge="end"
          aria-label="menu"
          aria-haspopup="true"
          onClick={handleMenuToggle}
          sx={{ display: { xs: 'block', md: 'none' }, color: '#000' }}
        >
          <MenuIcon />
        </IconButton>

        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          sx={{ marginTop: '40px' }}
        >
          <MenuItem onClick={handleMenuClose}>
            <Button component={Link} to="/" sx={{ color: '#000' }}>Home</Button>
          </MenuItem>
          {window.location.pathname !== '/login' && (
            <MenuItem onClick={handleMenuClose}>
              <Button component={Link} to="/login" sx={{ color: '#000' }}>Admin Login</Button>
            </MenuItem>
          )}
        </Menu>

        <div className="navbar__menu">
          <Button component={Link} to="/" sx={{ color: '#000', fontSize: '1.2rem' }}>Home</Button>
          {window.location.pathname !== '/login' && (
            <Button component={Link} to="/login" sx={{ color: '#000', fontSize: '1.2rem' }}>Admin Login</Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
