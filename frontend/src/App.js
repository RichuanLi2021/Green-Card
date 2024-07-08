import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import './components/Navigation.css';
import "./components/elements/feedback/FeedbackForm.css";
import "./App.css";

import LandingPage from './pages/Landing';
import Home from './pages/Home';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import AdminDashboard from "./pages/admin/Dashboard";
import Disclaimer from './components/Disclaimer';
import NavBar from "./components/Navigation";
import Footer from './components/Footer';
import Policy from './pages/Policy';
import ForgotPassword from './pages/ForgotPassword';
import PrivateRoute from './middleware/PrivateRoute';
import PublicRoute from './middleware/PublicRoute';



export default function App() { 
 

  return (  
    <Router>
      <CssBaseline />
      <Disclaimer />
      <NavBar /> 
  
    
      <main>
        <Routes>
          <Route path="/" element={<PublicRoute><LandingPage /></PublicRoute>} />
          <Route path="login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="register" element={<PublicRoute><Register /></PublicRoute>} />
          <Route path="policy" element={<PublicRoute><Policy/></PublicRoute>} />
          

          <Route path="home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="account" element={<PrivateRoute><Account/></PrivateRoute>} />
          <Route path="ForgotPassword" element={<PublicRoute><ForgotPassword/></PublicRoute>} />
          //Create 2 new components, one for email verification upon account creation (same page if attempts login while false)
          //One for password reset feature [Possibly using JSX REACT]

          <Route path="admin">
            <Route path="dashboard" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </main>
      <Footer/>

    </Router>
  );
}
