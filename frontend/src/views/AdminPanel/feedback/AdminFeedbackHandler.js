import { Button } from '@mui/material'
import React, { useState } from 'react'
import FeedbackBackEnd from './FeedbackBackEnd'

const FeedbackHandler = () => {
  const [showForm, setShowForm] = useState(false);

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
        sx={{
          justifyContent: 'center',
          font: 'inherit',
          opacity: 0.7,
          background: '#96D2B0',
          color: '#000',
          ':hover': { opacity: 1, background: '#96d2b0' },
        }}
      >
        Open All Feedbacks Received
      </Button>
      {showForm && (
        <>
          <div className="feedback-form-backdrop" onClick={handleCloseForm} />
          <FeedbackBackEnd onClose={handleCloseForm} />
        </>
      )}
    </>
  )
}

export default FeedbackHandler