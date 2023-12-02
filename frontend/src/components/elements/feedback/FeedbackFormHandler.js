import React, { useState } from 'react';
import FeedbackForm from './FeedbackForm';
import { Link } from '@mui/material';


const FeedbackFormHandler = () => {
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <>
      <Link
        // variant="contained"
        onClick={handleOpenForm}
        className="feedback-button"
         sx={{
          textDecoration: 'underline',
          textDecorationColor: 'rgba(0,0,0,0.4)',
          borderRadius: '0%',
          paddingBottom: 1,
          background: '#96d2b0',
        }}>
        Feedback
      </Link>

      {showForm && (
        <>
          <div className="feedback-form-backdrop" onClick={handleCloseForm} />
          <FeedbackForm onClose={handleCloseForm} />
        </>
      )}
    </>
  );
};

export default FeedbackFormHandler;