import { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Close from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './FeedbackForm.css';

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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, email, comment, rating, subscribe });
    onClose();
  };

  return (
    <ThemeProvider theme={theme}>
      <Box className="form-container">
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h5" className="title">
            Feedback Form
          </Typography>
          <Button onClick={onClose}>
            <Close />
          </Button>
        </Box>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="filled"
            className="input-field"
            fullWidth
            value={name}
            onChange={handleNameChange}
            required
          />
          <Box mt={2}>
            <TextField
              label="Email"
              variant="filled"
              className="input-field"
              fullWidth
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </Box>
          <Box mt={2}>
            <TextField
              label="Comment"
              variant="filled"
              className="input-field"
              fullWidth
              multiline
              value={comment}
              onChange={handleCommentChange}
              required
            />
          </Box>
          <Box mt={2}>
            <FormLabel component="legend">Overall Rating</FormLabel>
            <Rating
              name="rating"
              value={rating}
              onChange={handleRatingChange}
              required
            />
          </Box>
          <Box mt={2}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={subscribe}
                  onChange={(event) => setSubscribe(event.target.checked)}
                  name="subscribe"
                />
              }
              label="We can send you follow-up questions via email."
            />
          </Box>
          <Box mt={2} display="flex" justifyContent="center">
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
      </Box>
    </ThemeProvider>
  );
};

export default FeedbackForm;
