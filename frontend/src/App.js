import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import './views/Navigation/navigation.css';
import "./views/FeedbackForm/FeedbackForm.css";
import "./App.css";

// Pages
import Home from './views/HomePage/HomePage';

import Login from "./views/Login/LoginIndex";
import SearchResultPage from "./pages/SearchResultPage";
import SearchResults from "./pages/SearchResults";

// Admin Pages
import AdminPanel from "./pages/admin/Panel";
import AdminFeedback from "./pages/admin/ShowFeedback";

// Components
import Disclaimer from './views/HomePage/Disclaimer';
import NavBar from "./views/Navigation/navigation";
import Footer from './views/Footer/Footer';


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

                <Footer />
            </main>
        </Router>
    );
}

