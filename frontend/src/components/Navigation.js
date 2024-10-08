import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Navigation.css"
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
  useMediaQuery,
  useTheme,
  Badge
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import axios from 'axios';
import Config from "../config/config";
import logo from '../assets/images/icons/logo/white/WhiteShine256px.svg';
import ToastComponent from './ToastComponent';
import MailIcon from "@mui/icons-material/Mail";


const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const isLoggedIn = localStorage.getItem('access-token');
  const userRole = localStorage.getItem('user-role');
  const navigate = useNavigate();
  const [unreviewedCount, setUnreviewedCount] = useState(0);
  const [showFeedbackAlter, setShowFeedbackAlter] = useState(true);

  const handleMobileMenuOpen = (event) => { setAnchorEl(event.currentTarget) };

  const handleMobileMenuClose = () => { setAnchorEl(null) };
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('');

  const showToast = (message, type) => {
    setToastMessage(message);
    setToastType(type);
    setTimeout(() => {
      setToastMessage('');
      setToastType('');
    }, 3000);
  };

  const handleLogout = async () => {
    try {
      axios.post(`${Config.API_URL}/api/auth/logout`, {}, { withCredentials: true })
        .then(response => {
          if (response.data.message) {
            showToast(response.data.message, 'success');
            localStorage.removeItem('access-token');
            localStorage.removeItem('user-role');
            setTimeout(() => {
              window.location.href = '/';
            }, 1000);
          } else {
            showToast(response.data.errorMessage, 'error');
          }
        })
        .catch(error => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  const handleAlertClick = () => {
    navigate('/admin/dashboard', { state: { selectedItem: 'Feedback' } });
    setShowFeedbackAlter(false);
  };

  const fetchUnreviewedFeedbackCount = async () => {
    try {
      const response = await axios.get(`${Config.API_URL}/api/feedback/unreviewedCount`, { withCredentials: true });
      setUnreviewedCount(response.data?.count);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (userRole === "admin") {
      fetchUnreviewedFeedbackCount();
    }
  }, [userRole]);

  const displayDesktopButtons = () => {
    if (isLoggedIn) {
      return (
        <div className="navbar__menu">
          {userRole === "admin" && (
            <Button component={Link} to="admin/dashboard" sx={{ color: '#000', fontSize: isMobile ? '0.6rem' : '0.7rem' }}>
              Dashboard
            </Button>
          )}
          <Button component={Link} to="/account" sx={{ color: '#000', fontSize: isMobile ? '0.6rem' : '0.7rem' }}>
            Account
          </Button>
          <Button onClick={handleLogout} component={Link} to="/" sx={{ color: '#000', fontSize: isMobile ? '0.6rem' : '0.7rem' }}>
            Logout
          </Button>
        </div>

      )
    } else {
      return (
        <div className="navbar__menu">


          {/* <Button component={Link} to="/login" sx={{ color: '#000', fontSize: isMobile ? '0.6rem' : '0.7rem' }}>
            Login
          </Button> */}

          {/* <Button component={Link} to="/register" sx={{ color: '#000', fontSize: isMobile ? '0.6rem' : '0.7rem' }}>
            Register
          </Button> */}
        </div>
      )
    }
  }

  const displayMobileButtons = () => {
    if (isLoggedIn) {
      return (

        <Menu id="menu-appbar" anchorEl={anchorEl} open={open} onClose={handleMobileMenuClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'right' }} sx={{ marginTop: '40px' }}>
          {userRole === "admin" && (
            <Button component={Link} to="admin/dashboard" sx={{ color: '#000' }}>
              Dashboard
            </Button>
          )}

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
          <Button component={Link} to="/register" sx={{ color: '#000' }}>
            Register
          </Button>
        </MenuItem>
      </Menu>)
    }
  }

  return (
    <AppBar style={{ boxShadow: "none" }}>
      <Toolbar sx={{ backgroundColor: '#96d2b0' }}>

        <Link to={isLoggedIn ? '/home' : '/'}>
          <img src={logo} className="navbar_logo" alt="GPGC Logo" />
        </Link>

        <Typography className="web-title" sx={{ flexGrow: 1, color: '#000', textDecoration: 'none' }}>
          <Link to={isLoggedIn ? '/home' : '/'} className={'navigation-title'} >Geriatric Psychotropic Green Card</Link>
        </Typography>

        {userRole === "admin" && (
          <Badge
            onClick={handleAlertClick}
            badgeContent={showFeedbackAlter ? unreviewedCount : 0}
            variant="dot"
            color="warning"
            sx={{ mr: 1, cursor: 'pointer' }}
          >
            <MailIcon color="action" />
          </Badge>
        )}

        {/* Mobile Hamburger Button */}
        <IconButton size="large" edge="end" aria-label="menu" aria-haspopup="true" onClick={handleMobileMenuOpen} sx={{ display: { xs: 'block', md: 'none' }, color: '#000' }}>
          <MenuIcon />
        </IconButton>

        {displayMobileButtons()}

        {displayDesktopButtons()}
        <ToastComponent message={toastMessage} type={toastType} />
      </Toolbar>
    </AppBar>

  )
}

export default Navbar;