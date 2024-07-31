import React, { useState } from 'react';
import {
        Typography,
        TextField,
        FormLabel,
        FormControlLabel,
        Checkbox,
        Box,
        Button,
        Rating,
        createTheme,
        ThemeProvider
        } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import submitFeedback from './FeedbackBackend'; // Adjust the import path as necessary
import ToastComponent from '../../ToastComponent'; // Adjust the import path as necessary

  const theme = createTheme({
  palette: {
  primary: {
  main: '#96d2b0',
  },
  },
  });

  const FeedbackForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(null);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('');
  const [additionalCheckbox, setSubscribe] = useState(false);
  const handleSubscribe = () => {
    setSubscribe(!additionalCheckbox);
    console.log('Additional Checkbox: ', !additionalCheckbox);
  };

  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleCommentChange = (event) => setComment(event.target.value);
  const handleRatingChange = (_, newValue) => setRating(newValue);
  const handleIsAnonymousChange = (event) => setIsAnonymous(event.target.checked);


  const handleSubmit = (event) => {
    event.preventDefault();
    const feedbackData = {
      name: isAnonymous ? '' : name,
      email: isAnonymous ? '' : email,
      comment,
      rating,
      allowEmailBack: additionalCheckbox, // Use additionalCheckbox here
      reviewed: false, // Add the `reviewed` property with a default value of `false`
    };
  
   submitFeedback(feedbackData)
      .then(() => showToast('Feedback submitted!', 'success'))
      .catch(error => {
        console.error('Failed to submit feedback:', error);
        showToast('Failed to submit feedback!', 'error');
      });
  };

  const showToast = (message, type) => {
  setToastMessage(message);
  setToastType(type);
  setTimeout(() => {
  setToastMessage('');
  setToastType('');
  }, 3000);
  };

    return (
    <ThemeProvider theme={theme}>
    <Box className="form-container-pg">
    <Box width="100%" maxWidth={500}>
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
    <Typography variant="h5">Feedback Form</Typography>
    <Button onClick={onClose}>
    <CloseIcon />
    </Button>
    </Box>
    <form onSubmit={handleSubmit}>
    <Box margin={1}>
            {!isAnonymous && (
    <>
    <TextField label="Name" variant="outlined" fullWidth value={name} onChange={handleNameChange} margin="normal" />
    <TextField label="Email" variant="outlined" fullWidth type="email" value={email} onChange={handleEmailChange} margin="normal" />
    
    </>
    )}
    <TextField label="Comment" variant="outlined" fullWidth multiline  value={comment} onChange={handleCommentChange} margin="normal" />
    <FormControlLabel control={<Checkbox checked={isAnonymous} onChange={handleIsAnonymousChange} />} label="Submit feedback anonymously" />
    {!isAnonymous && (
    <>



      <div>
        <FormControlLabel
          control={
            <Checkbox 
              checked={additionalCheckbox} 
              onChange={handleSubscribe} 
            />
          }
          label="Request for response"
        />
      </div>
    </>
            )}
    <FormLabel component="legend">Rate your experience</FormLabel>
    <Rating name="rating" value={rating} onChange={handleRatingChange} />
    <Box display="flex" justifyContent="center" marginY={2}>
    <Button type="submit" variant="contained" color="primary">Submit</Button>
    </Box>
    </Box>
    </form>
    <ToastComponent message={toastMessage} type={toastType} />
    </Box>
    </Box>
    </ThemeProvider>
  );
};

export default FeedbackForm;
