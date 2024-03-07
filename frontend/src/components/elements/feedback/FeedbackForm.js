import { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import submitFeedback from './FeedbackBackend';
import './FeedbackForm.css';

import ToastComponent from '../../ToastComponent';

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
  const [subscribe, setSubscribe] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('');

  const [additionalCheckbox, setAdditionalCheckbox] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleRatingChange = (event, value) => {
    setRating(value);
  };

  const handleSubscribeChange = (event) => {
    setSubscribe(event.target.checked);
  };

  const handleAdditionalCheckboxChange = () => {
    setAdditionalCheckbox(!additionalCheckbox);
    console.log('Additional Checkbox: ', !additionalCheckbox);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, email, comment, rating, subscribe });
    submitFeedback(name, email, comment, rating, subscribe)
      .then((data) => {
        showToast('Feedback submitted!', 'success');
      })
      .catch((error) => {
        console.error(error);
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
      <div className="form-container-pg">
        <div className="form-header">
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h5" className="title">
              Feedback Form
            </Typography>
          </Box>
          <Button style={{ float: 'right' }} className="close-button" onClick={onClose}>
            <CloseIcon />
          </Button>
        </div>
        <form onSubmit={handleSubmit}>
          <Box sx={{ m: 1.5 }}>
            <TextField label="Name" variant="filled" fullWidth value={name} onChange={handleNameChange} />
          </Box>

          <Box sx={{ m: 1.5 }}>
            <TextField
              label="Comment"
              variant="filled"
              fullWidth
              multiline
              value={comment}
              onChange={handleCommentChange}
            />
          </Box>

          <Box sx={{ m: 1.5 }}>
            {!subscribe && (
              <TextField
                label="Email"
                variant="filled"
                fullWidth
                type="email"
                value={email}
                onChange={handleEmailChange}
              />
            )}
          </Box>

          <Box sx={{ m: 1.5 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={subscribe}
                  onChange={handleSubscribeChange}
                  name="subscribe"
                />
              }
              label="Submit Feedback Anonymously."
            />
          </Box>

          <Box sx={{ m: 1.5 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={additionalCheckbox}
                  onChange={handleAdditionalCheckboxChange}
                  name="additionalCheckbox"
                />
              }
              label="Use Email-ID for follow-up"
            />
          </Box>

          <Box sx={{ m: 1.5 }}>
            <FormLabel component="legend" required>
              How would you rate your overall experience using the website, from 1-5?
            </FormLabel>
            <Box sx={{ mt: 1 }}>
              <Rating name="rating" value={rating} onChange={handleRatingChange} />
            </Box>
          </Box>
          <Box sx={{ m: 1.5, display: 'flex', justifyContent: 'center' }}>
            <Button
              type="submit"
              variant="contained"
              className="submit-button"
              color="primary"
            >
              Submit
            </Button>
          </Box>
        </form>
      </div>
      <ToastComponent message={toastMessage} type={toastType} />
    </ThemeProvider>
  );
};

export default FeedbackForm;
