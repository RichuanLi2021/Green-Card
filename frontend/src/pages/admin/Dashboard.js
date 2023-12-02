import React from 'react';
import createTheme from '@mui/material/styles/createTheme';
import { ThemeProvider } from '@mui/material/styles';
// import axios from "axios";
// import Config from "../../config/config";

const theme = createTheme({
    palette: {
        primary: {
            main: '#96d2b0'
        }
    }
});

function Dashboard() {
  return (
    <ThemeProvider theme={theme}>
      <h1>Admin Dashboard</h1>
    </ThemeProvider>
  )
}

export default Dashboard;
