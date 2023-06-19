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

  const handleLogout = async () => {
    try{
      localStorage.removeItem('admin');
      window.location.reload();
    }catch(error){
      console.log(error);
    }
  }

  const admin = localStorage.getItem('admin');

  if (admin)
  {
    return (
        <AppBar sx={{ boxShadow: 'none', marginBottom: '20px' }}>
          <Toolbar sx={{ backgroundColor: '#96d2b0' }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#000', textDecoration: 'none', fontSize: '1.5rem' }}>
              Geriatric Psychotropic Green Card
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
              <MenuItem onClick={handleMenuClose}>
                <Button component={Link} to="/panel" sx={{ color: '#000' }}>Feedback</Button>
              </MenuItem>
              {window.location.pathname !== '/logout' && (
                  <MenuItem onClick={handleMenuClose}>
                    <Button onClick={handleLogout} sx={{ color: '#000' }}>Logout</Button>
                  </MenuItem>
              )}
            </Menu>

            <div className="navbar__menu">
              <Button component={Link} to="/" sx={{ color: '#000', fontSize: '1.2rem' }}>Home</Button>
              <Button component={Link} to="/panel" sx={{ color: '#000', fontSize: '1.2rem' }}>Feedback</Button>
              {window.location.pathname !== '/logout' && (
                  <Button onClick={handleLogout} sx={{ color: '#000', fontSize: '1.2rem' }}>Logout</Button>
              )}
            </div>
          </Toolbar>
        </AppBar>
    );
  }
  else
  {
    return (
        <AppBar sx={{ boxShadow: 'none'}}>
          <Toolbar sx={{ backgroundColor: '#96d2b0' }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#000', textDecoration: 'none', fontSize: '1.5rem' }}>
              Geriatric Psychotropic Green Card
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
  }
};

export default Navbar;
