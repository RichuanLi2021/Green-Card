import React from 'react';
import createTheme from '@mui/material/styles/createTheme';
import { ThemeProvider } from '@mui/material/styles';
import {Typography} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#96d2b0'
        }
    }
});

function Policy() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>
        <h1>Our Privacy Policy</h1>
        <Typography style={{ textAlign: 'center' }}>
          Privacy & Policy Page Coming Soon!
        </Typography>
      </div>
    </ThemeProvider>
  )
}

export default Policy;