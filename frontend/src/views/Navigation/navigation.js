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
    try {
      localStorage.removeItem('admin');
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  const [antidepressantAnchorEl, setAntidepressantAnchorEl] = useState(null);
  const antidepressantOpen = Boolean(antidepressantAnchorEl);

  const [antipsychoticsAnchorEl, setAntipsychoticsAnchorEl] = useState(null);
  const antipsychoticsOpen = Boolean(antipsychoticsAnchorEl);

  const [insomniaAnchorEl, setInsomniaAnchorEl] = useState(null);
  const insomniaOpen = Boolean(insomniaAnchorEl);

  const [dementiaAnchorEl, setDementiaAnchorEl] = useState(null);
  const dementiaOpen = Boolean(dementiaAnchorEl);

  const [deliriumAnchorEl, setDeliriumAnchorEl] = useState(null);
  const deliriumOpen = Boolean(deliriumAnchorEl);

  const [polypharmacyAnchorEl, setPolypharmacyAnchorEl] = useState(null);
  const polypharmacyOpen = Boolean(polypharmacyAnchorEl);

  const handleAntidepressantMenuOpen = (event) => {
    setAntidepressantAnchorEl(event.currentTarget);
  };

  const handleAntidepressantMenuClose = () => {
    setAntidepressantAnchorEl(null);
  };

  const handleAntipsychoticsMenuOpen = (event) => {
    setAntipsychoticsAnchorEl(event.currentTarget);
  };

  const handleAntipsychoticsMenuClose = () => {
    setAntipsychoticsAnchorEl(null);
  };

  const handleInsomniaMenuOpen = (event) => {
    setInsomniaAnchorEl(event.currentTarget);
  };

  const handleInsomniaMenuClose = () => {
    setInsomniaAnchorEl(null);
  };

  const handleDementiaMenuOpen = (event) => {
    setDementiaAnchorEl(event.currentTarget);
  };

  const handleDementiaMenuClose = () => {
    setDementiaAnchorEl(null);
  };

  const handleDeliriumMenuOpen = (event) => {
    setDeliriumAnchorEl(event.currentTarget);
  };

  const handleDeliriumMenuClose = () => {
    setDeliriumAnchorEl(null);
  };

  const handlePolypharmacyMenuOpen = (event) => {
    setPolypharmacyAnchorEl(event.currentTarget);
  };

  const handlePolypharmacyMenuClose = () => {
    setPolypharmacyAnchorEl(null);
  };


  const admin = localStorage.getItem('admin');

  if (admin) {
    return (
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: '#96d2b0' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#000', textDecoration: 'none', fontSize: '1rem' }}>
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
            <Button component={Link} to="/" sx={{ color: '#000', fontSize: '0.8rem' }}>Home</Button>
            <Button component={Link} to="/panel" sx={{ color: '#000', fontSize: '0.8rem' }}>Feedback</Button>
            {window.location.pathname !== '/logout' && (
              <Button onClick={handleLogout} sx={{ color: '#000', fontSize: '0.8rem' }}>Logout</Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
    );
  }
  else {
    return (
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: '#96d2b0' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#000', textDecoration: 'none', fontSize: '0.8rem' }}>
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
            <Button component={Link} to="/" sx={{ color: '#000', fontSize: '1rem' }}>Home</Button>
            <Button
              aria-controls="antidepressant-menu"
              aria-haspopup="true"
              onClick={handleAntidepressantMenuOpen}
              sx={{ color: '#000', fontSize: '0.8rem' }}
            >
              Antidepressants
            </Button>

            <Menu
              id="antidepressant-menu"
              anchorEl={antidepressantAnchorEl}
              open={antidepressantOpen}
              onClose={handleAntidepressantMenuClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              sx={{ marginTop: '40px' }}
            >
              <MenuItem onClick={handleAntidepressantMenuClose}>
                <Button component={Link} to="/antidepressantsGuide" sx={{ color: '#000' }}>Antidepressant Guide</Button>
              </MenuItem>
              <MenuItem onClick={handleAntidepressantMenuClose}>
                <Button component={Link} to="/AntidepressantClinicalGuide" sx={{ color: '#000' }}>Antidepressant Clincal Guide</Button>
              </MenuItem>
              <Button component={Link} to="/" sx={{ color: '#000' }}>AntiDepressant Safety Concerns</Button>
            </Menu>

            <Button
              aria-controls="antipsychotics-menu"
              aria-haspopup="true"
              onClick={handleAntipsychoticsMenuOpen}
              sx={{ color: '#000', fontSize: '0.8rem' }}
            >
              Antipsychotics
            </Button>

            <Menu
              id="antipsychotics-menu"
              anchorEl={antipsychoticsAnchorEl}
              open={antipsychoticsOpen}
              onClose={handleAntipsychoticsMenuClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              sx={{ marginTop: '40px' }}
            >
              <MenuItem onClick={handleAntipsychoticsMenuClose}>
                <Button component={Link} to="/AntipsychoticsGuide" sx={{ color: '#000' }}>Antipsychotics Guide</Button>
              </MenuItem>
              <MenuItem onClick={handleAntipsychoticsMenuClose}>
                <Button component={Link} to="/" sx={{ color: '#000' }}>Antidepressants Safety Concerns</Button>
              </MenuItem>
            </Menu>


            <Button
              aria-controls="insomnia-menu"
              aria-haspopup="true"
              onClick={handleInsomniaMenuOpen}
              sx={{ color: '#000', fontSize: '0.8rem' }}
            >
              Insomnia
            </Button>

            <Menu
              id="insomnia-menu"
              anchorEl={insomniaAnchorEl}
              open={insomniaOpen}
              onClose={handleInsomniaMenuClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              sx={{ marginTop: '40px' }}
            >
              <MenuItem onClick={handleInsomniaMenuClose}>
                <Button component={Link} to="/InsomniaManagement" sx={{ color: '#000' }}>Insomnia Management</Button>
              </MenuItem>
              <MenuItem onClick={handleInsomniaMenuClose}>
                <Button component={Link} to="/InsomniaSedatives" sx={{ color: '#000' }}>Sedatives/hypnotics Guide</Button>
              </MenuItem>
              <MenuItem onClick={handleInsomniaMenuClose}>
                <Button component={Link} to="/InsomniaClinical" sx={{ color: '#000' }}>Sedatives/hypnotics Clinical Guide</Button>
              </MenuItem>
              <MenuItem onClick={handleInsomniaMenuClose}>
                <Button component={Link} to="/InsomniaSafety" sx={{ color: '#000' }}>Sedatives/hypnotics Safety Concerns</Button>
              </MenuItem>
            </Menu>

            <Button component={Link} to="/" sx={{ color: '#000', fontSize: '0.8rem' }}>Hypnotics</Button>

            <Button
              aria-controls="dementia-menu"
              aria-haspopup="true"
              onClick={handleDementiaMenuOpen}
              sx={{ color: '#000', fontSize: '0.8rem' }}
            >
              Dementia
            </Button>

            <Menu
              id="dementia-menu"
              anchorEl={dementiaAnchorEl}
              open={dementiaOpen}
              onClose={handleDementiaMenuClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              sx={{ marginTop: '40px' }}
            >
              <MenuItem onClick={handleDementiaMenuClose}>
                <Button component={Link} to="/CognitiveEnhancersGuide" sx={{ color: '#000' }}>Cognitive Enhancers Guide</Button>
              </MenuItem>
              <MenuItem onClick={handleDementiaMenuClose}>
                <Button component={Link} to="/CognitiveEnhancersGuide" sx={{ color: '#000' }}>Cognitive Enhancers Guide continued</Button>
              </MenuItem>
              <MenuItem onClick={handleDementiaMenuClose}>
                <Button component={Link} to="/CognitiveEnhancersGuide" sx={{ color: '#000' }}>Cognitive Enhancers Clinical Guide</Button>
              </MenuItem>
              <MenuItem onClick={handleDementiaMenuClose}>
                <Button component={Link} to="/CognitiveEnhancersGuide" sx={{ color: '#000' }}>NPS Management</Button>
              </MenuItem>
            </Menu>


            <Button
              aria-controls="delirium-menu"
              aria-haspopup="true"
              onClick={handleDeliriumMenuOpen}
              sx={{ color: '#000', fontSize: '0.8rem' }}
            >
              Delirium
            </Button>

            <Menu
              id="delirium-menu"
              anchorEl={deliriumAnchorEl}
              open={deliriumOpen}
              onClose={handleDeliriumMenuClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              sx={{ marginTop: '40px' }}
            >
              <MenuItem onClick={handleDeliriumMenuClose}>
                <Button component={Link} to="/DeliriumManagement" sx={{ color: '#000' }}>Delirium Management</Button>
              </MenuItem>
              <MenuItem onClick={handleDeliriumMenuClose}>
                <Button component={Link} to="/DeliriumManagement" sx={{ color: '#000' }}>Anticholinergic activity</Button>
              </MenuItem>
            </Menu>


            <Button
              aria-controls="polypharmacy-menu"
              aria-haspopup="true"
              onClick={handlePolypharmacyMenuOpen}
              sx={{ color: '#000', fontSize: '0.8rem' }}
            >
              Polypharmacy
            </Button>

            <Menu
              id="polypharmacy-menu"
              anchorEl={polypharmacyAnchorEl}
              open={polypharmacyOpen}
              onClose={handlePolypharmacyMenuClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              sx={{ marginTop: '40px' }}
            >
              <MenuItem onClick={handlePolypharmacyMenuClose}>
                <Button component={Link} to="/" sx={{ color: '#000' }}>Common DDI's</Button>
              </MenuItem>
              <MenuItem onClick={handlePolypharmacyMenuClose}>
                <Button component={Link} to="/" sx={{ color: '#000' }}>Notable changes in older adults</Button>
              </MenuItem>
              <MenuItem onClick={handlePolypharmacyMenuClose}>
                <Button component={Link} to="/PrescribingAndDeprescribing" sx={{ color: '#000' }}>Prescribing and deprescribing principles</Button>
              </MenuItem>
            </Menu>

            <Button component={Link} to="/" sx={{ color: '#000', fontSize: '0.8rem' }}>ECT & Psychoactive medications </Button>
            <Button component={Link} to="/MoodStabilizers" sx={{ color: '#000', fontSize: '0.8rem' }}>Mood Stabilizers</Button>
            <Button component={Link} to="/PsychotropicMonitoringSection" sx={{ color: '#000', fontSize: '0.8rem' }}>Psychotropic Monitoring</Button>

            {window.location.pathname !== '/login' && (
              <Button component={Link} to="/login" sx={{ color: '#000', fontSize: '0.8rem' }}>Admin Login</Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
    );
  }
};

export default Navbar;
