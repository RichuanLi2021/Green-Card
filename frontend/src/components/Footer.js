import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography, Box, Link, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import './Footer.css';
import FeedbackFormHandler from './elements/feedback/FeedbackFormHandler';


const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      contrastText: '#ffffff',
    },
  },
});

const Footer = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <ThemeProvider theme={theme}>

      <Box component="footer" className="main-footer">
        <div className="footer-content">
          <Typography align="center">
            © {new Date().getFullYear()} The Green Card: Geriatric Psychotropic Drug Reference Card
          </Typography>
          <Typography variant="body2" align="center">
            <Link href='/policy' className='Policy'>Privacy Policy</Link>
            {' | '}
            <Link sx={{ cursor: 'pointer' }} role="button" onClick={handleOpen} className='disclaimer'>Disclaimer</Link>
            {' | '}
            <FeedbackFormHandler/>
          </Typography>
        </div>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Disclaimer</DialogTitle>
        <DialogContent>
          <Typography variant="body1" >
            WARNING: This card is meant to support rather than guide management decisions in older adults.
            Information is not comprehensive and errors may occur. Drug doses and other management recommendations
            may not reflect manufacturers’ recommendation but are based on clinical literature and expert opinion.
            Listed maximum doses are meant for physically healthy older adults, and in general not recommended for
            frail patients. The Green Card should not supersede clinical judgment and is not applicable in all circumstances
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>


    </ThemeProvider>
  );
};

export default Footer;
