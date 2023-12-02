import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('access-token');
  return !isLoggedIn ? children : <Navigate to="../home" />;
};

export default PublicRoute;
