import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import './components/Navigation.css';
import "./components/elements/feedback/FeedbackForm.css";
import "./App.css";

// Pages
import Home from './views/HomePage/HomePage';

import Login from "./pages/LoginIndex";
import SearchResultPage from "./pages/SearchResultPage";
import SearchResults from "./pages/SearchResults";

// Admin Pages
import AdminPanel from "./pages/admin/Dashboard";
import AdminFeedback from "./pages/admin/ShowFeedback";

// Components
import Disclaimer from './components/Disclaimer';
import NavBar from "./components/Navigation";
import Footer from './components/Footer';


export default function App() {
    return (
        <Router>
            <CssBaseline />
            <main>
                <Disclaimer />
                <NavBar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />

                    <Route path="search-results" element={<SearchResultPage />} />
                    <Route path="search" element={<SearchResults />} />

                    <Route path="admin">
                        <Route path="panel" element={<AdminPanel />} />
                        <Route path="feedback" element={<AdminFeedback />} />
                    </Route>
                </Routes>

            </main>
            
            <Footer />

        </Router>
    );
}

