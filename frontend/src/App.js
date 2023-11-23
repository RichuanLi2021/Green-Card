import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import './components/Navigation.css';
import "./components/elements/feedback/FeedbackForm.css";
import "./App.css";

import Home from './pages/HomePage';
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminFeedback from "./pages/admin/Feedback";
import LandingPage from './pages/LandingPage';

import Disclaimer from './components/Disclaimer';
import NavBar from "./components/Navigation";
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <CssBaseline />

      <Disclaimer />
      <NavBar />
      <main>
        <Routes>
          {/* LandingPage at root */}
          <Route path="/" element={<LandingPage />} /> 
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route path="admin">
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="feedback" element={<AdminFeedback />} />
          </Route>
        </Routes>
      </main>
      <Footer />

    </Router>
  );
}
