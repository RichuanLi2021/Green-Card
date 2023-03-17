import React from 'react';
import './FeedbackForm'; // Import the CSS file
import FeedbackForm from './FeedbackForm';
import Button from '@mui/material/Button';

const FeedbackFormHandler = () => {
  const [showForm, setShowForm] = React.useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <>
    <Button
        variant="contained"
        onClick={handleOpenForm}
        className="feedback-icon-button"
        class="feedback-icon-button"
        style={{  font: "inherit", opacity: 0.7, background: '#96d2b0', position: 'fixed', top: '50%', right: '20px'}}
        >
        Open Feedback Form
    </Button>
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