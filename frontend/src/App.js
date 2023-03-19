import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import './views/Navigation/navigation.css';
import FeedbackFormHandler from './views/FeedbackForm/FeedbackFormHandler';
import "./views/FeedbackForm/FeedbackForm.css";
import HomePage from './views/HomePage/HomePage';
import Disclaimer from './views/HomePage/Disclaimer';

export default function Green() {
    return (
        <>
            <CssBaseline />
            <main>
                <Disclaimer />
                <HomePage />
            </main>
            <FeedbackFormHandler />
        </>
    );
}
