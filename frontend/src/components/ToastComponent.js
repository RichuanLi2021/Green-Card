import React, { useState, useEffect } from 'react';
import './ToastComponent.css'; // Import your styling for the Toast component

const ToastComponent = ({ message, type }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the toast when a new message is received
    if (message) {
      setIsVisible(true);
      // Automatically hide the toast after a duration (e.g., 3 seconds)
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 7000);

      // Clear the timeout when the component unmounts or a new message is received
      return () => clearTimeout(timeout);
    }
  }, [message]);

  return (
    <div className={`toast ${type} ${isVisible ? 'show' : ''}`}>
      <p>{message}</p>
    </div>
  );
};

export default ToastComponent;
