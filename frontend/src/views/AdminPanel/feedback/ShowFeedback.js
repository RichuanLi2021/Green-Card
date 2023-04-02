import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#96d2b0',
    },
  },
});

const ShowFeedback = ({ onClose }) => {
    
  return (
    <ThemeProvider theme={theme}>
      <div className="form-container">
        <div className="form-header">
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h5" className="title">
              Feedback Form
            </Typography>
            <Button onClick={onClose}>
              <CloseIcon />
            </Button>
          </Box>
        </div>
        <p className="form-description">
            User Feedback
        </p>

      </div>
    </ThemeProvider>
  );
};

export default ShowFeedback;
