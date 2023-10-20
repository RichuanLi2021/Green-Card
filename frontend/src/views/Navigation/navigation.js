import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuToggle = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      localStorage.removeItem('admin');

    } catch (error) {
      console.log(error);
    }
  };

  // Admin role
  const admin = localStorage.getItem("admin");

  if (admin) {
    return (
      <AppBar style={{ boxShadow: "none", marginBottom: "50px" }}>
        <Toolbar sx={{ backgroundColor: '#96d2b0' }}>
          <Typography className="web-title" sx={{ flexGrow: 1, color: '#000' }}>
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

          {/* Dropdown menu for mobile */}
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            sx={{ marginTop: '40px' }}
          >
              
            {window.location.pathname !== '/logout' && (
              <MenuItem onClick={handleLogout}>
                <Button component={Link} to="/" sx={{ color: '#000', fontSize: isMobile ? '0.8rem' : '1rem' }}>Log out</Button>
              </MenuItem>
            )}

            <MenuItem onClick={handleMenuClose}>
              <Button component={Link} to="/panel" sx={{ color: '#000', fontSize: isMobile ? '0.8rem' : '1rem' }}>Feedback</Button>
            </MenuItem>
          </Menu>

          {/* Nav for desktop view */}
          <div className="navbar__menu">
            <Button component={Link} to="/" sx={{ color: '#000', fontSize: isMobile ? '0.6rem' : '0.7rem' }}>Home</Button>        
            {window.location.pathname !== '/logout' && (
              <Button component={Link} to="/" sx={{ color: '#000', fontSize: isMobile ? '0.6rem' : '0.7rem' }} onClick={handleLogout}>
                Logout
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
    );
  } else {
    return (
      <AppBar style={{ boxShadow: "none", marginBottom: "2rem" }}>
        <Toolbar sx={{ backgroundColor: '#96d2b0' }}>
          <Typography className="web-title" sx={{ flexGrow: 1, color: '#000', textDecoration: 'none' }}>
            <Link to={"/"} className={'navigation-title'}>Geriatric Psychotropic Green Card</Link>
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
              <MenuItem>
                <Button component={Link} to="/login" sx={{ color: '#000'}}>Admin Login</Button> 
              </MenuItem>  
            )}         
          </Menu>
       
          <div className="navbar__menu">
            <Button component={Link} to="/" sx={{ color: '#000', fontSize: isMobile ? '0.6rem' : '0.7rem' }}>Home</Button>
            {window.location.pathname !== '/login' && (
              <Button component={Link} to="/login" sx={{ color: '#000', fontSize: isMobile ? '0.6rem' : '0.7rem' }}>
                Admin Login
              </Button>
            )}
          </div>

        </Toolbar>
      </AppBar>
    );
  }
};

export default Navbar;