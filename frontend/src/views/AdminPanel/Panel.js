import React, { useState } from 'react';
import createTheme from '@mui/material/styles/createTheme';
import './Panel.css';
import Navigation from '../Navigation/navigation';
import FeedbackHandler from './feedback/AdminFeedbackHandler';
import { ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#96d2b0'
        }
    }
});

function Panel() {

    return (
        <ThemeProvider theme={theme}>
            <Navigation />
            <div className="panel">
                <h2>Admin Panel</h2>
                <FeedbackHandler />
            </div>
        </ThemeProvider>
    )
}

export default Panel;
