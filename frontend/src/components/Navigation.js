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
import axios from 'axios';
import Config from "../config/config";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const isLoggedIn = localStorage.getItem('access-token')

  const handleMobileMenuOpen = (event) => { setAnchorEl(event.currentTarget) };

  const handleMobileMenuClose = () => { setAnchorEl(null) };

  const handleLogout = async () => {
    try {
      axios.post(Config.API_URL + "/api/auth/logout", {}, { withCredentials: true })
        .then(response => {
          if (response.data.message) {
            alert(response.data.message)
            localStorage.removeItem('access-token')
            window.location.href = '/'
          } else {
            alert(response.data.errorMessage);
          }
        })
        .catch(error => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  const displayNavTitle = () => {
    if (isLoggedIn) {
      return (
        <Typography className="web-title" sx={{ flexGrow: 1, color: '#000', textDecoration: 'none' }}>
          <Link to={"/home"} className={'navigation-title'}>Geriatric Psychotropic Green Card</Link>
        </Typography>
      )
    } else {
      return (
        <Typography className="web-title" sx={{ flexGrow: 1, color: '#000', textDecoration: 'none' }}>
          <Link to={"/"} className={'navigation-title'}>Geriatric Psychotropic Green Card</Link>
        </Typography>
      )
    }
  }

  const displayDesktopButtons = () => {
    if (isLoggedIn) {
      return (
        <div className="navbar__menu">
          <Button component={Link} to="/account" sx={{ color: '#000', fontSize: isMobile ? '0.6rem' : '0.7rem' }}>
            Account
          </Button>

          <Button onClick={handleLogout} sx={{ color: '#000', fontSize: isMobile ? '0.6rem' : '0.7rem' }}>
            Logout
          </Button>
        </div>
      )
    } else {
      return (
        <div className="navbar__menu">
          <Button component={Link} to="/login" sx={{ color: '#000', fontSize: isMobile ? '0.6rem' : '0.7rem' }}>
            Login
          </Button>

          <Button component={Link} to="/register" sx={{ color: '#000', fontSize: isMobile ? '0.6rem' : '0.7rem' }}>
            Register
          </Button>
        </div>
      )
    }
  }

  const displayMobileButtons = () => {
    if (isLoggedIn) {
      return (
        <Menu id="menu-appbar" anchorEl={anchorEl} open={open} onClose={handleMobileMenuClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'right' }} sx={{ marginTop: '40px' }}>
          <MenuItem onClick={handleMobileMenuClose}>
            <Button component={Link} to="/account" sx={{ color: '#000' }}>
              Account
            </Button>
          </MenuItem>

          <MenuItem onClick={handleMobileMenuClose}>
            <Button onClick={handleLogout} sx={{ color: '#000' }}>
              Logout
            </Button>
          </MenuItem>
        </Menu>
      )
    } else {
      return (<Menu id="menu-appbar" anchorEl={anchorEl} open={open} onClose={handleMobileMenuClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'right' }} sx={{ marginTop: '40px' }}>
        <MenuItem onClick={handleMobileMenuClose}>
          <Button component={Link} to="/login" sx={{ color: '#000' }}>
            Login
          </Button>
        </MenuItem>

        <MenuItem onClick={handleMobileMenuClose}>
          <Button component={Link} to="/register" sx={{ color: '#000'}}>
            Register
          </Button>
        </MenuItem>
      </Menu>)
    }
  }

  return (
    <AppBar style={{ boxShadow: "none", marginBottom: "2rem" }}>
      <Toolbar sx={{ backgroundColor: '#96d2b0' }}>

        { displayNavTitle() }

        {/* Mobile Hamburger Button */}
        <IconButton size="large" edge="end" aria-label="menu" aria-haspopup="true" onClick={handleMobileMenuOpen} sx={{ display: { xs: 'block', md: 'none' }, color: '#000' }}>
          <MenuIcon />
        </IconButton>

        { displayMobileButtons() }

        { displayDesktopButtons() }

      </Toolbar>
    </AppBar>
  )
}

export default Navbar;