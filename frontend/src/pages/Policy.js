import React from 'react';
import createTheme from '@mui/material/styles/createTheme';
import { ThemeProvider } from '@mui/material/styles';
import { Typography } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#96d2b0'
    }
  }
});

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh',
  padding: '20px',
};

const textContainerStyle = {
  width: '60%',
  textAlign: 'center',
};

function Policy() {
  return (
    <ThemeProvider theme={theme}>
      <div style={containerStyle}>
        <div style={textContainerStyle}>
          <Typography variant="h4" style={{ marginBottom: '20px' }}>
            Our Privacy Policy
          </Typography>
          <Typography style={{ marginBottom: '20px' }}>
            Welcome to the Geriatrics Psychotropic Green Card website. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you visit our website.
          </Typography>
          <Typography style={{ marginBottom: '20px', textAlign: 'center' }}>
            We use the collected information for the following purposes:
            <br />
            To process and evaluate your application for a Geriatrics Psychotropic Green Card.
            <br />
            To communicate with you regarding your application and related matters.
            <br />
            To comply with legal and regulatory requirements.
          </Typography>
          <Typography style={{ marginBottom: '20px', textAlign: 'center' }}>
            We do not sell, trade, or otherwise transfer your personal or health information to third parties without your consent, except as required by law or to trusted service providers assisting us in the application process.
          </Typography>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Policy;
