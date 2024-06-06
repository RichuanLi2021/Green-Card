import { useState, useEffect } from 'react';
import { Box, Button, Badge, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Checkbox } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import Config from "../../config/config";
import ToastComponent from '../../components/ToastComponent';
import './Feedback.css';
import { TextareaAutosize } from '@mui/material';


const theme = createTheme({
  palette: {
    primary: {
      main: "#96d2b0",
    },
  },
});

const ShowFeedback = () =>{

  const [feedbackData, setFeedbackData] = useState([]);
  const [unreviewedCount, setUnreviewedCount] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSelected, setFilterSelected] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedReviews, setSelectedReviews] = useState([]);
  const [toastMessage, setToastMessage] = useState('');  
  const [toastType, setToastType] = useState('');

  useEffect(() => {
    fetchFeedbackData();
  }, []);

  // update count of unreviewed feedbacks
  useEffect(() => {
    const count = feedbackData?.filter(feedback => !feedback?.reviewed)?.length || 0;
    setUnreviewedCount(count);
  }, [feedbackData]);

  const fetchFeedbackData = async () => {
    try {
      const response = await axios.get(`${Config.API_URL}/api/feedback`, { withCredentials: true });
      setFeedbackData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.error('Error fetching feedback data:', error);
    }
  };

  const showToast = (message, type) => {
    setToastMessage(message);
    setToastType(type);
    setTimeout(() => {
      setToastMessage('');
      setToastType('');
    }, 9000);
  };

  const handleFilterButtonClick = () => {
    const filtered = feedbackData.filter((feedback) => feedback.rating < 3);
    setFilteredData(filtered);
    setFilterSelected(true);
  };
  //reset filter applied
  const handleResetButtonClick = () => {
    setFilteredData(feedbackData);
    setSearchTerm("");
    setFilterSelected(false);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = feedbackData.filter((feedback) => {
      const lowerCaseName = feedback.name.toLowerCase();
      const lowerCaseEmail = feedback.email.toLowerCase();
      return (
        lowerCaseName.includes(value) || lowerCaseEmail.includes(value)
      );
    });
    setFilteredData(filtered);
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };
  
  

  const handleSelectReview = (event, id) => {
    //to stop popup
    event.stopPropagation();
    const selectedIndex = selectedReviews.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedReviews, id);
    } else if (selectedIndex >= 0) {
      newSelected = [...selectedReviews];
      newSelected.splice(selectedIndex, 1);
    }
    setSelectedReviews(newSelected);
  };

  const handleMarkAsReviewed = async () => {
    // Iterate through all selectedReviews
    const updatedFeedbackData = [...feedbackData]; // Clone the current feedbackData for immutability
    for (let id of selectedReviews) {
      const feedback = filteredData.find((_, index) => index === id);
      if (feedback && !feedback.reviewed) {
        try {
          console.log(feedback.uuid);
          // Assuming feedback.id is the correct identifier for your backend
          await axios.put(`${Config.API_URL}/api/feedback/${feedback.uuid}`, {
          
            reviewed: true,
          }, {withCredentials: true});
          showToast('Successfully updated feedback', 'success');
          fetchFeedbackData();
          
          // Find the index in the original feedbackData array and update the reviewed status
          const originalIndex = updatedFeedbackData.findIndex(f => f.id === feedback.id);
          if (originalIndex !== -1) {
            updatedFeedbackData[originalIndex] = { ...updatedFeedbackData[originalIndex], reviewed: true };
          }
        } catch (error) {
          console.error('Error updating feedback:', error);
          showToast('Error updating feedback', 'error');
        }
      }
    }
    setSelectedReviews([]); // Clear selected reviews after updating
  };

  const handleSelectAllReviews = () => {
    if(selectedReviews.length === filteredData.length){
      setSelectedReviews([]);
    } else {
      const newSelected = filteredData.map((feedback, index) => feedback.id || index);
      setSelectedReviews(newSelected);
    }
  };  
  return (
    <ThemeProvider theme={theme}>
      <ToastComponent message={toastMessage} type={toastType} />
      <div className="feedback-form-container">
        <div className="feedback-form-header">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5" className="title">
              Feedbacks
            </Typography>
            <Badge badgeContent={unreviewedCount} color="primary" sx={{ ml: 1 }}>
              <MailIcon color="action" />
            </Badge>
          </Box>
          <Box mt={2} display="flex" justifyContent="center">
            <Button variant="contained" onClick={handleSelectAllReviews} sx={{ mr: 1 }}>
              {selectedReviews.length === filteredData.length ? 'Deselect All' : 'Select All'}
            </Button>
            {selectedReviews.length > 0 && (
              <Button
              variant="contained"
              onClick={handleMarkAsReviewed}
              sx={{ backgroundColor: '#96d2b0', color: 'black', mr: 1}}
              >
                Reviewed
              </Button>
            )}
            <Button
              variant="contained"
              onClick={handleFilterButtonClick}
              sx={{ mr: 1 }}
              color={filterSelected ? "warning" : "primary"}
            >
              Filter (rating {"<"} 3)
            </Button>
            <Button variant="contained" onClick={handleResetButtonClick}>
              Reset
            </Button>
          </Box>
        </div>
        <Box mt={2} display="flex" alignItems="center">
          <TextField
            sx={{zIndex: '0'}}
            label="Search"
            variant="outlined"
            size="small"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </Box>
        <TableContainer component={Paper} >
          <Table stickyHeader aria-label="feedback table">
            <TableHead>
            <TableRow >
                <TableCell padding="checkbox">Select</TableCell>
                <TableCell stickyHeader>Reviewed</TableCell>
                <TableCell stickyHeader>Name</TableCell>
                <TableCell stickyHeader>Email</TableCell>
                <TableCell stickyHeader>Comment</TableCell>
                <TableCell stickyHeader>Overall Rating</TableCell>
                <TableCell stickyHeader>Subscribe</TableCell>
                <TableCell stickyHeader>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((feedback, index) => (
              <TableRow
                key={index}
                onClick={() => { setSelectedFeedback(feedback); setPopupOpen(true); }}
                style={feedback.reviewed ? { backgroundColor: '#f0f0f0' } : {}}
              >
                <TableCell padding="checkbox" onClick={(event) => event.stopPropagation()}>
                  <Checkbox
                    checked={selectedReviews.includes(index)}
                    onChange={(event) => handleSelectReview(event, index)}
                  />
                </TableCell>
                <TableCell sx={{ fontWeight: feedback.reviewed ? 'normal' : 'bold' }}>{feedback.reviewed ? "Yes" : "No"}</TableCell>
                <TableCell sx={{ fontWeight: feedback.reviewed ? 'normal' : 'bold' }}>{feedback.name}</TableCell>
                <TableCell sx={{ fontWeight: feedback.reviewed ? 'normal' : 'bold' }}>{feedback.email}</TableCell>
                <TableCell sx={{ fontWeight: feedback.reviewed ? 'normal' : 'bold' }}>{truncateText(feedback.comment, 20)}</TableCell>
                <TableCell sx={{ fontWeight: feedback.reviewed ? 'normal' : 'bold' }}>{feedback.rating}</TableCell>
                <TableCell sx={{ fontWeight: feedback.reviewed ? 'normal' : 'bold' }}>{feedback.allowEmailBack ? "Yes" : "No"}</TableCell>
                <TableCell sx={{ fontWeight: feedback.reviewed ? 'normal' : 'bold' }}>{new Date(feedback.createdAt).toLocaleDateString('en-ca')}</TableCell>
              </TableRow>
            ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* POPUP MODAL */}
          {popupOpen && (
            <Box className={`popup-backdrop show-popup`} onClick={() => setPopupOpen(false)} />
          )}
          {popupOpen && (
            <Box className={`popup show-popup`}>
              <Typography variant="h6" className="title" mb={2} align='center'>
                Feedback Details
              </Typography>
              <Typography mb={2}>Name: {selectedFeedback.name}</Typography>
              <Typography mb={2}>Email: {selectedFeedback.email}</Typography>
              <Box mb={2} style={{ maxHeight: '200px', overflowY: 'scroll' }}>
                <TextareaAutosize
                aria-label="comment"
                value={selectedFeedback.comment}
                disabled
                style={{ width: '100%', resize: 'none', border: 'none', outline: 'none' }}
                />
              </Box>
              <Typography mb={2}>Overall Rating: {selectedFeedback.rating}</Typography>
              <Typography mb={2}>
                Subscribe: {selectedFeedback.allowEmailBack ? "Yes" : "No"}
              </Typography>
              <Typography mb={2}>
                Date: {new Date(selectedFeedback.createdAt).toLocaleDateString('en-ca')}
              </Typography>
              <Box sx={{ m: 1.5, display: 'flex', justifyContent: 'center' }}>
                <Button sx={{backgroundColor: '#96d2b0', color: 'black'}} onClick={() => setPopupOpen(false)} className="popup-close-button">
                  Close
                </Button>
              </Box>
            </Box>
          )}
      </div>
    </ThemeProvider>
  );
};

export default ShowFeedback;
