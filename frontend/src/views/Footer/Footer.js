import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography, Box, Link } from '@mui/material';
import './Footer.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#24a35c',
      contrastText: '#ffffff',
    },
  },
});

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box component="footer" className="footer">
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Geriatric Psychiatry Green Card 
        </Typography>
        <Typography variant="body2" align="center">
          <Link href="#">Privacy Policy</Link>
          {' | '}
          <Link href="#">Terms of Use</Link>
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
